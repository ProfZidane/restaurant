import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  state = {
    loading: false,
    error: false,
    success: false
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(f: NgForm) {
    console.log(f.valid);
    console.log(f.value);
    
    this.state.loading = true;
    this.state.error = false;

    if (f.value.email === "admin@gmail.com" && f.value.password === '1234') {
      this.state.success = true;
      
      setTimeout(() => {
        localStorage.setItem('user-auth', JSON.stringify({ email: "admin@gmail.com", role: "admin" }));
        this.state.loading = false;
        this.router.navigateByUrl('/orders');
      }, 1000);

    } else {

      this.state.loading = false;
      this.state.error = true;

    }
  }



}
