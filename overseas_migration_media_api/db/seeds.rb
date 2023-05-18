3.times do |i|
  Book.create(title: "タイトル #{i}", body: "内容 #{i}")
end