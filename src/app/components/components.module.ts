import { NgModule } from '@angular/core';
import { CollapseComponent } from './collapse/collapse.component';
import { QueueComponent } from './queue/queue.component';
import { SessionCardComponent } from './session-card/session-card.component';
import { RecentSessionsComponent } from './recent-sessions/recent-sessions.component';

@NgModule({
  declarations: [CollapseComponent, QueueComponent, SessionCardComponent, RecentSessionsComponent],
  exports: [CollapseComponent, QueueComponent, SessionCardComponent, RecentSessionsComponent]
})
export class ComponentsModule {}