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




    # def create
    #     user = User.find_by(:email => params[:user][:email])

    #     if user && user.authenticate(params[:user][:password])
    #         token = encode_token(id: user.id)
    #         cookies.signed[:jwt] = {value: token, httponly: true, expires: 1.hour.from_now}

    #         userObj = {
    #             username: user.username, 
    #             email: user.email, 
    #             first_name: user.first_name, 
    #             last_name: user.last_name, 
    #             token: token
    #         }
    #         render json: userObj, status: 200
    #     else 
    #         render json: { error: "User not authenticated" }, status: 404
    #     end 
    # end

    # def destory 
    #     cookies.delete(:jwt)
    #     render json:{}
    # end 
end 
