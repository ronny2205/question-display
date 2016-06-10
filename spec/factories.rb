FactoryGirl.define do
  factory :question do
    the_question "What is 5+5?"
    answer "10"
    distractors ["3","45"]
  end
end