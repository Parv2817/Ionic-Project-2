import { Component } from '@angular/core';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  shoes: any[] = [];
  editShoe: any = null;
  updateForm: boolean = false;

  constructor(private node: NodeService) {}

  ngOnInit() 
  {
    this.getShoes();
  }

  ionViewWillEnter()
  {
    this.getShoes();
  }

  getShoes() 
  {
    this.node.getShoes().subscribe((data: any[]) => {
      this.shoes = data;
    });
  }

  edit(shoe: any) 
  {
    this.editShoe = { ...shoe };
    this.updateForm = true;
  }

  cancelEdit() 
  {
    this.editShoe = null;
    this.updateForm = false;
  }

  updateAShoe() 
  {
    this.node.updateShoe(this.editShoe).subscribe(() => {
      this.editShoe = null;
      this.updateForm = false;
      this.getShoes();
    });
  }

  deleteAShoe(id: number) 
  {
    this.node.deleteShoe(id).subscribe(() => {
      this.getShoes();
    });
  }
}