class PostsController < ApplicationController


    def new 
        post = Post.new 
        render json: PostSerializer.new(post).to_serialized_json
    end 

    def index
        posts = Post.all 
        render json: PostSerializer.new(posts).to_serialized_json
    end
    
    def show 
        post = Post.find(params[:id])
        render json: PostSerializer.new(post).to_serialized_json 
    end 

    def create 
        post = Post.create(post_params) 
        render json: PostSerializer.new(post).to_serialized_json
    end 

    def update 
        post = Post.find(params[:id])
        if post.update(post_params) 
        render json: PostSerializer.new(post).to_serialized_json
        end 
    end 

    def destroy 
        Post.find(params[:id]).destroy
    end 

    private 

        def post_params
            params.require(:post).permit(:image, :description, :votes, :latitude, :longitude, :date, :story, :location, :user_id)
        end

end


