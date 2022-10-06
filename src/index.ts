import { Book } from './Book';

let bookList:Book[] = [new Book("Dune", 10), new Book("Solaris",0), new Book("Where the Crawdads sing",12)];

for (let index = 0; index < 30; index++) {
    bookList.push(new Book("Book #"+index, Math.floor((Math.random()*10))+1));
}

bookList.forEach(element => {
    console.log(element.toString());
});

//8 rating or higher
bookList.forEach(element => {
    if(element.getRating()>7){
        console.log(element.toString());
    }
});

//Best book

function bestOf(list:Book[]):string{
    let max=0;
    let maxIndex=0;
    for (let index = 0; index < list.length; index++) {
        if(list[index].getRating()>max){
            max = list[index].getRating();
            maxIndex=index;
        }
    }
    return list[maxIndex].toString();
}

console.log("A legjobb könyv:", bestOf(bookList));