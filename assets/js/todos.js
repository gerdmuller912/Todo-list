//Check off list by clicking
$("ul").on("click","li",function(){
    // if ($(this).css("color")==="rgb(128, 128, 128)"){
    //     $(this).css({
    //         color:"black",
    //         textDecoration:"none"
    //     });    
    // } else {
    //     $(this).css({
    //         color:"gray",
    //         textDecoration:"line-through"
    //     });    
    // }
    $(this).toggleClass("completed");  
});

//click on X to delete
$("ul").on("click","span",function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    e.stopPropagation();
});
$("input[type='text']").keypress(function(event){
    if(event.which===13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> "+ todoText+"</li>");
    }
});
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});