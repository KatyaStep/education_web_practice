
// Show trash-can and delete functionality
$('ul').on("mouseenter", "li", function(){
    //$(this).append("<a href = # class = 'link' ><i class='fas fa-trash-alt fa-sm'> </i> </a>")
     $(this).children('span').toggleClass("trash-can");
    $('span').on("click", function(event){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        })
       event.stopPropagation(); //Prevents the event from bubbling up the DOM tree
    })
})
// Hide a trash-can
$('ul').on("mouseleave","li", function(){
    $(this).children('span').toggleClass("trash-can");
})

//Check Off Specific  Todo By Clicking
$('ul').on("click", "li", function(){
    $(this).toggleClass("completed");
})
    
// Add a new task
$("input[type='text']").on('keypress', function(event){
    if (event.which == '13'){
        let todoText = $(this).val();
        if (todoText == ""){
            alert("Input field cannot  be empty");
        }else {
            $(".tasks").append(`<li><span class = 'fas fa-trash-alt fa-sm'></span>${todoText}</li>`);
            $(this).val("");
        }
    }
})





