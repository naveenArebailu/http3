import { Component } from '@angular/core';
import { ListService } from "./service/list.service";
import { DropDownService } from "./service/drop-down.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class RootComponent {
  
}
