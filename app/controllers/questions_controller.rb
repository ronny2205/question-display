class QuestionsController < ApplicationController

  def index
    # Params received from the get request
    rand = params[:rand] # for random question display
    page_num = params[:page] # page number for pagination
    filter = params[:filter]  # for filtering questions

    if rand.present?
  	  # Displaying a random question
  	  render json: Question.order("RANDOM()").first
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
    render json: question
  end

  def create
  	question = Question.create(question_params)
    render json: question
  end

  def pagination(relevant_questions, page_num)
    # The pagination works with nine records per page
    questions_num = relevant_questions.length
    if questions_num % 9 == 0
      @num_of_pages = questions_num / 9
    else
      @num_of_pages = questions_num / 9 + 1
    end  
    # The index of the first question of the current page
    first_ind = 9 * (page_num.to_i - 1)
    last_ind = first_ind + 8

    @current_questions = relevant_questions[first_ind..last_ind]
     @current_questions << @num_of_pages
     render json: @current_questions
   end 
   
  private

  def question_params
    params.require(:question).permit(:the_question, :answer, :distractors)
  end
end
