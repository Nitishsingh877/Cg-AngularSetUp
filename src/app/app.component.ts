import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "assets/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com"


  ngOnInit() : void {
    this.title = "Hello from BridgeLabz."
  }
  onClick(event: MouseEvent): void {
    console.log("Save button is clicked", event);
    window.open(this.url,"_blank")
  }
}

