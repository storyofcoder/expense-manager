import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-manager',
  templateUrl: './expense-manager.component.html',
  styleUrls: ['./expense-manager.component.css']
})
export class ExpenseManagerComponent implements OnInit {

  initialTotal : number ;
  start : boolean = false;
  show_form: boolean = true;
  show_bill: boolean = true;
  productName : string;
  qty: number;
  price: number;
  product_sum: number = 0;
  new_index : number;
  count :number;
  data = [];
 // data{ s_no : number; name:string; qty: number; price: number }[] = [];

  constructor() { }

  ngOnInit() : void {
  }

  taskStart(): void{
    this.show_bill = this.start = this.show_form = true;
    this.data = [];
    this.product_sum = this.new_index = 0;
  }

  add(): void{
    this.data.push({
      s_no:this.data.length + 1,
      name:this.productName,
      qty:this.qty,
      price:this.price
    }) ;
    this.productName="";
    this.product_sum += this.qty * this.price;
    this.qty=0;
    this.price=0;
    this.new_index= this.data.length;
  }

  delete( index : number ) : void{
    for( let a of this.data){
      if(a.s_no ==index){
        this.product_sum -= a.qty * a.price;
      }
    }
    this.data.splice(index -1, 1);
    this.count = 1;
    for( let a of this.data){
      a.s_no= this.count;
      this.count += 1;
    }
    this.new_index= this.data.length;
  }

  end() : void{
    window.confirm("Are are Sure!");
    this.show_form = this.show_bill = this.start= false;
  }

  onSubmit() : void {
  }
}
