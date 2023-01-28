import { Component } from '@angular/core';
import arrayWords from "../utils/words"



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  word:string = '' ;
  limit = 10 ;
  
   handleSlideChange(event:any){
    this.limit = event.target.value
    }

  generate(){
    this.word = arrayWords.slice(0,this.limit).join(' ');
  }
}
