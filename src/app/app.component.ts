import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DbService } from 'src/services/db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DbService]
})
export class AppComponent implements OnInit {

  constructor(private _users: DbService){}
  userForm!: FormGroup;
  myUsers: any = [];
  ngOnInit(): void {
    //Reactive Forms Declaration
    this.userForm =  new FormGroup({
      'firstname' : new FormControl(null),
      'lastname': new FormControl(null),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'password': new FormControl(null)
    })
  }
  title = 'templateform';

  onSubmit(){
    
    console.log(this.myUsers);
  }

  onPushData(){
    const firstname = this.userForm.get('firstname') as FormControl | null;
    const lastname = this.userForm.get('lastname') as FormControl | null; 
    const email = this.userForm.get('email') as FormControl | null;
    const password = this.userForm.get('password') as FormControl | null;

    if(firstname && lastname && email && password){
      const first = firstname.value;
      const last = lastname.value;
      const Email = email.value;
      const pass = password.value;

      this.myUsers.push({
        first,
        last,
        Email,
        pass
      });
    }

    console.log(this.myUsers);
    this._users.saveUsers(this.myUsers)
    .subscribe(sub => {
      console.log(sub);
    },
  error => {
    console.log(error);
  });
  }

  // onSubmit(myForm: NgForm){
  //   console.log(myForm);
  // }
}
