class CommentsController < ApplicationController

    def new 
        @comment = Comment.new 
        render json: AdventureSerializer.new(@adventure).to_serialized_json
    end 

    def show 
        @comment = Comment.find(params[:id])
        render json: AdventureSerializer.new(@adventure).to_serialized_json
    end 

    def create 
        @comment = Comment.create(adventure_params) 
        render json: AdventureSerializer.new(@adventure).to_serialized_json
    end 

    def update 
        @comment = Comment.find(params[:id]) 
        if @comment.update(adventure_params) 
            render json: Comment.new(@comment).to_serialized_json
        end 
    end     

    def index 
        @comments = Comment.all 
        render json: CommentSerializer.new(@comments).to_serialized_json
    end 
    
    def destroy 
        Comment.find(params[:id]).destroy
    end 

end
