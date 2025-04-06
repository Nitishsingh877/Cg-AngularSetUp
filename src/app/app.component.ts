import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'node:console';


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
  nameError: string = '';


  ngOnInit() : void {
    this.title = "Hello from BridgeLabz Mr/mrs."
  }
  onClick(event: MouseEvent): void {
    console.log("Save button is clicked", event);
    window.open(this.url,"_blank")
  }

  onInput($event : Event): void {
    const inputElemnt = $event.target as HTMLInputElement;
    this.userName = inputElemnt.value;

    console.log("change Event Occured", this.userName);
    
    const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect";
    
  }
}

