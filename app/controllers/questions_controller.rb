class QuestionsController < ApplicationController
  def index
  	process_dump

    @page_num = params[:page]

  	if @page_num.present?
      pagination
  	else
  	  # Displaying all questions in the db in json format	
  	  @questions = Question.all	
  	  render json: @questions
  	end  
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

     @current_questions = []
     Question.all.each_with_index do |q, i|
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

  # Processing the original dump and inserting all the questions to the database
  def process_dump
    f = File.open("app/assets/question_dump.csv")
 
	f.each_with_index {|line, i|
	    # Ignoring the first line that includes the titles
		next if i == 0
		# Separating the record to question, answer and distractors
		record = line.strip.split('|')
		# Separating the distractors
		record[2] = record[2].split(',')
		# Removing leading and trailing whitespaces from the
		record[2] = record[2].map {|item| item.strip}
		#puts record.inspect
		
		# Insert the question to the database
		if !(Question.where(:the_question => record[0]).present?)
	      Question.create(the_question: record[0], answer: record[1], distractors: record[2])
	    end  
	}

	f.close
  end	
end
