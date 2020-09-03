class PostSerializer

  def initialize(post_object)
    @post = post_object
  end 

  def to_serialized_json
    options = {
      include: {
        comments: {
          only: [:id, :context, :created_at]
        }
      }, 
      only: [:id, :image, :description, :votes, :latitude, :longitude, :date, :created_at, :user_id]
    }
    @post.to_json(options)
  end 


end
