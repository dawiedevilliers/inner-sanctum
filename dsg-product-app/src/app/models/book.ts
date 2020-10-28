

export interface Book {
    id: number;
    name: string;
    author: string;
    image: string;
    shortDescription: string;
    longDescription: string;
    price: string;
    rating: string;
}

export class Book implements Book {

    constructor(public id: number,
                public name: string,
                public author: string,
                public image: string,
                public shortDescription: string,
                public longDescription: string,
                public price: string,
                public rating: string) {

    }

}



