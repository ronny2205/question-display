FactoryGirl.define do
  factory :question do
    the_question "What is 5+5?"
    answer "10"
    distractors "3 ,45"
  end

  factory :question2 do
    the_question "What is 8 * 9?"
    answer "72"
    distractors "73"
  end
end