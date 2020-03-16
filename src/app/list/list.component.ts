import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Object;

  //reference the HttpService through dependency injection
  constructor(private _http: HttpService) { }

  //ngOnInit is a life cycle hook. Runs when the component is loaded
  ngOnInit(): void {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);

    });
  }

}
