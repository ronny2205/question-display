class QuestionsController < ApplicationController
  def index
  	process_dump
  	# Displaying all questions in the db in json format
  	render json: Question.all
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
	    Question.create(the_question: record[0], answer: record[1], distractors: record[2])
	}

	f.close
  end	
end
