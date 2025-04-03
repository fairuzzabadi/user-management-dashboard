import { Component } from '@angular/core';
import { HeaderComponent } from "@components/header/header.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
