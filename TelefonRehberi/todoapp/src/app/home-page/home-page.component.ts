import { Component, Input, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isShow=false;
  eventHide(value:boolean):void{
    this.isShow=value;
  }

  onSearchChange(searchValue: any): void {
    this.eventHide(true);
  }

  clickEvent(value:any):void
  {
    this.eventHide(true);

  }

  clickEvent2():void{
    var word = ((document.getElementById("tus") as HTMLButtonElement).innerText);
    (document.getElementById("input-num") as HTMLInputElement).innerText+=word;
  }


}
