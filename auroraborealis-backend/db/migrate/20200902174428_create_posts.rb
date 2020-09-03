class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :image
      t.string :description
      t.integer :votes
      t.float :latitude
      t.float :longitude
      t.date :date
      t.belongs_to :user, foreign_key: true


      t.timestamps
    end
  end
end
