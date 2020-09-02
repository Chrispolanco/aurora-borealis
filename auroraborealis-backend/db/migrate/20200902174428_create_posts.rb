class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :image
      t.string :description
      t.string :votes
      t.float :latitude
      t.float :longitude
      t.datetime :datetime

      t.timestamps
    end
  end
end
