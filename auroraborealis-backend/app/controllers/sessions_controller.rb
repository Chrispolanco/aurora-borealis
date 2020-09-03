class SessionsController < ApplicationController

    def new 
        user = User.new
        render json: UserSerializer.new(user).to_serialized_json
    end 

    def create
        user = User.find_by(:email => params[:user][:email])

        if user && user.authenticate(params[:user][:password])
            token = encode_token(id: user.id)
            cookies.signed[:jwt] = {value: token, httponly: true}

            userObj = {
                username: user.username, 
                email: user.email, 
                first_name: user.first_name, 
                last_name: user.last_name, 
                token: token
            }
            render json: userObj, status: 200
        else 
            render json: { error: "User not authenticated" }, status: 404
        end 
    end

end 
