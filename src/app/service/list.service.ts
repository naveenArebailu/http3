import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ListService {

  Arraylist: any[] = [];
  constructor(private _http: Http) { }
  /** Add list in the array List. */
  addList(arrayListDetail: any) {


    if (localStorage.getItem("array")) {
      this.Arraylist = JSON.parse(localStorage.getItem("array"));
    }
    this.Arraylist.unshift(arrayListDetail);
    localStorage.setItem("array", JSON.stringify(this.Arraylist));

    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this._http.post('', { arrayListDetail }, options)
      .map(function (res) { return res.json() })
  }

  /**Get the list list from the array. */
  getList(): any[] {
    return JSON.parse(localStorage.getItem("array"));
  }

  deleteList(listId) {
    return this._http.delete(`url${listId}`, )
      .map(function (res) { return res.json() });
  }
}
