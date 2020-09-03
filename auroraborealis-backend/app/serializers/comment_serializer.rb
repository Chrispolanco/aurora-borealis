class CommentSerializer

    def initialize(comment_object)
      @comment = comment_object
    end 
  
    def to_serialized_json
      options = {
        only: [:id, :context, :post_id, :user_id]
      }
      @comment.to_json(options)
    end 
  
  end