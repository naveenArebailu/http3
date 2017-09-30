import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class DropDownService {

  constructor(private _http: Http) { }

  getDropDown() {
    return this._http.get('http://api.myjson.com/bins/f74pf').toPromise().then(function(res) {
      return res.json();
    }).catch(function(err) {
      return err;
    })
  }

}
