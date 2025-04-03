import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from "@components/header/header.component";
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker'; // Datepicker Module
import { MatInputModule } from '@angular/material/input'; // Material Input
import { MatFormFieldModule } from '@angular/material/form-field'; // Material Form Field

import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@Component({
  selector: 'app-add',
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,

    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxMatSelectSearchModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.sass'
})

export class AddComponent {
  userForm!: FormGroup;
  birthDate: any;
  readonly maxDate = new Date();

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the form with form controls and validations
    this.userForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthDate: new FormControl('', [Validators.required]),
      basicSalary: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      status: new FormControl('', [Validators.required]),
      group: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  isOpen = false; // Set to true to open the dropdown by default
  searchInput = '';
  groupLists = [
    { id: 'id-1', name: 'Group Name 1', isHidden: false},
    { id: 'id-2', name: 'Group Name 2', isHidden: false},
    { id: 'id-3', name: 'Group Name 3', isHidden: false},
    { id: 'id-4', name: 'Group Name 4', isHidden: false},
    { id: 'id-5', name: 'Group Name 5', isHidden: false},
    { id: 'id-6', name: 'Group Name 6', isHidden: false},
    { id: 'id-7', name: 'Group Name 7', isHidden: false},
    { id: 'id-8', name: 'Group Name 8', isHidden: false},
    { id: 'id-9', name: 'Group Name 9', isHidden: false},
    { id: 'id-10', name: 'Group Name 10', isHidden: false}
  ]

  
  // Add event listener to filter items based on input
  triggerSearchInput () {
    const searchTerm = this.searchInput.toLowerCase();
    const items = this.groupLists;
  
    items.forEach((item) => {
      const text = item.name.toLowerCase();
      if (text.includes(searchTerm)) {
        item.isHidden = false;
      } else {
        item.isHidden = true;
      }
    });
  }
  
  // Method to handle form submission
  onSubmit() {
    if (this.userForm.valid) {
      alert(`Form Submitted: success - See the data in console`);
      console.log(this.userForm.value)
      this.router.navigate(['user-management/list']);
    } else {
      alert(`Form Invalid.`);
    }
  }

}
