import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {  //elementRef is used to inject refernce to the host DOM
     this.elem.nativeElement.style.backgroundColor ='lightskyblue'; //elementRef grant us direct access to the host DOM element through its nativeElement prperty
  
  }

}