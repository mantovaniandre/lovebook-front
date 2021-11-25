import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionApiService } from '../services/connection-api.service';

@Component({
  selector: 'app-account-client',
  templateUrl: './account-client.html',
  styleUrls: ['./account-client.css']
})
export class AccountClientComponent implements OnInit {
  $livros_literatura: any;
  data_literatura: any;
  data: any[];

  constructor(private service: ConnectionApiService,
    private router: Router) {
this.data = new Array<any>();
}

  ngOnInit() {
    event?.preventDefault();
    this.$livros_literatura = this.service.getBooks("","Romance","","");
    this.$livros_literatura.subscribe((data: any) => {
      console.log(data);
      this.data_literatura = data;
      this.slides_literatura = this.chunk(this.data_literatura, 5);
      console.log(this.slides_literatura);
    })
  }

  slides_literatura: any = [[]];

  slides: any = [[]];
  chunk(arr: string | any[], chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }


}
