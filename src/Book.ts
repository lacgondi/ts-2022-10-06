export class Book {
    #name:string;
    #rating:number;
    constructor(name:string, rating:number) {
        this.#name=name;
        if (rating>10) {
            this.#rating = 10;
        }else if(rating<1){
            this.#rating=1;
        }else{
            this.#rating=rating;
        }
    }

    public getName() : string {
        return this.#name;
    }
    
    public getRating() : number {
        return this.#rating;
    }

    
    public setName(v : string) {
        this.#name = v;
    }

    public setRating(v : number) {
        if (v>10) {
            this.#rating = 10;
        }else if(v<1){
            this.#rating=1;
        }else{
            this.#rating=v;
        }
    }

    public toString():string {
        return this.#name+" - "+this.#rating+"/10";   
    }
}