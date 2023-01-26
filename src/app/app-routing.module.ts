import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { AuthGuard } from './auth.guard';
import { ChartsComponent } from './charts/charts.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { ObsComponent } from './obs/obs.component';
import { PostComponent } from './post/post.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { SubComponent } from './sub/sub.component';

const routes: Routes = [
  {path:"form",component:FormComponent,
  children:[{path:"login",component:LoginComponent,canActivate:[AuthGuard],}]},
  {path:"ract",component:ReactiveComponent},
 {path:"service",component:DetailsComponent},
 {path:"info",component:InfoComponent,

},
{path:"edit",component:EditComponent},
 {path:"post",component:PostComponent},
 {path:"api",component:ApiComponent},
{path:"sub",component:SubComponent},
{path:"obs",component:ObsComponent},
{path:"chat",component:ChartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
