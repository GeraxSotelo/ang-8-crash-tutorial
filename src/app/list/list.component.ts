import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  //reference the HttpService through dependency injection
  constructor(private _http: HttpService) { }

  //ngOnInit is a life cycle hook. Runs when the component is loaded
  ngOnInit(): void {
    this._http.myMethod();
  }

}
