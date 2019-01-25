class CreateContactForms < ActiveRecord::Migration[5.1]
  def change
    create_table :contact_forms do |t|
      t.string :nom
      t.string :prenom
      t.string :email
      t.text :message

      t.timestamps
    end
  end
end
