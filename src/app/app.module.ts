import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodeComponent } from './components/node/node.component';
import { SvgConnectorComponent } from './components/svg-connector/svg-connector.component';
import { ClassesService } from './services/classes.service';
import { TalentsService } from './services/talents.service';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    SvgConnectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ClassesService, TalentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
