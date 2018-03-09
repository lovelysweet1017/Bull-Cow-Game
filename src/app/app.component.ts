import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Array<any>;
  masterNumber: any;
  result: Object = { guess: null, b: null, c: null };
  history: Array<Object> = [];
  guess: Number;
  won: Boolean = false;
  lost: Boolean = false;
  tries: any = 0;
  constructor(private _dataService: DataService) {
    this._dataService.getUsers()
      .subscribe(res => this.users = res);
  }
  myFunc() {
    console.log("function called");
    this._dataService.getNewNumber()
      .subscribe(
      data => {
        this.masterNumber = data.json().num;
        this.history = [];
        this.result = { guess: null, b: null, c: null };
        this.guess = undefined;
        this.won = false;
        this.tries = 10;
      },
      err => console.error(err),
      () => console.log('started new game')
      );
  }
  makeGuess() {
    console.log(this.guess);
    if (this.masterNumber) {
      if ((this.guess === undefined) || (this.guess + '').length !== 3 || this.hasRepeatingdigits(this.guess) || (this.guess + '').indexOf('0') > -1) {
        console.log('Invalid Guess');
      } else {
        this._dataService.check(this.guess)
          .subscribe(
          data => {
            this.result = data.json();
            this.history.push(data.json());
            this.tries--;
            if (data.json().b === 3) {
              console.log('You Won');
              this.won = true;
            } else if (this.tries == 0 && data.json().b !== 3) {
              console.log('Game Over');
              this.lost = true;
            }
          },
          err => console.error(err),
          () => console.log('guessed once'));
      }
    }
  }
  hasRepeatingdigits(n) {
    return (/([0-9]).*?\1/).test(n)
  }
}
