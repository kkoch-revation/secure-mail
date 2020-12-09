import { NgModule } from '@angular/core';
import { CollapseComponent } from './collapse/collapse.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { QueueComponent } from './queue/queue.component';
import { SessionCardComponent } from './session-card/session-card.component';
import { RecentSessionsComponent } from './recent-sessions/recent-sessions.component';
import { AgentMetricsComponent } from './agent-metrics/agent-metrics.component';
import { StatusFabComponent } from './status-fab/status-fab.component';

@NgModule({
  declarations: [CollapseComponent, QueueComponent, ContactCardComponent, SessionCardComponent, RecentSessionsComponent, AgentMetricsComponent, StatusFabComponent],
  exports: [CollapseComponent, QueueComponent, ContactCardComponent, SessionCardComponent, RecentSessionsComponent, AgentMetricsComponent, StatusFabComponent]
})
export class ComponentsModule {}