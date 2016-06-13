class QuestionsController < ApplicationController
	
  def index
    if params[:rand].present?
  	    # Displaying a random question
  	    render json: Question.order("RANDOM()").first
    else 
	    # Pagination of all questions in the db in json format	
	    @page_num = params[:page]

	  	if @page_num.present?
	      pagination
	  	else
	  	  # Displaying all questions in the db in json format	
	  	  @questions = Question.order('id').all
	  	  render json: @questions
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

  def pagination
   	 # The pagination works with nine records per page
     questions_num = Question.count
     if questions_num % 9 == 0
       @num_of_pages = questions_num / 9
     else
       @num_of_pages = questions_num / 9 + 1
     end  
     # The index of the first question of the current page
     first_ind = 9 * (@page_num.to_i - 1)
     last_ind = first_ind + 8

     ordered_questions = Question.order('id').all
     @current_questions = []
     ordered_questions.each_with_index do |q, i|
         if i >= first_ind 
           if i <= last_ind
         	@current_questions << q
           else
             break
           end
         end    	
     end
     @current_questions << @num_of_pages
     render json: @current_questions
  end 

  private

  def question_params
    params.require(:question).permit(:the_question, :answer, :distractors)
  end

end
