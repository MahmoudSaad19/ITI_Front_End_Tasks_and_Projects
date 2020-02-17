$(function () {
    $('#child_Beds,#child_Carpets,#child_Chairs,#child_Cupboard,#child_Commode,#child_LampShades,#child_Library,#child_Mirrors,#child_Pillows,#child_Sofas,#child_Wall_Lights,#child_Table,#child_Clock,#scroll').hide();

    $("#beds").on("click", function () {
        $('#child_Carpets,#child_Chairs,#child_Cupboard,#child_Commode,#child_LampShades,#child_Library,#child_Mirrors,#child_Pillows,#child_Sofas,#child_Wall_Lights,#child_Table,#child_Clock').hide();
        scroller();
        $('#child_Beds').toggle();
    });

    $("#carpets").on("click", function () {
        $('#child_Beds,#child_Chairs,#child_Cupboard,#child_Commode,#child_LampShades,#child_Library,#child_Mirrors,#child_Pillows,#child_Sofas,#child_Wall_Lights,#child_Table,#child_Clock').hide();
        scroller();
        $('#child_Carpets').toggle();
    });

    $("#chairs").on("click", function () {
        $('#child_Beds,#child_Carpets,#child_Cupboard,#child_Commode,#child_LampShades,#child_Library,#child_Mirrors,#child_Pillows,#child_Sofas,#child_Wall_Lights,#child_Table,#child_Clock').hide();
        scroller();
        $('#child_Chairs').toggle();
    });

    $("#cupboard").on("click", function () {
        $('#child_Beds,#child_Carpets,#child_Chairs,#child_Commode,#child_LampShades,#child_Library,#child_Mirrors,#child_Pillows,#child_Sofas,#child_Wall_Lights,#child_Table,#child_Clock').hide();
        scroller();
        $('#child_Cupboard').toggle();
    });

    $("#commode").on("click", function () {
        $('#child_Beds,#child_Carpets,#child_Chairs,#child_Cupboard,#child_LampShades,#child_Library,#child_Mirrors,#child_Pillows,#child_Sofas,#child_Wall_Lights,#child_Table,#child_Clock').hide();
        scroller();
        $('#child_Commode').toggle();
    });

    $("#lamp").on("click", function () {
        $('#child_Beds,#child_Carpets,#child_Chairs,#child_Cupboard,#child_Commode,#child_Library,#child_Mirrors,#child_Pillows,#child_Sofas,#child_Wall_Lights,#child_Table,#child_Clock').hide();
        scroller();
        $('#child_LampShades').toggle();
    });

    $("#library").on("click", function () {
        $('#child_Beds,#child_Carpets,#child_Chairs,#child_Cupboard,#child_Commode,#child_LampShades,#child_Mirrors,#child_Pillows,#child_Sofas,#child_Wall_Lights,#child_Table,#child_Clock').hide();
        scroller();
        $('#child_Library').toggle();
    });

    $("#mirrors").on("click", function () {
        $('#child_Beds,#child_Carpets,#child_Chairs,#child_Cupboard,#child_Commode,#child_LampShades,#child_Library,#child_Pillows,#child_Sofas,#child_Wall_Lights,#child_Table,#child_Clock').hide();
        scroller();
        $('#child_Mirrors').toggle();
    });

    $("#pillows").on("click", function () {
        $('#child_Beds,#child_Carpets,#child_Chairs,#child_Cupboard,#child_Commode,#child_LampShades,#child_Library,#child_Mirrors,#child_Sofas,#child_Wall_Lights,#child_Table,#child_Clock').hide();
        scroller();
        $('#child_Pillows').toggle();
    });

    $("#sofas").on("click", function () {
        $('#child_Beds,#child_Carpets,#child_Chairs,#child_Cupboard,#child_Commode,#child_LampShades,#child_Library,#child_Mirrors,#child_Pillows,#child_Wall_Lights,#child_Table,#child_Clock').hide();
        scroller();
        $('#child_Sofas').toggle();
    });

    $("#wall_Lamp").on("click", function () {
        $('#child_Beds,#child_Carpets,#child_Chairs,#child_Cupboard,#child_Commode,#child_LampShades,#child_Library,#child_Mirrors,#child_Pillows,#child_Sofas,#child_Table,#child_Clock').hide();
        scroller();
        $('#child_Wall_Lights').toggle();
    });

    $("#Tables").on("click", function () {
        $('#child_Beds,#child_Carpets,#child_Chairs,#child_Cupboard,#child_Commode,#child_LampShades,#child_Library,#child_Mirrors,#child_Pillows,#child_Sofas,#child_Wall_Lights,#child_Clock').hide();
        scroller();
        $('#child_Table').toggle();
    });

    $("#Clocks").on("click", function () {
        $('#child_Beds,#child_Carpets,#child_Chairs,#child_Cupboard,#child_Commode,#child_LampShades,#child_Library,#child_Mirrors,#child_Pillows,#child_Sofas,#child_Wall_Lights,#child_Table').hide();
        scroller();
        $('#child_Clock').toggle();
    });


    function scroller() {
        var condition = $('#child_Beds').is(":visible") | $('#child_Carpets').is(":visible") |
            $('#child_Chairs').is(":visible") | $('#child_Cupboard').is(":visible") |
            $('#child_Commode').is(":visible") | $('#child_LampShades').is(":visible") | $('#child_Library').is(":visible") |
            $('#child_Mirrors').is(":visible") |
            $('#child_Pillows').is(":visible") |
            $('#child_Sofas').is(":visible") | $('#child_Wall_Lights').is(":visible") | $('#child_Table').is(":visible") |
            $('#child_Clock').is(":visible");
        if (condition == 1)
            $('#scroll').hide();
        else
            $('#scroll').show();

    }
})
