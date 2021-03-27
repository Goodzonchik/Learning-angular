import { NgModule } from '@angular/core';

import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackRoutingModule } from './feedback-routing.module';
import { SharedModule, HasChangeGuard, ErrorModule } from '@shared';

@NgModule({
  declarations: [FeedbackComponent],
  providers: [HasChangeGuard],
  imports: [SharedModule, FeedbackRoutingModule, ErrorModule],
})
export class FeedbackModule {}
