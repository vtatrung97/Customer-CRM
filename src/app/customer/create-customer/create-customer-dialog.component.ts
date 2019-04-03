import { Component, Injector, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { finalize } from 'rxjs/operators';
import { AppComponentBase } from '@shared/app-component-base';
import { CustomerServiceProxy, CreateCustomerDto } from '@shared/service-proxies/customerservice-proxy';

import { ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  templateUrl: 'create-customer-dialog.component.html',
  styles: [
    `
      mat-form-field {
        width: 100%;
      }
      mat-checkbox {
        padding-bottom: 5px;
      }
    `
  ]
})
export class CreateCustomerDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  customer: CreateCustomerDto = new CreateCustomerDto();

  constructor(
    injector: Injector,
    public _customerService: CustomerServiceProxy,
    private _dialogRef: MatDialogRef<CreateCustomerDialogComponent>
  ) {
    super(injector);
  }

  ngOnInit(): void {

  }

  save(): void {
    this.saving = true;

    this._customerService
      .create(this.customer)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(() => {
        this.notify.info(this.l('SavedSuccessfully'));
        this.close(true);
      });
  }

  close(result: any): void {
    this._dialogRef.close(result);
  }
}
