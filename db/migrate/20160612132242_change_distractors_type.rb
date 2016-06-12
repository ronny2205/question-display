class ChangeDistractorsType < ActiveRecord::Migration
  def change
  	change_column :questions, :distractors, :string
  end
end
