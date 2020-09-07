class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
      t.string :name
      t.integer :cells, null: false, index: true, array: true, default: []
      t.integer :current_turn_user_id
      t.integer :subscribed_user_ids, index: true, array: true, default: []
      t.integer :winner

      t.timestamps
    end
  end
end
