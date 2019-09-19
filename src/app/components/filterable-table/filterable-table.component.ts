import { Component, OnInit } from '@angular/core';
import { ServersService } from 'src/app/services/servers.service';

@Component({
  selector: 'app-filterable-table',
  templateUrl: './filterable-table.component.html',
  styleUrls: ['./filterable-table.component.scss']
})
export class FilterableTableComponent implements OnInit {

  public servers;
  public filteredServers;

  constructor(private _serversService: ServersService) { }

  ngOnInit() {
    this.getServers();
  }

  getServers() {
    this._serversService.getServers().subscribe(
      servers => {
        this.servers = servers
        this.filteredServers = servers
      },
      err => console.log(err)
    );
    this.filteredServers = this.servers
  }
  findServer($event) {
    let text = $event.target.value.toLowerCase();
    this.filteredServers = this.servers.filter(server => server.name.toLowerCase().includes(text))

  }

}
