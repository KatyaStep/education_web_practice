
console.log("Connected");

$('li').on("mouseenter", function(){
    $(this).append("<a href = # class = 'link' ><i class='fas fa-trash-alt fa-sm'> </i> </a>")
    let item = $(this);
    console.log(item);
    $('.link').on("click",function(item){
        $(this).parent().remove();
    })
})


$('li').on("mouseleave", function(){
    $(".fa-trash-alt").remove();
    $(".link").remove();
    
})





