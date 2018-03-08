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
  result: any;

  constructor(private _dataService: DataService) {
    this._dataService.getUsers()
      .subscribe(res => this.users = res);
    this._dataService.getNewNumber()
      .subscribe(
      data => { this.masterNumber = data.json().num;console.log(data.json()); },
      err => console.error(err),
      () => console.log('started new game')
      );
    this._dataService.check(999)
      .subscribe(
      data => { this.result = data.json().guess;console.log(data.json()); },
      err => console.error(err),
      () => console.log('guessed once'));
  }
}
