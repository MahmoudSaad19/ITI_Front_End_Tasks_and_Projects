var userBudget=0;
$(function () {
    document.addEventListener('contextmenu', function (e) {
        
        e.preventDefault();
    }, false);

    function furnitureidx(v,len){
        for(var i=1;i<len;i++)
            {
                if(v.includes(i))
                    return i;
            }
    }
    
    var furniturePricesObj = {
        Beds: [0,250,200,300,350,400,250,200,300,350,400,250,200,300,350,400,250,200,300,350,400,250,200,300,350,400250,200,300,350,400,250,200,300,350,400,250,200,300,350,400],
        Bedslength:46,
        carpets: [0,60,80,90,100,70,85,60,80,90,100,70,85,60,80,90,100,70,85,60,80,90,100,70,85],
        carpetslength:23,
        chairs: [0,25,35,45,55,30,40,50,25,35,45,55,30,40,50,25,35,45,55,30,40,50,25,35,45,55,30,40,50],
        chairslength:17,
        Cupboard: [0,150,200,100,250,300,350,150,200,100,250,300],
        Cupboardlength:14,
        Commode: [0,120,150,140,125,130,155,150,140,125,130,155],
        Commodelength:11,
        LampShades: [0,80,90,100,95,105,115,90,100,95,105,115,120,125,90,100,95,105,115,130,90,100,95,105,115],
        LampShadeslength:21,
        Library: [0,200,250,300,320,280],
        Librarylength:5,
        Mirrors: [0,40,45,60,50,55,65],
        Mirrorslength:6,
        Pillows: [0,25,20,30,35,25,20,30,35,25,20,30,35,25,20,30,3525,20,30,35],
        Pillowslength:14,
        Sofas: [0,120,150,140,125,130,155,150,140,125,130,155,140,125,130,155,150,140,140,125,130,155,150,140,125,130],
        Sofaslength:29,
        Wall_Lights: [0,35,25,20,30,35,25,20,30,35,25],
        Wall_Lightslength:9,
        Tables : [0,50,60,70,80,90,100, 110,120,130, 140,150,160,170,180,190,200,300],
        Tables_length : 16, 
        Clocks : [0,50,60,70,80,90,100, 110,120,130, 140,150,160,170,180,190,200,300],
        clocks_length : 10,
        calcPrice: function (v) {
            if (v.includes('Beds')){
                return this.Beds[furnitureidx(v,this.Bedslength)];   
            }
            else if (v.includes('Carpets'))
                return this.carpets[furnitureidx(v,this.carpetslength)];
            else if (v.includes('chairs'))
                return this.chairs[furnitureidx(v,this.chairslength)];
            else if (v.includes('cupboard'))
                return this.Cupboard[furnitureidx(v,this.Cupboardlength)];
            else if (v.includes('gazzamat'))
                return this.Commode[furnitureidx(v,this.Commodelength)];
            else if (v.includes('LampShades'))
                return this.LampShades[furnitureidx(v,this.LampShadeslength)];
            else if (v.includes('library'))
                return this.Library[furnitureidx(v,this.Librarylength)];
            else if (v.includes('mirrors'))
                return this.Mirrors[furnitureidx(v,this.Mirrorslength)];
            else if (v.includes('pillows'))
                return this.Pillows[furnitureidx(v,this.Pillowslength)];
            else if (v.includes('sofas'))
                return this.Sofas[furnitureidx(v,this.Sofaslength)];
            else if (v.includes('Wall%20lights'))
                return this.Wall_Lights[furnitureidx(v,this.Wall_Lightslength)];
                else if (v.includes('Tables'))
                return this.Tables[furnitureidx(v,this.Tables_length)];
                else if (v.includes('Clocks'))
                return this.Clocks[furnitureidx(v,this.clocks_length)];
            else
                return 0;
        }
    };

    $("#btn-submitBudget").on("click", function () {
        $("#Budget").show();
        $("#dollar").show();
        userBudget = $("#Budgetprices").val();
        if(userBudget>0)
            {
                $("#Budget").html(userBudget);
                $("#first_Page").hide(500);
                $("#main").show();
                $("#main_div_OF_room").show();
                $("#Room_Color").show();
            }
        else
            {
                alert("min budget is 1");
            }
        
    })


    $(".child_Div").on('click', '.child_bed', function () {
        var selectedID = $(this).attr('src');
        var price=furniturePricesObj.calcPrice(selectedID);
        if(userBudget<price){
            $('#Budget').html(userBudget);
            alert('your Budget is Not enough');
        }
        else{
            var selectedID = $(this).attr('src');
        userBudget = userBudget - furniturePricesObj.calcPrice(selectedID);
        $('#Budget').html(userBudget);

        var getter = $(this).clone();

        $('#inner_trapezium').append(getter.addClass('clonedbeds'));
        getter.draggable({
            start: function () {
                var grabber = $(this);
            },
            containment: "#inner_trapezium"
        });
        getter.contextmenu(function () {
            var selectedID2 = $(this).attr('src');
            userBudget = userBudget + furniturePricesObj.calcPrice(selectedID2);
            $('#Budget').html(userBudget);
            $(this).hide("highlight");
        })    
        }
    })
    /********************************************/ ////
    $(".child_Div").on('click', '.child_carpet', function () {
        var selectedID = $(this).attr('src');
        var price=furniturePricesObj.calcPrice(selectedID);
        if(userBudget<price){
            $('#Budget').html(userBudget);
            alert('your Budget is Not enough');
        }
        else{
            var selectedID = $(this).attr('src');
           userBudget = userBudget - furniturePricesObj.calcPrice(selectedID);
            $('#Budget').html(userBudget);
        var getter = $(this).clone();
        $('#inner_trapezium').append(getter.addClass('clonedcarpet'));
        getter.draggable({
            containment: "#inner_trapezium"
        });
        getter.contextmenu(function () {
            var selectedID2 = $(this).attr('src');
            userBudget = userBudget + furniturePricesObj.calcPrice(selectedID2);
            $('#Budget').html(userBudget);
            $(this).hide("highlight");
        });
        }
        
    });
    ////////////////
    $(".child_Div").on('click', '.child_chair', function () {
        var selectedID = $(this).attr('src');
        var price=furniturePricesObj.calcPrice(selectedID);
        if(userBudget<price){
            $('#Budget').html(userBudget);
            alert('your Budget is Not enough');
        }
        else{
            var selectedID = $(this).attr('src');
           userBudget = userBudget - furniturePricesObj.calcPrice(selectedID);
            $('#Budget').html(userBudget);
            var getter = $(this).clone();
        $('#inner_trapezium').append(getter.addClass('clonedchairs'));
        getter.draggable({
            containment: "#inner_trapezium"
        });
        getter.contextmenu(function () {
            var selectedID2 = $(this).attr('src');
            userBudget = userBudget + furniturePricesObj.calcPrice(selectedID2);
            $('#Budget').html(userBudget);
            $(this).hide("highlight");
        });
        }
        
    });
    /////////
    $(".child_Div").on('click', '.child_cupboard', function () {
        var selectedID = $(this).attr('src');
        var price=furniturePricesObj.calcPrice(selectedID);
        if(userBudget<price){
            $('#Budget').html(userBudget);
            alert('your Budget is Not enough');
        }
        else{
            var selectedID = $(this).attr('src');
           userBudget = userBudget - furniturePricesObj.calcPrice(selectedID);
            $('#Budget').html(userBudget);
            var getter = $(this).clone();
        $('#inner_trapezium').append(getter.addClass('clonedcupboard'));
        getter.draggable({
            containment: "#inner_trapezium"
        });
        getter.contextmenu(function () {
            var selectedID2 = $(this).attr('src');
            userBudget = userBudget + furniturePricesObj.calcPrice(selectedID2);
            $('#Budget').html(userBudget);
            $(this).hide("highlight");
        });
        }
    });
    ///////////
    $(".child_Div").on('click', '.child_commode', function () {
        var selectedID = $(this).attr('src');
        var price=furniturePricesObj.calcPrice(selectedID);
        if(userBudget<price){
            $('#Budget').html(userBudget);
            alert('your Budget is Not enough');
        }
        else{
            var selectedID = $(this).attr('src');
           userBudget = userBudget - furniturePricesObj.calcPrice(selectedID);
            $('#Budget').html(userBudget);
            var getter = $(this).clone();
        $('#inner_trapezium').append(getter.addClass('clonedcommode'));
        getter.draggable({
            containment: "#inner_trapezium"
        });
        getter.contextmenu(function () {
            var selectedID2 = $(this).attr('src');
            userBudget = userBudget + furniturePricesObj.calcPrice(selectedID2);
            $('#Budget').html(userBudget);
            $(this).hide("highlight");
        });
        }
        
    });
    /////////
    $(".child_Div").on('click', '.child_lampshade', function () {
        var selectedID = $(this).attr('src');
        var price=furniturePricesObj.calcPrice(selectedID);
        if(userBudget<price){
            $('#Budget').html(userBudget);
            alert('your Budget is Not enough');
        }
        else{
            var selectedID = $(this).attr('src');
           userBudget = userBudget - furniturePricesObj.calcPrice(selectedID);
            $('#Budget').html(userBudget);
            var getter = $(this).clone();
        $('#inner_trapezium').append(getter.addClass('clonedlamp'));
        getter.draggable({
            containment: "#inner_trapezium"
        });
        getter.contextmenu(function () {
            var selectedID2 = $(this).attr('src');
            userBudget = userBudget + furniturePricesObj.calcPrice(selectedID2);
            $('#Budget').html(userBudget);
            $(this).hide("highlight");
        });
        }
        
    });
    ///////////
    $(".child_Div").on('click', '.child_library', function () {
        var selectedID = $(this).attr('src');
        var price=furniturePricesObj.calcPrice(selectedID);
        if(userBudget<price){
            $('#Budget').html(userBudget);
            alert('your Budget is Not enough');
        }
        else{
            var selectedID = $(this).attr('src');
           userBudget = userBudget - furniturePricesObj.calcPrice(selectedID);
            $('#Budget').html(userBudget);
            var getter = $(this).clone();
        $('#inner_trapezium').append(getter.addClass('clonedlibrary'));
        getter.draggable({
            containment: "#inner_trapezium"
        });
        getter.contextmenu(function () {
            var selectedID2 = $(this).attr('src');
            userBudget = userBudget + furniturePricesObj.calcPrice(selectedID2);
            $('#Budget').html(userBudget);
            $(this).hide("highlight");
        });
        }
    });
    $(".child_Div").on('click', '.child_mirror', function () {
        var selectedID = $(this).attr('src');
        var price=furniturePricesObj.calcPrice(selectedID);
        if(userBudget<price){
            $('#Budget').html(userBudget);
            alert('your Budget is Not enough');
        }
        else{
            var selectedID = $(this).attr('src');
           userBudget = userBudget - furniturePricesObj.calcPrice(selectedID);
            $('#Budget').html(userBudget);
            var getter = $(this).clone();
        $('#inner_trapezium').append(getter.addClass('clonedmirror'));
        getter.draggable({
            containment: "#inner_trapezium"
        });
        getter.contextmenu(function () {
            var selectedID2 = $(this).attr('src');
            userBudget = userBudget + furniturePricesObj.calcPrice(selectedID2);
            $('#Budget').html(userBudget);
            $(this).hide("highlight");
        });
        }
    });
    ///////
    $(".child_Div").on('click', '.child_pillow', function () {
        var selectedID = $(this).attr('src');
        var price=furniturePricesObj.calcPrice(selectedID);
        if(userBudget<price){
            $('#Budget').html(userBudget);
            alert('your Budget is Not enough');
        }
        else{
            var selectedID = $(this).attr('src');
           userBudget = userBudget - furniturePricesObj.calcPrice(selectedID);
            $('#Budget').html(userBudget);
            var getter = $(this).clone();
        $('#inner_trapezium').append(getter.addClass('clonedpillow'));
        getter.draggable({
            containment: "#inner_trapezium"
        });
        getter.contextmenu(function () {
            var selectedID2 = $(this).attr('src');
            userBudget = userBudget + furniturePricesObj.calcPrice(selectedID2);
            $('#Budget').html(userBudget);
            $(this).hide("highlight");
        });
        }
        
    });
    ////////
    $(".child_Div").on('click', '.child_sofa', function () {
        var selectedID = $(this).attr('src');
        var price=furniturePricesObj.calcPrice(selectedID);
        if(userBudget<price){
            $('#Budget').html(userBudget);
            alert('your Budget is Not enough');
        }
        else{
            var selectedID = $(this).attr('src');
           userBudget = userBudget - furniturePricesObj.calcPrice(selectedID);
            $('#Budget').html(userBudget);
            var getter = $(this).clone();
        $('#inner_trapezium').append(getter.addClass('clonedsofa'));
        getter.draggable({
            containment: "#inner_trapezium"
        });
        getter.contextmenu(function () {
            var selectedID2 = $(this).attr('src');
            userBudget = userBudget + furniturePricesObj.calcPrice(selectedID2);
            $('#Budget').html(userBudget);
            $(this).hide("highlight");
        });
        }
        
    });
    //////////////
    $(".child_Div").on('click', '.child_wall_light', function () {
        var selectedID = $(this).attr('src');
        var price=furniturePricesObj.calcPrice(selectedID);
        if(userBudget<price){
            $('#Budget').html(userBudget);
            alert('your Budget is Not enough');
        }
        else{
            var selectedID = $(this).attr('src');
           userBudget = userBudget - furniturePricesObj.calcPrice(selectedID);
            $('#Budget').html(userBudget);
            var getter = $(this).clone();
        $('#parallelogram').append(getter.addClass('clonedwalllights'));
        getter.draggable({
            containment: "#main_Div"
        });
        getter.contextmenu(function () {
            var selectedID2 = $(this).attr('src');
            userBudget = userBudget + furniturePricesObj.calcPrice(selectedID2);
            $('#Budget').html(userBudget);
            $(this).hide("highlight");
        });
        }
        
    });
    //////////////
    $(".child_Div").on('click', '.child_clocks', function () {
        var selectedID = $(this).attr('src');
        var price=furniturePricesObj.calcPrice(selectedID);
        if(userBudget<price){
            $('#Budget').html(userBudget);
            alert('your Budget is Not enough');
        }
        else{
            var selectedID = $(this).attr('src');
           userBudget = userBudget - furniturePricesObj.calcPrice(selectedID);
            $('#Budget').html(userBudget);
            var getter = $(this).clone();
        $('#parallelogram').append(getter.addClass('clonedclocks'));
        getter.draggable({
            containment: "#parallelogram"
        });
        getter.contextmenu(function () {
            var selectedID2 = $(this).attr('src');
            userBudget = userBudget + furniturePricesObj.calcPrice(selectedID2);
            $('#Budget').html(userBudget);
            $(this).hide("highlight");
        });
        }
        
    });
    //////////////
    $(".child_Div").on('click', '.child_tables', function () {
        var selectedID = $(this).attr('src');
        var price=furniturePricesObj.calcPrice(selectedID);
        if(userBudget<price){
            $('#Budget').html(userBudget);
            alert('your Budget is Not enough');
        }
        else{
            var selectedID = $(this).attr('src');
           userBudget = userBudget - furniturePricesObj.calcPrice(selectedID);
            $('#Budget').html(userBudget);
            var getter = $(this).clone();
        $('#inner_trapezium').append(getter.addClass('clonedchairs'));
        getter.draggable({
            containment: "#inner_trapezium"
        });
        getter.contextmenu(function () {
            var selectedID2 = $(this).attr('src');
            userBudget = userBudget + furniturePricesObj.calcPrice(selectedID2);
            $('#Budget').html(userBudget);
            $(this).hide("highlight");
        });
        }
        
    });
    
});