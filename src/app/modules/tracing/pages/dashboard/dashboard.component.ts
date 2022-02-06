import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TracingService } from '../../../../data/services/tracing.service';
import { NotificationSettings } from '../../../../data/interfaces/tracing.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showNotification: NotificationSettings = { show: false };
  subscription!: Subscription

  sheetRows: any = [];
  loadingInformation: boolean = true;
  showError: boolean = false;

  constructor(private tracingService: TracingService) { }

  ngOnInit(): void {
    this.tracingService.getEntries()
      .subscribe(resp => {
        console.log(resp);
        this.loadingInformation = false;
        this.sheetRows = resp;
      }, error => {
        this.loadingInformation = false;
        this.showError = true;
      })
    this.subscription = this.tracingService.notificationStatus.subscribe(isVisible => this.showNotification = isVisible);
  }

  refreshRows() {
    this.sheetRows = [];
    this.tracingService.getEntries()
      .subscribe(resp => {
        this.loadingInformation = false;
        this.sheetRows = resp;
      }, error => {
        this.loadingInformation = false;
        this.showError = true;
      })
  }

}
