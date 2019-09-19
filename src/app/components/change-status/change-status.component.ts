import { Component, OnInit, Input } from '@angular/core';
import { Server } from "src/app/Server";
import { ServersService } from 'src/app/services/servers.service';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.scss']
})
export class ChangeStatusComponent implements OnInit {

  @Input() serverToChange: Server;

  private isMenuActive: boolean;

  constructor(private _serversService: ServersService) { }

  ngOnInit() {
  }

  turnOn() {
    this._serversService.turnOnServer(this.serverToChange).subscribe(server => {
      this.serverToChange.status = server.status
    })
    this.isMenuActive = !this.isMenuActive;
  }

  turnOff() {
    this._serversService.turnOffServer(this.serverToChange).subscribe(server => {
      this.serverToChange.status = server.status
    })
    this.isMenuActive = !this.isMenuActive;
  }

  reboot() {
    this._serversService.rebootServer(this.serverToChange).subscribe(server => {
      this.serverToChange.status = server.status
    })
    this.pingServer(this.serverToChange.id)
    this.isMenuActive = !this.isMenuActive;
  }

  pingServer(id: number) {
    this._serversService.getServer(id).subscribe(server => {
      const refresh = setInterval(() => {
        console.log(server.status);
        if (server.status === 'REBOOTING') {
          clearInterval(refresh);
          this.pingServer(id)
          return
        } else {
          clearInterval(refresh);
          this.serverToChange.status = server.status;
          return
        }
      }, 2000);
    })
  }

  displayMenu(event) {
    this.isMenuActive = !this.isMenuActive;
  }
}
