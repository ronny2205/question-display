require 'rails_helper'

RSpec.describe QuestionsController, type: :controller do
  describe "questions#index" do
    it "should list the questions in the database" do
      q1 = FactoryGirl.create(:question)
      q2 = FactoryGirl.create(:question)
      q3 = FactoryGirl.create(:question)
      get :index
      expect(response).to have_http_status :success
      response_value = ActiveSupport::JSON.decode(@response.body)
      expect(response_value.count).to eq(3)
    end

    it "should show a random question" do
      q1 = FactoryGirl.create(:question, answer: "-5")
      q2 = FactoryGirl.create(:question)
      get :index, :rand => 'yes'
      expect(response).to have_http_status :success
      response_value = ActiveSupport::JSON.decode(@response.body)
      #expect(response_value.count).to eq(1)
    end

    it "should return bad request status code" do
      q1 = FactoryGirl.create(:question)
      q2 = FactoryGirl.create(:question)
      get :index, :rand => '5'
      expect(response).to have_http_status :bad_request
      response_value = @response.body
      expect(response_value).to eq("Bad request")
    end

    it "should list all question with positive answer" do
      q1 = FactoryGirl.create(:question)
      q2 = FactoryGirl.create(:question)
      q3 = FactoryGirl.create(:question, answer: "-5")
      get :index, :filter => 'positive', :page => '1'
      expect(response).to have_http_status :success
      response_value = ActiveSupport::JSON.decode(@response.body)
      expect(response_value.count).to eq(3)
    end

    it "should list all question with negative answer" do
      q1 = FactoryGirl.create(:question)
      q2 = FactoryGirl.create(:question)
      q3 = FactoryGirl.create(:question, answer: "-5")
      get :index, :filter => 'negative', :page => '1'
      expect(response).to have_http_status :success
      response_value = ActiveSupport::JSON.decode(@response.body)
      expect(response_value.count).to eq(2)
    end

    it "should return no such filter" do
      q1 = FactoryGirl.create(:question)
      q2 = FactoryGirl.create(:question)
      get :index, :filter => 'hello', :page => '1'
      expect(response).to have_http_status :bad_request
      response_value = @response.body
      expect(response_value).to eq("No such filter")
    end

    it "should return no such page" do
      q1 = FactoryGirl.create(:question)
      q2 = FactoryGirl.create(:question)
      get :index, :filter => 'all', :page => '2'
      expect(response).to have_http_status :bad_request
      response_value = @response.body
      expect(response_value).to eq("No such page")
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
