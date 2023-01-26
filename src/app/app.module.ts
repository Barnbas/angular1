import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import {InputTextModule} from 'primeng/inputtext';
import {AccordionModule} from 'primeng/accordion';
import { FormComponent } from './form/form.component'; 
import {ButtonModule} from 'primeng/button';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { InfoComponent } from './info/info.component';
import { ServiceService } from './service.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { EditComponent } from './edit/edit.component';
import { ApiComponent } from './api/api.component'
import {TableModule} from 'primeng/table';
import { SubComponent } from './sub/sub.component';
import { ObsComponent } from './obs/obs.component';
import { SampleComponent } from './sample/sample.component';
import { SampleInterceptor } from './sample.interceptor';
import { ChartsComponent } from './charts/charts.component';

import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    FormComponent,
    LoginComponent,
    DetailsComponent,
    InfoComponent,
    PostComponent,
    EditComponent,
    ApiComponent,
    SubComponent,
    ObsComponent,
    SampleComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,InputTextModule,AccordionModule,ButtonModule,RouterModule,HttpClientModule,FormsModule,ReactiveFormsModule,TableModule,ChartModule
  ],
  providers: [ServiceService, {provide: HTTP_INTERCEPTORS, useClass: SampleInterceptor, multi:true 
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
   