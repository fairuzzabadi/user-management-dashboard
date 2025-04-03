import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface UserData {
  username: string;
  email: string;
  status: string;
}

/** Constants used to fill up our data base. */
const STATUS: string[] = [
  'contract',
  'permanent'
];
const USERNAME: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-list',
  imports: [RouterLink, HeaderComponent, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['username', 'email', 'status', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private _snackBar = inject(MatSnackBar);
  deleteAction () {
    this._snackBar.open('Delete success', '', {
      panelClass: ['delete-snackbar'],
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      duration: 5000,
    });
  }
  updateAction () {
    this._snackBar.open('Update success', '', {
      panelClass: ['update-snackbar'],
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      duration: 5000,
    });
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const username =
    USERNAME[Math.round(Math.random() * (USERNAME.length - 1))] +
    ' ' +
    USERNAME[Math.round(Math.random() * (USERNAME.length - 1))].charAt(0);

  return {
    username: username,
    email: username.split(' ').join('.') + Math.round(Math.random() * 100).toString() + '@mail.com',
    status: STATUS[Math.round(Math.random() * (STATUS.length - 1))],
  };
}

