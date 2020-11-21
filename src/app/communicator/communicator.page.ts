import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communicator',
  templateUrl: './communicator.page.html',
  styleUrls: ['./communicator.page.scss'],
  styleUrls: ['./communicator.page.desktop.scss'],
})
export class CommunicatorPage implements OnInit {

  constructor() { }

  revDefault() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.add("rev-default");
    element.classList.remove(
      "rev-showAll",
      "rev-focusQueues",
      "rev-focusMedia",
      "rev-focusMessages",
      "rev-focusSessions"
    );
  }
  showAll() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.toggle("rev-showAll");
    element.classList.remove(
      "rev-focusQueues",
      "rev-focusMedia",
      "rev-focusMessages",
      "rev-focusSessions"
    );
  }
  focusQueues() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.toggle("rev-focusQueues");
    element.classList.remove(
      "rev-showAll",
      "rev-focusMedia",
      "rev-focusMessages",
      "rev-focusSessions"
    );
  }
  focusMedia() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.toggle("rev-focusMedia");
    element.classList.remove(
      "rev-showAll",
      "rev-focusQueues",
      "rev-focusMessages",
      "rev-focusSessions"
    );
  }
  focusMessages() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.toggle("rev-focusMessages");
    element.classList.remove(
      "rev-showAll",
      "rev-focusQueues",
      "rev-focusMedia",
      "rev-focusSessions"
    );
  }
  focusSessions() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.toggle("rev-focusSessions");
    element.classList.remove(
      "rev-showAll",
      "rev-focusQueues",
      "rev-focusMedia",
      "rev-focusMessages"
    );
  }
  toggleMetrics() {
    var element = document.getElementById("communicator");
    element.classList.toggle("rev-metrics");
  }
  
  /*showAll() {
    var element = document.getElementById("communicator");
    element.classList.remove(
      "rev-queues",
      "rev-media",
      "rev-chat",
      "rev-sessions",
      "rev-chatSessions",
      "rev-noMedia",
      "rev-noMetrics",
      "rev-chatMedia"
    );
  }
  focusQueues() {
    var element = document.getElementById("communicator");
    element.classList.add("rev-queues");
    element.classList.remove(
      "rev-media",
      "rev-chat",
      "rev-sessions",
      "rev-chatSessions",
      "rev-noMedia",
      "rev-chatMedia"
    );
  }
  focusMedia() {
    var element = document.getElementById("communicator");
    element.classList.add("rev-media");
    element.classList.remove(
      "rev-queues",
      "rev-chat",
      "rev-sessions",
      "rev-chatSessions",
      "rev-noMedia",
      "rev-chatMedia"
    );
  }
  focusChat() {
    var element = document.getElementById("communicator");
    element.classList.add("rev-chat");
    element.classList.remove(
      "rev-queues",
      "rev-media",
      "rev-sessions",
      "rev-chatSessions",
      "rev-noMedia",
      "rev-chatMedia"
    );
  }
  focusSessions() {
    var element = document.getElementById("communicator");
    element.classList.add("rev-sessions");
    element.classList.remove(
      "rev-queues",
      "rev-media",
      "rev-chat",
      "rev-chatSessions",
      "rev-noMedia",
      "rev-chatMedia"
    );
  }
  focusChatSessions() {
    var element = document.getElementById("communicator");
    element.classList.add("rev-chatSessions");
    element.classList.remove(
      "rev-queues",
      "rev-media",
      "rev-chat",
      "rev-sessions",
      "rev-noMedia",
      "rev-chatMedia"
    );
  }
  focusChatMedia() {
    var element = document.getElementById("communicator");
    element.classList.add("rev-chatMedia");
    element.classList.remove(
      "rev-queues",
      "rev-media",
      "rev-chat",
      "rev-sessions",
      "rev-noMedia",
      "rev-chatSessions"
    );
  }
  noMedia() {
    var element = document.getElementById("communicator");
    element.classList.add("rev-noMedia");
    element.classList.remove(
      "rev-queues",
      "rev-media",
      "rev-chat",
      "rev-sessions",
      "rev-chatSessions",
      "rev-chatMedia"
    );
  }
  toggleMetrics() {
    var element = document.getElementById("communicator");
    element.classList.toggle("rev-noMetrics");
    element.classList.remove();
  }
  */
  ngOnInit() {
  }

}
