import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HasChangeGuard } from '@shared';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {
    path: '',
    component: FeedbackComponent,
    canDeactivate: [HasChangeGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackRoutingModule {}
