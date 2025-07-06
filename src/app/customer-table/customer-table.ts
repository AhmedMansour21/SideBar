import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'customer-table',
  imports: [MatTableModule],
  templateUrl: './customer-table.html',
  styleUrl: './customer-table.css'
})
export class CustomerTable {
  myData = ["aa",2,33,"soly"]
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'}]; 
}
