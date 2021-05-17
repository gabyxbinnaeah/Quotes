import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    quotes:Quote[]=[
      new Quote(1,'The greatness of any nation lies in its fidelity to the constitution and adherence to the rule of law and above all respect to God','Gabriel',0,0, new Date(2021,3,14)),
      // new Quote(2,'Lightning makes no sound until it strikes.','Martin Luther King Jr',0,0,new Date(2021,4,20)),
      new Quote(2,'Aman is just but the product of his thoughtswhat he thinks he becomes ','Gabriel',0,0,new Date(2021,4,20)),
      new Quote(3,'A people without the knowledge of their past history, origin and culture is like a tree without roots.','Gabriel',0,0,new Date(2021,4,25)),
    ];

     addNewQuote(quote: Quote){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      quote.createdDate = new Date(quote.createdDate)
      this.quotes.push(quote)
    }

    toggle=false;

    toggleDetails(index:  any){
       this.quotes[index].showDetails=!this.quotes[index].showDetails;
    }

    deleteQuote(isComplete: any, index: any){// recives an event emitter isComplete
      if(isComplete){
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)//splice function deletes goal at the index
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }



    constructor() { }

    ngOnInit(): void {
    }

}
