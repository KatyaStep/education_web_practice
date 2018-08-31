console.log("CONNECTED")

//Create an array of movie objects.Each movie should have a title, rating and hasWatched properties. Itearte through the array
var movieDB = [
 {
     title:"In Bruges",
     rating:"5 stars",
     watched:true
 },
 {
     title:"Frozen",
     rating:"4.5 stars",
     watched:false
  },
  {
      title:"Mad Max Fury Roads",
      rating:"5 stars",
      watched:true
    },
]
movieDB.forEach(function(movie){
        if (movie.watched){
            var result = ("You have watched " + "\"" + movie.title + "\"" + "\"-" + movie.rating)
            }
        else {
            result = ("You haven't watched " + "\"" + movie.title + "\"" + "\"-" + movie.rating)
        }
        console.log (result)  
    })
