import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ListService } from "../service/list.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [ListService]
})
export class AddComponent implements OnInit {

  title: string;
  name: string;
  lastName: string;
  userDetail = {};
  genderArray: any[] = [];
  nameInChar: boolean = true;
  lastNameInChar: boolean = true;
  searchVal: string;
  parameter: any;
  constructor(private _listService: ListService,  private _router: Router, private currentRoute: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.userDetail = {
      name: '',
      lastName: '',
      age: '',
      date: '',
      genderType: ''
    }
    //this.genderArray = this._dropDownService.getDropDown();
    this.currentRoute.params.subscribe(params => {
      this.parameter = params['id'];
      console.log(this.parameter);
      if (this.parameter) {
        this.userDetail = this._listService.getList()[this.parameter];
      }
    })
    this.currentRoute.data.subscribe(data => this.genderArray = data[0]);
  }

  checkChar(data) {
    var regex = /^[a-zA-Z ]*$/;
    if (data.name === "name") {
      this.nameInChar = regex.test(data.value);
    } else {
      this.lastNameInChar = regex.test(data.value);
    }
  }

  submit(values, isValid) {
    if (!isValid) {
      return;
    }
    console.log(values);
    let model = {
      name: values.name,
      lastName: values.lastName,
      age: values.age,
      date: values.date,
      gender: values.gender
    }
    this._listService.addList(model);
    this._router.navigate(['/view']);
  }

  canDeactivate() {
    if(this.userDetail['age'] > 30) {
      return window.confirm('Do you want to save the data???? <br> age is more than 30');
    }
    return true;
  }

}
