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
}
