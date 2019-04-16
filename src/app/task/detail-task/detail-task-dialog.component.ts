import { Component, Injector, Inject, OnInit, Optional } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatCheckboxChange
} from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { AppComponentBase } from '@shared/app-component-base';
import {
  TaskServiceProxy,
  TaskDto,
  CreateTaskDto
} from '@shared/service-proxies/taskservice-proxy';

import * as ApiServiceProxies from '../../../shared/service-proxies/service-proxies';
@Component({
  templateUrl: 'detail-task-dialog.component.html',
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
export class DetailTaskDialogComponent extends AppComponentBase
  implements OnInit {
  private baseUrl: string;
  saving = false;
  task: TaskDto = new TaskDto();
  isDetail: boolean;


  constructor(
    injector: Injector,
    private _taskService:TaskServiceProxy,
    private _dialogRef: MatDialogRef<DetailTaskDialogComponent>,

    @Optional() @Inject(MAT_DIALOG_DATA) private _id: number,
    @Inject(ApiServiceProxies.API_BASE_URL) baseUrl?: string
  ) {
    super(injector);
    this.baseUrl = baseUrl ? baseUrl : "";
  }

  ngOnInit(): void {
    // finishedCallback: Function
    // this.isDetail=this._isdetail;
    this._taskService.get(this._id)
      .subscribe((result: TaskDto) => {
        this.task.init(result);
      });
  }

  close(result: any): void {
    this._dialogRef.close(result);
  }
}
