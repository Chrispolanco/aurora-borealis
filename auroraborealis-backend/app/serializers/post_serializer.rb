class PostSerializer

  def initialize(post_object)
    @post = post_object
  end 

  def to_serialized_json
    options = {
      include: {
        comments: {
          only: [:id, :context, :post_id, :user_id, :created_at]
        }
      }, 
      only: [:id, :votes, :created_at, :story, :location, :user_id]
    }
    @post.to_json(options)
  end 


end
