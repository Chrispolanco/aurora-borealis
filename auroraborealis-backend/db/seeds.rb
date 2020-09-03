# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
    {username: "Chrispolanco", email: "chrispolanco@sbcglobal.net", first_name: "Christian", last_name: "Polanco", password_digest: "password"}
]); 

Comment.create([
    {context: "The moon was especially bright this night"}
]); 

Post.create([
    {image: "google.com", description: "moon on 12/12/1990", votes:10, latitude: 12.0, longitude: 12.0, datetime: 12/12/1990}
]); 