import { Component } from '@angular/core';
import { Employees } from 'src/app/interface/employees';
import EmployeesList from '../employees.json';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent {

  filteredEmployees: Employees[] = EmployeesList;
  nameFilter: string = '';

  constructor(){

  }

  getTableData(filteredData: Employees[]){
    console.log(filteredData);
    if(filteredData)
      this.filteredEmployees = filteredData;
    else
      this.filteredEmployees = EmployeesList;
  }
}
