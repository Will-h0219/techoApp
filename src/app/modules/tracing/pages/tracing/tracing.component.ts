import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TracingService } from '../../../../data/services/tracing.service';
import { TechoForm, NotificationSettings } from '../../../../data/interfaces/tracing.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracing',
  templateUrl: './tracing.component.html',
  styleUrls: ['./tracing.component.scss']
})
export class TracingComponent implements OnInit {

  showNotification: NotificationSettings = { show: false };
  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required, Validators.minLength(7)]],
    comment: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder,
    private tracingService: TracingService,
    private router: Router) { }

  ngOnInit(): void {
    this.tracingService.showNotification(this.showNotification);
  }

  enviar() {
    let { name, email, address, phoneNumber, comment } = this.miFormulario.value;
    let formAnswer: TechoForm = {
      name,
      email,
      address,
      phoneNumber,
      comment
    };
    this.tracingService.postResponse(formAnswer)
      .subscribe(resp => console.log(resp));

    this.router.navigateByUrl('/home');
    
    this.showNotification.show = true;
    this.showNotification.message = "Datos enviados exitosamente!";
    this.tracingService.showNotification(this.showNotification);
    setTimeout(() => {
      this.showNotification.show = false;
      this.tracingService.showNotification(this.showNotification);
    }, 3500)
  }

}
