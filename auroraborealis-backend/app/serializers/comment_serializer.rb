class CommentSerializer

    def initialize(comment_object)
      @comment = comment_object
    end 
  
    def to_serialized_json
      options = {
        only: [:id, :context, :post_id, :user_id, :created_at]
      }
      @comment.to_json(options)
    end 
  
  end