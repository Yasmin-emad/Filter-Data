import { Component, EventEmitter, Output,Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Employees } from 'src/app/interface/employees';
import EmployeesList from '../employees.json';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent {

  @Input() childName: any = {};
  @Output() outPutToParent = new EventEmitter();

  bars = faBars;
  formInput: Employees = {
    id: 0,
    name: '',
    department: 'string',
    employmentDate: 'string',
    salary: 0,
    experience: 'string',
  };

  Employees: Employees[] = EmployeesList;
  filteredEmployees: Employees[] = EmployeesList;

  nameFilter: string = '';
  departmentFilter: string = '';
  dateFilter: string = '';
  experienceFilter: string = '';
  salaryFilter: number = 0;
  showAll: any;


  constructor(){

  }

  setData(name: string, department: string, date: string, salary: any, experience: string) {

    this.formInput = {
      id: 0,
      name: name,
      department: department,
      employmentDate: date,
      salary: salary,
      experience: experience,
    };

    this.nameFilter = this.formInput.name.toLowerCase()
    this.salaryFilter = Number(this.formInput.salary)
    this.departmentFilter = this.formInput.department
    this.dateFilter = this.formInput.employmentDate
    this.experienceFilter = this.formInput.experience
    this.showAll = 0 === this.nameFilter.length && 0 === this.salaryFilter
    && 0 === this.departmentFilter.length && 0 === this.experienceFilter.length && 0 === this.dateFilter.length

    this.filteredEmployees = this.filterFunction(this.showAll, this.nameFilter, this.departmentFilter,
      this.dateFilter,this.salaryFilter, this.experienceFilter)

    this.outPutToParent.emit(this.filteredEmployees);
  }

  reset(form: NgForm) {
    form.reset()
    this.filteredEmployees = EmployeesList;
    this.outPutToParent.emit(this.filteredEmployees);
  }

  filterFunction(all: any, ...args: any){

    if(all === true)
      return this.Employees;
    else
      return this.Employees.filter((employee) => {

            if((args[0] || args[0] === '')
            && (args[1] || args[1] === '')
            && (args[2] || args[2] === '')
            && (args[3] || args[3] === 0)
            && (args[4] || args[4] === '')
            ){
                return ((employee.name.toLocaleLowerCase() === args[0].toLocaleLowerCase()) || args[0] === '')
              && ((employee.department === args[1]) || args[1] === '')
              && ((employee.employmentDate === args[2]) || args[2] === '')
              && ((employee.salary === args[3]) || args[3] === 0)
              && ((employee.experience === args[4]) || args[4] === '')
            }
            else
              return this.Employees

          })
  }

}
