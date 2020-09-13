class CommentsController < ApplicationController

    class PostsController < ApplicationController

    end

    def new 
        comment = Comment.new 
        render json: CommentSerializer.new(comment).to_serialized_json
    end 

    def show 
        comment = Comment.find(params[:id])
        render json: CommentSerializer.new(comment).to_serialized_json
    end 

    def create 
        comment = Comment.create(adventure_params) 
        render json: CommentSerializer.new(comment).to_serialized_json
    end 

    def update 
        comment = Comment.find(params[:id]) 
        if comment.update(comment_params) 
            render json: Comment.new(comment).to_serialized_json
        end 
    end     

    def index 
        comments = Comment.all 
        render json: CommentSerializer.new(comments).to_serialized_json
    end 
    
    def destroy 
        Comment.find(params[:id]).destroy
    end 

    private 

        def comment_params
            params.require(:comment).permit(:context, :user_id, :post_id)
        end


end