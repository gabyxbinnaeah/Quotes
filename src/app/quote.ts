export class Quote {
    showDetails!: boolean;
    constructor(public id:number, public name:string,public author:string, public upVote:number, public downVote:number) { 
        this.showDetails =false;
    }
    
    
    
    
    
    // createdDate!:Date;

}
