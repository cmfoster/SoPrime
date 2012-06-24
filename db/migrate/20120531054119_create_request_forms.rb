class CreateRequestForms < ActiveRecord::Migration
  def change
    create_table :request_forms do |t|
      t.string :fname
      t.string :lname
      t.string :event_type
      t.datetime :start_time
      t.datetime :end_time
      t.string :event_city
      t.string :event_state
      t.integer :phone
      t.string :email

      t.timestamps
    end
  end
end
