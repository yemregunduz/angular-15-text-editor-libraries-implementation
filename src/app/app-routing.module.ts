import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KolkovAngularEditorComponent } from './text-editors/kolkov-angular-editor/kolkov-angular-editor.component';
import { NgxEditorComponent } from './text-editors/ngx-editor/ngx-editor.component';

const routes: Routes = [
  {path:"ngx-editor",component:NgxEditorComponent},
  {path:'kolkov-editor',component:KolkovAngularEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
