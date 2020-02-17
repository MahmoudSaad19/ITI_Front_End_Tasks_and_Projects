var Box = function (height=1 ,width=1,_length=1,material= "wood"){
    //box object has the following properties:
//height, width, length, numOfBooks, volume, material, content.
//The content property contains an array books
    var arrOfBooks = [];
    this.height = height;
    this.width = width ;
    this.boxlength = _length ;
    this.material = material;
    this.content = function () {
        return /* "you have "+Box.numOfBooks+" Books inside the Box \nHere they are : \n"+ */arrOfBooks;
    }
    this.getnum = function () {
        return arrOfBooks.length;
    }
    this.addBook = function (book) {
        arrOfBooks.push(book);
    }
    this.deleteBook = function (bookName) {
        var index = arrOfBooks.indexOf(bookName);
        arrOfBooks =
            arrOfBooks.slice(0,index).concat(arrOfBooks.slice(index+1,));
    }
    /*this.deleteBook = function (bookType) {
        
    }*/
}

Box.prototype.volume = function () {
    return "Volume = "+this.boxlength*this.height*this.width;
};

Box.prototype.toString = function () {
    return "you have a Box of dimensions : ( "+this.height+" , "
        +this.width+" , "+this.boxlength+" ) and contain : "+this.content();
};

Box.prototype.valueOf = function () {
    return this.content().length;
};


Box.numOfBooks =0 ;

var Book = function(title="no title" , numofChapters = 1 ,author ="me" ,
                numofPages=1, publisher ="no one" ,numofCopies = 0){
    //book object has the following properties:
    //title, numofChapters, author, numofPages, publisher,
    //numofCopies
    this.title = title;
    this.numofChapters = numofChapters;
    this.author = author;
    this.numofPages = numofPages;
    this.publisher = publisher;
    this.numofCopies = numofCopies;
    
}

Book.prototype.toString = function () {
    return "You have a book of title "+this.title+" "+this.numofPages+" pages and author is "+this.author;
};