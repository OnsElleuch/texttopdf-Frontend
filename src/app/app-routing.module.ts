import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadFileFormComponent } from './upload-file-form/upload-file-form.component';

const routes: Routes = [
  { path: 'txttopdf', component: UploadFileFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
