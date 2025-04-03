import { Component } from '@angular/core';
import { HeaderComponent } from "@components/header/header.component";
import { CurrencyFormatPipe } from "@app/pipes/currency-format.pipe";
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-detail',
  imports: [HeaderComponent, CurrencyFormatPipe, RouterLink, MatButtonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.sass'
})
export class DetailComponent {
  userDetail!: any;

  constructor () {
    this.userDetail = {
      username: 'fairuzzabadi',
      firstName: 'Fairuz',
      lastName: 'Zabadi',
      email: 'fairuzzabadi@mail.com',
      birthDate: '03/04/2025',
      basicSalary: 20000000,
      status: 'Permanent',
      group: 'Jakarta Regional',
      description: 'Personal data from employee, Personal data from employee Personal data from employee'
    }
  }
}
