class QuestionsController < ApplicationController

  def index
    # Params received from the get request
    rand = params[:rand] # for random question display
    page_num = params[:page].to_i # page number for pagination
    filter = params[:filter]  # for filtering questions

    if rand.present?
  	  # Displaying a random question
      if rand == "yes"
  	    render json: Question.order("RANDOM()").first
      else
        return render :text => 'Bad request', :status => :bad_request  
      end  
    else 
      # An ordered array of all the questions
      ordered_questions = Question.order('id').all

      # Filtering questions
      if filter.present?
        relevant_questions = []
        # Filtering by positive answer
        if filter == "positive"		
  	      ordered_questions.each do |q|
  	        relevant_questions << q if q.answer.to_i > 0  
  	      end
  	    # Filtering by negative answer   
  	    elsif filter == "negative"
  	      ordered_questions.each do |q|
  	        relevant_questions << q if q.answer.to_i < 0  
  	      end
  	    # All questions   
  	    elsif filter == "all"
  	      relevant_questions = ordered_questions
        # Return error for a non valid filter  
        else
          return render :text => 'No such filter', :status => :bad_request
  	    end   
        # Pagination of all relevant questions in json format	
        pagination(relevant_questions, page_num)
	  else
	  	# Displaying all questions in the db in json format	
	  	render json: ordered_questions
	  end 
	end  	 
  end

  def update
  	question = Question.find(params[:id])
    question.update_attributes(question_params)
    if question.save
      render json: question
    else
      render :text => 'The question was not updated', status => :internal_server_error
    end
  end

  def create
  	question = Question.create(question_params)
    if question.save
      render json: question
    else
      render :text => 'The question was not updated', status => :internal_server_error
    end
  end

  def pagination(relevant_questions, page_num)
    # The pagination works with nine records per page
    questions_num = relevant_questions.length
    if questions_num % 9 == 0
      @num_of_pages = questions_num / 9
    else
      @num_of_pages = questions_num / 9 + 1
    end  

    # Return error for a non valid filter 
    if page_num > @num_of_pages
      return render :text => 'No such page', :status => :bad_request 
    end
      
    # The index of the first question of the current page
    first_ind = 9 * (page_num.to_i - 1)
    last_ind = first_ind + 8

    @current_questions = relevant_questions[first_ind..last_ind]
    # @current_questions << @num_of_pages
    @current_questions << {"number_of_pages" => @num_of_pages}
    render json: @current_questions
  end 
   
  private

  def question_params
    params.require(:question).permit(:the_question, :answer, :distractors)
  end
end
