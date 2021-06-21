import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  statusFlag = true;
  state = 'on';
  disableButton = true;
  authorProject = 'Tuan';
  name = '';
  ifFlag = true;
  arr = ['bua', 'buff', 'harrow']
  word = '';
  SH = true;
  counter:number[] = [];

  constructor()
  {
    setTimeout(() => {
      this.statusFlag = !this.statusFlag;
    }, 2000)
  }

  toggleState() 
  {
    if(this.state == 'on')
      this.state = 'off';
    else if(this.state == 'off')
      this.state = 'on';
  }

  checkName()
  {
    if(this.name == '')
      return true;
    else
      return false;
  }

  setBlank()
  {
    this.name = '';
  }

  toggleIfFlag()
  {
    this.ifFlag = !this.ifFlag;
  }

  getColor()
  {
    if(this.ifFlag == true)
      return 'green';
    else
      return 'red';
  }
  
  add()
  {
    this.arr.push(this.word);
  }

  updateSH()
  {
    this.SH = !this.SH;
    this.counter.push(this.counter.length + 1);
  }

  getBGC()
  {
    if(this.counter.length > 4)
      return 'greenyellow';
    else
      return 'white';
  }
}
