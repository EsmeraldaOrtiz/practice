export interface IPeople{
    id: number;
    numId : string;
    name : string;
    job : string;
    company : string;
    ima : string;
    sal : number;
    starRating: number
}

export class People implements IPeople{
    constructor(public id : number,
                public numId : string,
                public name : string,
                public job : string,
                public company : string,
                public ima : string,
                public sal : number,
                public starRating: number) {
                }

    }
