import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {
  [x: string]: any;

  constructor() { }

  ngOnInit(): void {
  }

  upVoteCount:number = 0;
  downVoteCount:number = 0;


  incrementVote(){
     this.upVoteCount++;
  }
  
  decrementVote(){
    this.downVoteCount++;
  }

}
