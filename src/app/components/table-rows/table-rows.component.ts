import { Component, OnInit, Input } from '@angular/core';
import { Server } from "src/app/Server";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-table-rows',
  templateUrl: './table-rows.component.html',
  styleUrls: ['./table-rows.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class TableRowsComponent implements OnInit {

  @Input() servers: Array<Server>;

  constructor() { }

  ngOnInit() {
  }

  setClass(server) {
    return {
      'online': server.status === 'ONLINE',
      'offline': server.status === 'OFFLINE',
      'rebooting': server.status === 'REBOOTING',

    }
  }

}
