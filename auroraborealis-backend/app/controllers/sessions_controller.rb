class SessionsController < ApplicationController

    def create
        user = User.find_by(:email => params[:user][:email])
        if user && user.authenticate(params[:user][:password])
            token = encode_token(id: user.id)
            userObj = {
                id: user.id, 
                username: user.username, 
                email: user.email, 
                first_name: user.first_name, 
                last_name: user.last_name, 
                token: token
            }
            render json: {user: userObj}
        else 
            render json: { error: "User not authenticated" }
        end 
    end

end 
