$(function () {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "rockbands.json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4)
            if (xhr.status == 200) {

                jsObj = JSON.parse(xhr.responseText);
                for (i in jsObj) {
                    $("#sel1").append("<option>" + i + "</option>");
                }

                $("#sel1").on("change", function () {
                    $("#sel2").find('option').remove();
                    for (i in jsObj) {
                        selected = $("#sel1").val();
                        if (selected == i) {
                            for (i = 0; i < jsObj[selected].length; i++)
                                $("#sel2").append("<option>" + jsObj[selected][i].name + "</option>");
                        }
                    }
                });

                $("#sel2").on("change", function () {

                    for (i in jsObj) {
                        selected = $("#sel1").val();
                        selected2 = $("#sel2").val();
                        if (selected == i) {
                            for (i = 0; i < jsObj[selected].length; i++) {
                                if (selected2 == jsObj[selected][i].name)
                                    location.replace(jsObj[selected][i].value)
                            }
                        }
                    }

                });

            }
    }
    xhr.send('');
})
