import { Component, OnInit} from '@angular/core';
import { Validators ,FormBuilder,FormGroup,AbstractControl,FormControl,FormArray} from '@angular/forms';
@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
   
 this.loginForm= this.formBuilder.group({
   username:['',Validators.required],
   password:['',Validators.required]
 })
 
 
 }
 onSubmit(){
   if(this.loginForm.valid){
     if(this.loginForm.value.username=="admin"&& this.loginForm.value.password=="admin" || 
     this.loginForm.value.username=="demo"&& this.loginForm.value.password=="demo")
       localStorage.setItem('username', this.loginForm.value.username);
   }
   
 }
}