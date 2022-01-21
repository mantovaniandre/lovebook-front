import { ConnectionApiService } from './../services/connection-api.service';
import { Component, OnInit } from '@angular/core';
import { GlobalReport } from '../models/GlobalReport';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  $globalReport!: Observable<GlobalReport>
  globalReport!: GlobalReport;

  constructor(private service: ConnectionApiService) { }

  ngOnInit(): void {
    this.$globalReport = this.service.getGlobalReport();
    this.$globalReport.subscribe( data => {
      this.globalReport = data
      console.log(data)
      console.log(this.globalReport)
    })
  }

}
