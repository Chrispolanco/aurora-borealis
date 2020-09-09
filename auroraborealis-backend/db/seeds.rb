# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
    {username: "chrispolanco", email: "chrispolanco@sbcglobal.net", first_name: "Christian", last_name: "Polanco", password: "password"}
]); 

Comment.create([
    {context: "The moon was especially bright this night", user_id: 1, post_id: 1}
]); 

Post.create([
    {image: "google.com", description: "moon on 12/12/1990", votes:10, latitude: 12.0, longitude: 12.0, date: "1990-12-12", user_id: 1}
]); 