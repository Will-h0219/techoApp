import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TechoForm, NotificationSettings } from '../interfaces/tracing.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TracingService {

  private notificationSettings: NotificationSettings = {
    show: false,
    message: "Default Message"
  }
  private baseUrl: string = environment.baseUrl;
  private notificationSource = new BehaviorSubject(this.notificationSettings);
  notificationStatus = this.notificationSource.asObservable();

  constructor(private http: HttpClient) { }

  showNotification(isVisible: NotificationSettings) {
    this.notificationSource.next(isVisible);
  }

  postResponse(form: TechoForm): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/sheet`, form);
  }
}
