import { Pipe, PipeTransform } from '@angular/core';
import { Employees } from '../interface/employees';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(Employees: Employees[], filterText: any) {
    if(Employees.length === 0 || filterText.length === 0){
      return Employees;
    }
    else{
      return Employees.filter((employee) => {
        return employee.name.toLowerCase() === filterText.toLowerCase()
      })
    }

  }

}
