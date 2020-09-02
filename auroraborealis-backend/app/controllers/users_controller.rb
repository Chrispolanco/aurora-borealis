class UsersController < ApplicationController

    def new 
        user = User.new 
        render json: UserSerializer.new(user).to_serialized_json
    end 

    def index
        users = User.all 
        render json: UserSerializer.new(users).to_serialized_json
    end 
    
    def show 
        user = User.find(params[:id])
        render json: UserSerializer.new(user).to_serialized_json 
    end 

    def create 
        user = User.create(user_params) 
        if user && user.save 
            session[:user_id] = user.id 
            render json: UserSerializer.new(user).to_serialized_json
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

    def user_params
        params.require(:user).permit(:username, :name, :password, :won_adventure_1, :won_adventure_2, :won_adventure_3, :won_adventure_4, :id)
    end

end


end
