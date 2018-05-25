require 'twitter'

class Api::ClientsController < ApplicationController

  # def index
  #   @client = Twitter::REST::Client.new do |config|
  #     config.consumer_key        = ENV["consumer_key"]
  #     config.consumer_secret     = ENV["consumer_secret"]
  #     config.access_token        = ENV["access_token"]
  #     config.access_token_secret = ENV["access_token_secret"]
  #   end
  #   @tweets = @client.user_timeline('rubyinside', count: 25)
  #   # tweets.first.user.name
  #   # debugger
  # end

  def index
    handle = params[:handle]
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["consumer_key"]
      config.consumer_secret     = ENV["consumer_secret"]
      config.access_token        = ENV["access_token"]
      config.access_token_secret = ENV["access_token_secret"]
    end
    @tweets = @client.user_timeline(handle, count: 25)

    render :index
  end




end
