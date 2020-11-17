import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communicator',
  templateUrl: './communicator.page.html',
  styleUrls: ['./communicator.page.scss'],
})
export class CommunicatorPage implements OnInit {

  constructor() { }

  showAll() {
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
  ngOnInit() {
  }



}
