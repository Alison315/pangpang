import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import {Thing} from './thing';
import {ThingService} from './thing.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';


@Component(
    {selector: 'ngbd-table-complete', templateUrl: './table-complete.html', styleUrls: ['./table.component.css'], providers: [ThingService, DecimalPipe]})
export class NgbdTableComplete {
  things$: Observable<Thing[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: ThingService) {
    this.things$ = service.things$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}