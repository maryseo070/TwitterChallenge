class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render template: 'api/clients/index'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def use_params
    params.require(:user).permit(:username, :password, :f_name, :l_name)
  end
end
