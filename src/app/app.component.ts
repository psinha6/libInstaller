import { AfterViewInit, Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  leftLibs = [
    {
      id: 1,
      name: "express"
    },
    {
      id: 2,
      name: "async"
    },
    {
      id: 3,
      name: "request"
    },
    {
      id: 4,
      name: "browserify"
    },
    {
      id: 5,
      name: "grunt"
    }
  ];

  rightLibs = [
    {
      id: 6,
      name: "socket.io"
    },
    {
      id: 7,
      name: "mocha"
    }
  ];

  selectedLib;

  //Ashish
  myEvent: EventEmitter<any> = new EventEmitter();

  constructor() {
    // TODO: Define your Angular component implementation

  }

  ngAfterViewInit() {
    //Ashish
    this.myEvent.emit('My emmitted data');
  }

  pickLib(lib) {
    this.selectedLib = lib;
  }

  toRight() {
    const indexVal = this.leftLibs.indexOf(this.selectedLib);
    if (indexVal !== -1) {
      this.rightLibs.push(this.selectedLib);
      this.leftLibs.splice(indexVal, 1);
      this.selectedLib = null;
    }
  }

  toLeft() {
    const indexVal = this.rightLibs.indexOf(this.selectedLib);
    if (indexVal !== -1) {
      this.leftLibs.push(this.selectedLib);
      this.rightLibs.splice(indexVal, 1);
      this.selectedLib = null;
    }
  }

  installLibs() {
    this.rightLibs = [];
  }

  getSelcteddLibClass(lib) {
    if (this.selectedLib) {
      return this.selectedLib.id === lib.id;
    }
    return false;
  }

  //Ashish
  callMyFunction() {
    console.log('callmyfunction');
  }
}
