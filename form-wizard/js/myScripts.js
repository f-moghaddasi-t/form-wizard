$(document).ready(function () {

    function inputValidate() {
        if ($(".inputHolder .enabled").val() != "") {
            $(".statusBar .process").css("width", "+=90px");
            if (!$(".inputHolder .enabled").hasClass("last")) {$(".holder .enabled").removeClass("enabled").next().addClass("enabled");
            }else{
                setInterval(() => {
                    $(".box .finisher").addClass("visible");
                }, 500);
            }
        } else if ($(".inputHolder .enabled").val() == "") {
            $(".inputHolder .enabled").addClass("error");       
            setInterval(() => {
                $(".inputHolder .enabled").removeClass("error");
            }, 500);
        }
    }
    $(".inputHolder .sendBtn").click(function () {
        inputValidate();
    });
    $(".inputHolder input").keypress(function (e) {
        if (e.which == 13) {
            inputValidate();
        }
    });
});