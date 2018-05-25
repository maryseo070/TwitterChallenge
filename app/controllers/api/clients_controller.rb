require 'twitter'

class Api::ClientsController < ApplicationController



  def index
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "PLFs6Ji5TLhXLihAW59Xpsk69"
      config.consumer_secret     = "NVt3JLeAj1aBHns1JYwios1H17fd0eqdK1hUE9wzAg8FZDhozI"
      config.access_token        = "999983451481759745-OjsaXhJQyqpRfHPMeiVyxugkWjxiR5P"
      config.access_token_secret = "To4VvdetNYdwuqs4Pdxa3DuWOm9frJliljf8oOxU11bQi"
    end
    tweets = @client.user_timeline('rubyinside', count: 25)
    debugger
  end
end
