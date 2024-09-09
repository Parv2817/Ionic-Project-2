import { Component } from '@angular/core';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  username!: string;
  password!: string;
  loginFlag: boolean = true;
  message!: string;

  constructor(private node: NodeService) {}

  login() 
  {
    const user = { username: this.username, password: this.password };
    this.node.login(user).subscribe((response: any) => {
      this.message = response.message;
      console.log(response.message);
    }, 
    (error) => {
      console.error('Login failed:', error.error.message);
    });
  }

  signup() 
  {
    const user = { username: this.username, password: this.password };
    this.node.signup(user).subscribe((response: any) => {
      console.log(response.message);
    }, 
    (error: any) => {
      console.error('Signup failed:', error.error.message);
    });
  }

  toggleForm() 
  {
    this.loginFlag = !this.loginFlag;
  }

}
