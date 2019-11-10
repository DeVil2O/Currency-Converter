import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currencyValue: string= 'Here Is The Value...';
  onUpdateCurrencyValue(event : Event){
    if((<HTMLInputElement>event.target).value == ''){
      this.currencyValue = "Here Is The Value...";
    }
    else{
      this.currencyValue = String(Number((<HTMLInputElement>event.target).value)*71.1);
    }
  }
}
