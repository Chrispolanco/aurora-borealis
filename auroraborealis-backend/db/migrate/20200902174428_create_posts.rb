class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :image
      t.string :description
      t.string :votes
      t.string :latitude
      t.string :longitude
      t.string :date
      t.string :time

      t.timestamps
    end
  end
end
