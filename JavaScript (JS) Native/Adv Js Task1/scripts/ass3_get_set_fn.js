var myobj = {
    getSetGen : function (obj) {
        for (i in obj){
            obj["get"+i] = (function (v) {
                return function () { return obj[v]}
            })(i);
            
            obj["set"+i] = (function  (v) { 
                return function (x) {obj[v] = x;}
            } )(i);
    }
}
}