class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :description, :votes, :latitude, :longitude, :date, :time
end
