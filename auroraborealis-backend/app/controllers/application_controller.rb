class ApplicationController < ActionController::API
    include ::ActionController::Cookies

    def current_user
        User.find_by(id: session[:user_id])
    end 

    def logged_in? 
        !!current_user
    end 

    # def encode_token(payload)
    #     JWT.encode(payload, "secret")   
    # end 

    # def authenicate_user
    #     jwt = cookies.signed[:jwt]
    #     JWT.decode(jwt,"secret")
    # end 

end
