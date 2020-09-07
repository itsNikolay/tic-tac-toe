class AuthController < ApplicationController
  def create
    user = User.find_or_create_by!(name: params[:name])
    cookies.encrypted[:user_id] = user.id

    redirect_to root_path
  end
end
