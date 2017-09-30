import { Component, OnInit } from '@angular/core';
import { ListService } from "../service/list.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [ListService]
})
export class ViewComponent implements OnInit {


  List: any[] = [];
  constructor(private _listService: ListService) { }

  ngOnInit() {
    this.List = this._listService.getList();
  }

}
