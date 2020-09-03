class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email 

  def initialize(user_object)
    @user = user_object
  end 

  def to_serialized_json
    options = {
      include: {
        posts: {
          only: [:id, :image, :description, :votes, :latitude, :longitude, :date, :created_at, :user_id]
        }
      },
      only: [:id, :username, :email, :first_name, :last_name]
    }
    @user.to_json(options)
  end 

end
