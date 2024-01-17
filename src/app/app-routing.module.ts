import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';
import { SampleComponent } from './sample/sample.component';
import { TableComponent } from './table/table.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'view', component: ViewComponent },
  { path: 'sample', component: SampleComponent },
  { path: 'table', component: TableComponent },
  { path: 'form/:id', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
