import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    quotes:Quote[]=[
      {id:1,name:'The greatness of any nation lies in its fidelity to the constitution and adherence to the rule of law and above all respect to God',author:'Gabriel',upVote:0,downVote:0},
      {id:2,name:'Lightning makes no sound until it strikes.',author:'Martin Luther King Jr',upVote:0,downVote:0},
      {id:3,name:'Aman is just but the product of his thoughtswhat he thinks he becomes ',author:'Gabriel',upVote:0,downVote:0},
      {id:4,name:'A people without the knowledge of their past history, origin and culture is like a tree without roots.',author:'Gabriel',upVote:0,downVote:0},
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
