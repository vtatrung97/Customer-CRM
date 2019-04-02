import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agrid',
  templateUrl: './agrid.component.html',
  styleUrls: ['./agrid.component.scss'],
})
export class AgridComponent implements OnInit {
  title = 'app';

  columnDefs = [
    {headerName: 'Công ty', field: 'colum1', sortable: true, filter: true},
    {headerName: 'Khách hàng', field: 'colum2', sortable: true, filter: true},
    {headerName: 'Phòng ban', field: 'colum3', sortable: true, filter: true},
    {headerName: 'Phone', field: 'colum4', sortable: true, filter: true},
    {headerName: 'Email', field: 'colum5', sortable: true, filter: true}
  ];

    rowData = [
        { colum1: 'Toyota', colum2: 'Celica', colum3: 35000 },
        { colum1: 'Ford', colum2: 'Mondeo', colum3: 32000 },
        { colum1: 'Toyota', colum2: 'Celica', colum3: 35000 },
        { colum1: 'Ford', colum2: 'Mondeo', colum3: 32000 },
        { colum1: 'Porsche', colum2: 'Boxter', colum3: 72000 }
    ];
  constructor() { }

  ngOnInit() {
  }

}
