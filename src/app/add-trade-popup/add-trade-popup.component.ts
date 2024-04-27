import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-trade-popup',
  templateUrl: './add-trade-popup.component.html',
  styleUrl: './add-trade-popup.component.scss'
})
export class AddTradePopupComponent {

  addTradeForm!: FormGroup;
  intruments = [
    
    {key: "Stock",name:"Stock"},
    {key: "Coin",name:"Coin"},
    {key: "Gold",name:"Gold"},
    {key: "Bond",name:"Bond"},




  ];

  ngOnInit() {


    this.addTradeForm = new FormGroup({
        'intrument': new FormControl('', Validators.required),
        'unit': new FormControl('', Validators.required),

        'tradeType': new FormControl('', Validators.required)
    });
}
  onsubmit(){

  }

}
