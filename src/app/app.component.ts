import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "assets/BL_logo_square_jpg.jpg";


  ngOnInit() : void {
    this.title = "Hello from BridgeLabz."
  }
}

