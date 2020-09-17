# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
    {username: "chrispolanco", email: "chrispolanco@sbcglobal.net", first_name: "Christian", last_name: "Polanco", password: "password"}, 
    {username: "joss", email: "joss@gmail.net", first_name: "Joss", last_name: "Fuentes", password: "password"},
    {username: "dempsey", email: "dempsey@gmail.net", first_name: "Dempsey", last_name: "Polanco", password: "password"}
]); 

Post.create([
    {story: "moon on 09/12/1990", votes:10, location: "Los Angeles, CA", user_id: 1}, 
    {story: "moon on 10/12/1990", votes:9, location: "Boulder, CO", user_id: 2}, 
    {story: "moon on 11/12/1990", votes:8, location: "Portland, OR", user_id: 3}, 
    {story: "moon on 01/12/1990", votes:8, location: "Austin, TX", user_id: 3}, 
    {story: "moon on 12/12/1990", votes:7, location: "San Diego, CA", user_id: 4}
]); 

Comment.create([
    {context: "Comment number 1", user_id: 1, post_id: 1}, 
    {context: "Comment number 2", user_id: 2, post_id: 2}, 
    {context: "Comment number 3", user_id: 3, post_id: 3}
]);  