// JavaScript Document
function showAll() {
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
function focusQueues() {
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
function focusMedia() {
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
function focusChat() {
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
function focusSessions() {
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
function focusChatSessions() {
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
function focusChatMedia() {
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
function noMedia() {
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
function toggleMetrics() {
  var element = document.getElementById("communicator");
  element.classList.toggle("rev-noMetrics");
  element.classList.remove();
}

