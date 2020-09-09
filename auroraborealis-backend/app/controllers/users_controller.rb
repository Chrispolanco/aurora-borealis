class UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]

    def index
        users = User.all 
        render json: UserSerializer.new(users).to_serialized_json
    end
    
    def show 
        user = User.find(params[:id])
        render json: UserSerializer.new(user).to_serialized_json 
    end 

    def create 
        user = User.new(user_params) 
        if user && user.save 
            session[:user_id] = user.id 
            render json: UserSerializer.new(user).to_serialized_json
        else 
            response = {
                error: user.errors.full_messages.to_sentence 
            }
            render json: user.errors, status: 400
        end 
    end 

    def update 
        user = User.find(params[:id])
        if user.update(user_params) 
        render json: UserSerializer.new(user).to_serialized_json
        end 
    end 

    def destroy 
        User.find(params[:id]).destroy
    end 

    private 

    def set_user 
        user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:username, :email, :first_name, :last_name, :password_digest)
    end

end