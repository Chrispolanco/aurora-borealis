class ApplicationController < ActionController::API
    include ::ActionController::Cookies

    def current_user
        User.find_by(decode_token: params[:id])
    end 

    def logged_in? 
        !!current_user
    end 

    def encode_token(payload)
        JWT.encode(payload, "secret")   
    end 

    def decode_token 
        jwt = cookies.signed[:jwt]
        JWT.decode(jwt,"secret")
    end 
end
