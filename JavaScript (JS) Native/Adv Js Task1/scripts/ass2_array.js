var linkedlist = { 
    values : [] ,
    push : function (x){ this.values.push(x) ; 
            return x+ "is pushed ";} ,
    pop : function (x) { return this.values.pop() ;},
    display : function () { return this.values;},
    remove : function (x) {
        var index = this.values.indexOf(x);
        if (index>=0){
            this.values = 
            this.values.slice(0,index).concat(
            this.values.slice(index+1,this.values.length));
            return x +" removed from the linkedlist :( " ;            
        }else
            return x + " is not available inside my linkedlist";
    },
    insert : function (item , index) { 
        if (index>=0){
            for(i=this.values.length ; i>index ; i--)
                this.values[i] = this.values[i-1];
            this.values[index] = item ;
            return  item +" is inserted in the linkedlist at "+index+" ^_^";
        }
        else
            return "error you need to specifiy item and index for insertion";
    }
}