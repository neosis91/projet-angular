import { Component,  } from '@angular/core';
import {HttpTestServiceService} from '../http-test-service.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
  providers: [HttpTestServiceService]
})
export class HttpTestComponent   {
  getData: string;

  constructor(private _httpService: HttpTestServiceService) {
  }
  onTestGet() {
    this._httpService.getCurrentMovie()
        .subscribe(
            data => this.getData = JSON.stringify(data),
            error => alert(error),
            () => console.log('success')
        );
  }
}
