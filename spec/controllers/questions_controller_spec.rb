require 'rails_helper'

RSpec.describe QuestionsController, type: :controller do
  describe "questions#index" do
    it "should list the questions in the database" do
      q1 = FactoryGirl.create(:question)
      q2 = FactoryGirl.create(:question)
      get :index
      expect(response).to have_http_status :success
      response_value = ActiveSupport::JSON.decode(@response.body)
      expect(response_value.count).to eq(2)
    end
  end

  describe "question#create" do
    it "should allow new questions to be created" do
      post :create, question: {the_question: "why", answer: "no", distractors: "100, 200"}
      expect(response).to have_http_status(:success)
      response_value = ActiveSupport::JSON.decode(@response.body)
      expect(response_value['answer']).to eq("no")
      expect(Question.last.the_question).to eq("why")
    end
  end
end
