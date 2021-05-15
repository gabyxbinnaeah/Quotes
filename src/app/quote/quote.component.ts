import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    quotes:Quote[]=[
     new Quote(1,'The greatness of any nation lies in its fidelity to the constitution and adherence to the rule of law and above all respect to God','Gabriel',0,0),
      new Quote(2,'Lightning makes no sound until it strikes.','Martin Luther King Jr',0,0),
      new Quote(3,'Aman is just but the product of his thoughtswhat he thinks he becomes ','Gabriel',0,0),
      new Quote(4,'A people without the knowledge of their past history, origin and culture is like a tree without roots.','Gabriel',0,0),
    ];
    toggleDetails(index:  any){
      //  this.quotes[index].showDetails=!this.quotes[index].showDetails;
    }
  constructor() { }

  ngOnInit(): void {
  }

}
