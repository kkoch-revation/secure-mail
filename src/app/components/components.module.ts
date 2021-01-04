import { NgModule } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CollapseComponent } from './collapse/collapse.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { SessionCardComponent } from './session-card/session-card.component';
import { RecentSessionsComponent } from './recent-sessions/recent-sessions.component';
import { AgentMetricsComponent } from './agent-metrics/agent-metrics.component';
import { StatusFabComponent } from './status-fab/status-fab.component';
import { PopoverContactsComponent } from './popover-contacts/popover-contacts.component';
import { PopoverSessionComponent } from './popover-session/popover-session.component';
import { ModalKeypadComponent } from './modal-keypad/modal-keypad.component';

@NgModule({
  declarations: [
    PopoverController, 
    CollapseComponent, 
    ContactCardComponent, 
    SessionCardComponent, 
    RecentSessionsComponent, 
    AgentMetricsComponent, 
    StatusFabComponent, 
    PopoverContactsComponent, 
    PopoverSessionComponent,
    ModalKeypadComponent
  ],
  exports: [
    PopoverController, 
    CollapseComponent, 
    ContactCardComponent, 
    SessionCardComponent, 
    RecentSessionsComponent, 
    AgentMetricsComponent, 
    StatusFabComponent, 
    PopoverContactsComponent, 
    PopoverSessionComponent,
    ModalKeypadComponent
  ]
  
})
export class ComponentsModule {}