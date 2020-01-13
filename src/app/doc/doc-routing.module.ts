import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocContainerComponent } from './containers/doc-container/doc-container.component';

const routes: Routes = [
  { path: '', component: DocContainerComponent, data: { title: 'Documentation' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocRoutingModule {}
