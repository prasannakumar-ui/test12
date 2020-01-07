import { Component } from '@angular/core';
import{FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
submitted=false;
status=false
  constructor(private fb:FormBuilder,private r:Router,private s:ServiceService) { }

 form=this.fb.group({
   uname:['',Validators.required],
   pwd:['',Validators.required]
 })
 get f(){
   return this.form.controls
 }
login(){
this.submitted=true
// this.r.navigate(['home'])
if(this.form.invalid){
return
}else{
if(this.form.controls['uname'].value=='admin' && this.form.controls['pwd'].value=='admin'){
  this.r.navigate(['home'])
this.s.senToken(this.form.value.uname)
}else{
alert('username & password are incorrect')
this.form.reset()
this.submitted=false
// this.status=true
}
}
}

}
