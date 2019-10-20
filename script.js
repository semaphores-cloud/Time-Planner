var date = new Date();
document.getElementById("currentDay").innerHTML= date;


$(".saveBtn").on("click", function(){
    var value=$(this).siblings(".description").val()
    var time=$(this).parent().attr("id")
    localStorage.setItem(time, value)
})


$("#9-am .description" ).val(localStorage.getItem("9-am"))
$("#10-am .description" ).val(localStorage.getItem("10-am"))
$("#11-am .description" ).val(localStorage.getItem("11-am"))
$("#12-pm .description" ).val(localStorage.getItem("12-pm"))
$("#13-pm .description" ).val(localStorage.getItem("13-pm"))
$("#14-pm .description" ).val(localStorage.getItem("14-pm"))
$("#15-pm .description" ).val(localStorage.getItem("15-pm"))
$("#16-pm .description" ).val(localStorage.getItem("16-pm"))
$("#17-pm .description" ).val(localStorage.getItem("17-pm"))



function checktime(){
    var currentTime = moment().hours()
    console.log(currentTime);
    $(".timeblocks").each(function(){
        var blocktime=parseInt($(this).attr("id").split("-")[0])
        console.log(blocktime);
        if(blocktime < currentTime){
            $(this).addClass("past")
        console.log($(".timeblocks"))
        }
        else if (blocktime === currentTime){
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        
        else {
            $(this).removeClass("present")
            $(this).removeClass("past")
            $(this).addClass("future")
        }
    })
}

checktime()

