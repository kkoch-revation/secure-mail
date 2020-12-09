import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communicator',
  templateUrl: './communicator.page.html',
  styleUrls: ['./communicator.page.scss', './communicator.desktop.scss']
})
export class CommunicatorPage implements OnInit {

  constructor() { }

  revDefault() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.add("rev-default");
    element.classList.remove(
      "rev-showAll",
      "rev-mediaMessages",
      "rev-messagesSessions",
      "rev-focusQueues",
      "rev-focusMedia",
      "rev-focusMessages",
      "rev-focusSessions"
    );
  }
  showMediaMessages() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.toggle("rev-mediaMessages");
    element.classList.remove(
      "rev-showAll",
      "rev-messagesSessions",
      "rev-focusQueues",
      "rev-focusMedia",
      "rev-focusMessages",
      "rev-focusSessions"
    );
  }
  showMessagesSessions() {
    var element = document.getElementById("rev-flex-grid");
    element.classList.toggle("rev-messagesSessions");
    element.classList.remove(
      "rev-showAll",
      "rev-mediaMessages",
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
      "rev-mediaMessages",
      "rev-messagesSessions",
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
      "rev-mediaMessages",
      "rev-messagesSessions",
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
      "rev-mediaMessages",
      "rev-messagesSessions",
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
      "rev-mediaMessages",
      "rev-messagesSessions",
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
      "rev-mediaMessages",
      "rev-messagesSessions",
      "rev-focusQueues",
      "rev-focusMedia",
      "rev-focusMessages"
    );
  }
  toggleMetrics() {
    var element = document.getElementById("communicator");
    element.classList.toggle("rev-metrics");
  }
  toggleDisposition() {
    var element = document.getElementById("rev-chat-container");
    element.classList.toggle("rev-toggle-disposition");
  }

  ngOnInit() {
  }

}
