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

  constructor(private tracingService: TracingService) { }

  ngOnInit(): void {
    this.subscription = this.tracingService.notificationStatus.subscribe(isVisible => this.showNotification = isVisible);
  }

}
