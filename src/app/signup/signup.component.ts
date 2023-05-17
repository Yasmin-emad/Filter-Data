import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {



  productsForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.productsForm = this.fb.group({
      name: ['',
      [
        Validators.required
      ]],
      email: ['',
      [
        Validators.required,
        Validators.pattern(/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
      ]],
      userName: ['', [
        Validators.required,
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)
      ]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
        ],
      ],
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  get getProductsFormControls() {
    return this.productsForm.controls
  }

  handleSubmitForm(){

  }

}
