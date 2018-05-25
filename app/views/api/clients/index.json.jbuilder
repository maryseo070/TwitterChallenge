
  @tweets.each do |tweet|
    json.set! tweet.id do
      json.extract! tweet, :text, :id, :created_at
    end
  end
