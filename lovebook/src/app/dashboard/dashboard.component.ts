import { ConnectionApiService } from './../services/connection-api.service';
import { Component, OnInit } from '@angular/core';
import { GlobalReport } from '../models/GlobalReport';
import { Observable } from 'rxjs';
import { StatsReport } from '../models/StatsReport';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  $globalReport!: Observable<GlobalReport>
  globalReport!: GlobalReport;
  $statsReport!: Observable<StatsReport>
  statsReport!: StatsReport;
  showStatsReport = false;
  parametros = {
    "ano": 2022,
    "mes": 1
  }

  constructor(private service: ConnectionApiService) { }

  ngOnInit(): void {
    this.$globalReport = this.service.getGlobalReport();
    this.$globalReport.subscribe( data => {
      this.globalReport = data

    })
    
  }

  consultar(){
    this.$statsReport = this.service.getStatsReport(this.parametros.mes, this.parametros.ano);
    this.$statsReport.subscribe( data => {
      this.statsReport = data
      this.showStatsReport = true
    })
  }

  
  alterarTamanhoDecimal(valor: any){
    return parseFloat(valor).toFixed(2);
  }

}
