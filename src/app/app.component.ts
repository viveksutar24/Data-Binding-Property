import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data-Binding-Property with Disable & Enable Button';

  no: number = 0;
  enabled: boolean = true;

  constructor() {

    setInterval(() => {
      this.no++;

      
      this.enabled = !this.enabled
    }, 1000)


  }




}
