class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :the_question
      t.string :answer
      t.string :distractors, array: true, default: []

      t.timestamps null: false
    end
  end
end
