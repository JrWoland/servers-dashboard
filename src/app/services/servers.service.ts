import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Server } from "../Server";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServersService {


  private config = 'http://nodetest.ct8.pl/servers/'

  constructor(private http: HttpClient) { }

  getServers(): Observable<Array<Server>> {
    return this.http.get<Array<Server>>(this.config);
  }

  getServer(id: number): Observable<Server> {
    return this.http.get<Server>(this.config + id)
  }

  turnOnServer(server: Server) {
    return this.http.put<Server>(this.config + server.id + '/on', server)
  }

  turnOffServer(server: Server) {
    return this.http.put<Server>(this.config + server.id + '/off', server)
  }

  rebootServer(server: Server) {
    return this.http.put<Server>(this.config + server.id + '/reboot', server)
  }
}
