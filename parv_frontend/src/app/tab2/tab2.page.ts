import { Component } from '@angular/core';
import { NodeService } from '../node.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  size!: number;
  brand!: string;
  color!: string;

  constructor(private node: NodeService, private router: Router) {}

  addShoe() 
  {
    const newShoe = { size: this.size, brand: this.brand, color: this.color };
    this.node.addShoe(newShoe).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/tabs', 'tab1'])
    }, 
    (error) => {
      console.error('Add shoe failed');
    });
  }

}
