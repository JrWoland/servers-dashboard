import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterableTableComponent } from './components/filterable-table/filterable-table.component';
import { TableRowsComponent } from './components/table-rows/table-rows.component';
import { ChangeStatusComponent } from './components/change-status/change-status.component';
import { ServersService } from './services/servers.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterableTableComponent,
    TableRowsComponent,
    ChangeStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
