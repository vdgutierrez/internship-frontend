import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent {

  constructor(private router: Router) { }

  student(){
    this.router.navigate(['/registerStudent']);
  }
  company(){
    this.router.navigate(['/registerCompany']);
  }

}
