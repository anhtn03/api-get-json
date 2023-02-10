import { Component } from '@angular/core';

import { GetJsonService } from 'src/app/service/get-json.service';

@Component({
  selector: 'app-get-random-json',
  templateUrl: './get-random-json.component.html',
  styleUrls: ['./get-random-json.component.scss']
})
export class GetRandomJsonComponent{

  message: string;
  constructor(private readonly getJsonService: GetJsonService) { }

  callApi() {
    this.getJsonService.getJson("bing").subscribe(
      (response) => { this.message = JSON.stringify(response) },
      (error) => { console.log(error) }
    )
  }

}
