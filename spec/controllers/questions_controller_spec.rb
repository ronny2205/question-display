require 'rails_helper'

RSpec.describe QuestionsController, type: :controller do
  describe "questionss#index" do
    it "should list the questions in the database" do
      q1 = FactoryGirl.create(:question)
      q2 = FactoryGirl.create(:question)
      get :index
      expect(response).to have_http_status :success
      response_value = ActiveSupport::JSON.decode(@response.body)
      expect(response_value.count).to eq(2)
    end
  end

  # describe "questions#update" do
  #   it "should allow update questions" do
  #     q = FactoryGirl.create(:question)
  #     put :update, {:id => q.id, :q => { :the_question => 'why', :answer => '222', :distractors => '3' }}
  #     expect(response).to have_http_status(:success)
  #     q.reload
  #     expect(q.distractors).to eq("3")
  #   end
  # end

end
