class SessionsController < ApplicationController

    def create
        @user = User.find_by(:email => params[:user][:email])
        binding.pry
        if @user && @user.authenticate(params[:user][:password])
            token = encode_token(@user)
            render json: {user: @user, token: token}
        else 
            render json: {
                error: "User not authenticated"
            }
        end 
    end

end 
