import { Book } from './Book';

let bookList:Book[] = [new Book("Dune", 10), new Book("Solaris",0), new Book("Where the Crawdads sing",12)];

for (let index = 0; index < 30; index++) {
    bookList.push(new Book("Book #"+index, (Math.random()*10)+1));
}



