class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:session][:username])
        if user && user.authenticate(params[:session][:password])
            session[:user_id] = user.id
            render json: UserSerializer.new(user).to_serialized_json
        else
            render json: {
                error: "Incorrect Username or Password"
            }
        end
    end

    def destroy
        session.clear
        render json: {
            notice: "Successfully logged out"
        }, 
            status: 200
    end 

    def get_current_user
        if logged_in? 
            render json: UserSerializer.new(user).to_serialized_json 
        else 
            render json: {
                error: "Log in or Signup"
            }
        end 
    end 
 
end 
