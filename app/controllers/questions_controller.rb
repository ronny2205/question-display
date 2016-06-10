class QuestionsController < ApplicationController
  def index
  	# Displaying all questions in the db in json format
  	render json: Question.all
  end	
end
