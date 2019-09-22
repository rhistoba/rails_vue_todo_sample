class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.string :title, null: false, default: ''
      t.integer :status, null: false, default: 0
      t.datetime :deadline

      t.timestamps
    end
  end
end
