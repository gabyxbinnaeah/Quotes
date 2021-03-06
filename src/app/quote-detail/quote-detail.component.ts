import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {


  @Input() quote!:Quote; //for recieving data from parent component
  @Output() isComplete=new EventEmitter<boolean>(); //Output decorator is used to create event emmiter
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);//calls emit method passes event to the parent component
  }
  constructor() { }

  ngOnInit(): void {
  }

}
