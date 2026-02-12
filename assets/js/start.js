$(document).ready(function() {
    $("#stupider").mouseenter(function() {
        $("#stupid").fadeOut("slow");
        $("#2").fadeIn();
        $("#2").fadeOut("slow");
        $("#3").fadeIn("slow")
    });
    $("#stupider").mouseleave(function() {
        $("#3").fadeOut("slow");
        $("#2").fadeOut("slow");
        $("#stupid").fadeIn("slow");
    })
});