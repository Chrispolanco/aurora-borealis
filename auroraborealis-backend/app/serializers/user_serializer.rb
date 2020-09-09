class UserSerializer < ActiveModel::Serializer

  def initialize(user_object)
    @ser = user_object
  end 

  def to_serialized_json
    options = {
      include: {
        posts: {
          only: [:id, :image, :description, :votes, :latitude, :longitude, :date, :created_at, :user_id]
        }
      },
      except: [:updated_at, :created_at, :password_digest],
    }
    @user.to_json(options)
  end 

end
