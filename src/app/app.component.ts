import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "assets/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com";
  userName: string = '';


  ngOnInit() : void {
    this.title = "Hello from BridgeLabz Mr/mrs."
  }
  onClick(event: MouseEvent): void {
    console.log("Save button is clicked", event);
    window.open(this.url,"_blank")
  }
}

