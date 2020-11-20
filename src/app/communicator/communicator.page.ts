import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communicator',
  templateUrl: './communicator.page.html',
  styleUrls: ['./communicator.page.scss'],
})
export class CommunicatorPage implements OnInit {

  constructor() { }

  defaultLayout() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.add("layout-0");
    element.classList.remove(
      "showAll",
      "layout-1",
      "layout-2",
      "layout-3",
      "layout-4"
    );
  }
  showAll() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.add("showAll");
    element.classList.remove(
      "layout-0",
      "layout-1",
      "layout-2",
      "layout-3",
      "layout-4"
    );
  }
  layout1() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.add("layout-1");
    element.classList.remove(
      "layout-0",
      "showAll",
      "layout-2",
      "layout-3",
      "layout-4"
    );
  }
  layout2() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.add("layout-2");
    element.classList.remove(
      "layout-0",
      "showAll",
      "layout-1",
      "layout-3",
      "layout-4"
    );
  }
  layout3() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.add("layout-3");
    element.classList.remove(
      "layout-0",
      "showAll",
      "layout-1",
      "layout-2",
      "layout-4"
    );
  }
  layout4() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.add("layout-4");
    element.classList.remove(
      "layout-0",
      "showAll",
      "layout-1",
      "layout-2",
      "layout-3"
    );
  }
  toggleMetrics() {
    var element = document.getElementById("communicator");
    element.classList.toggle("metrics");
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
