import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';  
import { PopoverContactsComponent } from './components/popover-contacts/popover-contacts.component';
import { PopoverSessionComponent } from './components/popover-session/popover-session.component';


import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public popoverController: PopoverController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.mailPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  async presentPopoverContacts(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverContactsComponent,
      cssClass: 'rev-popover-contacts',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  async presentPopoverSession(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverSessionComponent,
      cssClass: 'rev-popover-session',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  dismissPopover() {
    this.popoverController.dismiss();
  }

  showContacts() {
    var element = document.getElementById("contacts");
    element.classList.add("rev-show");
    var element = document.getElementById("contacts");
    element.classList.remove("rev-hide");
    var element = document.getElementById("speedDials");
    element.classList.remove("rev-show");
    var element = document.getElementById("speedDials");
    element.classList.add("rev-hide");
    var element = document.getElementById("recentSessions");
    element.classList.remove("rev-show");
    var element = document.getElementById("recentSessions");
    element.classList.add("rev-hide");
  }
  showSpeedDials() {
    var element = document.getElementById("speedDials");
    element.classList.add("rev-show");
    var element = document.getElementById("speedDials");
    element.classList.remove("rev-hide");
    var element = document.getElementById("contacts");
    element.classList.remove("rev-show");
    var element = document.getElementById("contacts");
    element.classList.add("rev-hide");
    var element = document.getElementById("recentSessions");
    element.classList.remove("rev-show");
    var element = document.getElementById("recentSessions");
    element.classList.add("rev-hide");
  }
  showRecentSessions() {
    var element = document.getElementById("recentSessions");
    element.classList.add("rev-show");
    var element = document.getElementById("contacts");
    element.classList.remove("rev-show");
    var element = document.getElementById("contacts");
    element.classList.add("rev-hide");
    var element = document.getElementById("speedDials");
    element.classList.remove("rev-show");
    var element = document.getElementById("speedDials");
    element.classList.add("rev-hide");
  }

  public selectedIndex = 0;
  public apps = [
    {
      title: 'Communicator Console',
      url: '/communicator/Communicator',
      icon: 'chatbox-ellipses'
    },
    {
      title: 'Secure Mail',
      url: '/folder/Inbox',
      icon: 'mail',
      badge: '3'
    },
    {
      title: 'Appointments',
      url: '/appointments/Appointments',
      icon: 'calendar'
    },
    {
      title: 'Dashboard',
      url: '/dashboard/Dashboard',
      icon: 'apps'
    }
  ];
  public userMenu = [
    {
      title: 'Account Settings',
      url: '/account/Account',
      icon: 'person-circle'
    },
    {
      title: 'Application Settings',
      url: '/settings/Settings',
      icon: 'cog'
    }
  ];

  public contactPagesA = [ 
    {
      firstName: 'Aaron',
      lastName: 'Aanistadt',
      status: 'online',
      phone: '(123) 456-7890',
      ext: '2122',
      avatar: 'avatar-luke.png',
      url: '/contact/Contact',
    },
    {
      firstName: 'Andrew',
      lastName: 'Amundson',
      status: 'online',
      phone: '(123) 321-5454',
      ext: '2129',
      avatar: 'avatar-han.png',
      url: '/contact/Contact',
    },
    {
      firstName: 'Ariel',
      lastName: 'Atkins',
      status: 'online',
      phone: '(123) 321-9922',
      ext: '2127',
      avatar: 'avatar-leia.png',
      url: '/contact/Contact',
    },
    {
      firstName: 'Armond',
      lastName: 'Arnold',
      status: 'busy - conference external',
      phone: '(123) 456-4321',
      ext: '2125',
      avatar: 'avatar-poe.png',
      url: '/contact/Contact',
    },
  ];
  public contactPagesB = [ 
    {
      firstName: 'Barbara',
      lastName: 'Benson',
      status: 'online',
      phone: '(123) 456-7890',
      ext: '2122',
      avatar: 'avatar-rey.png',
      url: '/contact/Contact',
    },
    {
      firstName: 'Bobby',
      lastName: 'Billingsly',
      status: 'on the phone',
      phone: '(123) 321-5454',
      ext: '2129',
      avatar: 'avatar-finn.png',
      url: '/contact/Contact',
    },
    {
      firstName: 'Benny',
      lastName: 'Bowlesby',
      status: 'busy - conference internal',
      phone: '(123) 321-9922',
      ext: '2127',
      avatar: 'avatar-ben.png',
      url: '/contact/Contact',
    },
    {
      firstName: 'Burton',
      lastName: 'Brewster',
      status: 'away',
      phone: '(123) 456-4321',
      ext: '2125',
      avatar: 'avatar-poe.png',
      url: '/contact/Contact',
    },
  ];
  public contactPagesC = [ 
    {
      firstName: 'Calvin',
      lastName: 'Camden',
      status: 'out to lunch',
      phone: '(123) 321-5454',
      ext: '2129',
      avatar: 'avatar-han.png',
      url: '/contact/Contact',
    },
    {
      firstName: 'Carlton',
      lastName: 'Cadenza',
      status: 'offline',
      phone: '(123) 456-7890',
      ext: '2122',
      avatar: 'avatar-luke.png',
      url: '/contact/Contact',
    },
    {
      firstName: 'Carrie',
      lastName: 'Creston',
      status: 'online',
      phone: '(123) 321-9922',
      ext: '2127',
      avatar: 'avatar-leia.png',
      url: '/contact/Contact',
    },
  ];
  public contactPagesD = [ 
    {
      firstName: 'Darcy',
      lastName: 'DeLahoya',
      status: 'out to lunch',
      phone: '(123) 321-9922',
      ext: '2127',
      avatar: 'avatar-rey.png',
      url: '/contact/Contact',
    },
    {
      firstName: 'Demarius',
      lastName: 'DeSantis',
      status: 'offline',
      phone: '(123) 321-5454',
      ext: '2129',
      avatar: 'avatar-finn.png',
      url: '/contact/Contact',
    },
    {
      firstName: 'Donald',
      lastName: 'Deiterhoffen',
      status: 'online',
      phone: '(123) 456-7890',
      ext: '2122',
      avatar: 'avatar-poe.png',
      url: '/contact/Contact',
    },
  ];

  public dashPages = [
    {
      title: 'My Agent Dashboard',
      url: '/dashboard/Dashboard',
      icon: 'home',
      badge: '1',
      color: 'danger'
    },
    {
      title: 'All Hunt Groups',
      url: '/dashboard/All Hunt Groups',
      icon: 'file-tray-full',
    },
    {
      title: 'Hunt Group One',
      url: '/dashboard/Hunt Group One',
      icon: 'file-tray-full',
    },
    {
      title: 'Hunt Group Two',
      url: '/dashboard/Hunt Group Two',
      icon: 'file-tray-full',
    },
  ];

  public speedDialsInternal = [
    {
      name: 'Front Desk',
      number: '(952) 392-1831',
      ext: '5000'
    },
    {
      name: 'Vicki Helms',
      number: '(952) 392-1831',
      ext: '5353'
    },
    {
      name: 'Sarah Dansby',
      number: '(952) 392-1831',
      ext: '5329'
    },
  ];
  public speedDialsExternal = [
    {
      name: 'Central Processing',
      number: '(952) 392-1831',
      ext: '2223'
    },
    {
      name: 'Interpreter Services - Spanish',
      number: '(952) 392-1831',
      ext: '4445'
    },
    {
      name: 'Interpreter Services - French',
      number: '(952) 392-1831',
      ext: '2222'
    },
    {
      name: 'Interpreter Services - Japanese',
      number: '(952) 392-1831',
      ext: '4449'
    },
    {
      name: 'Escalation Queue',
      number: '(952) 392-1831',
      ext: '2222'
    },
    
  ];
  public speedDialsPersonal = [
    {
      name: 'Carol',
      number: '(952) 392-1831',
      ext: '6200'
    },
    {
      name: 'Steve',
      number: '(952) 392-1831',
      ext: '6201'
    },
    {
      name: 'Jasmine',
      number: '(952) 392-1831',
      ext: '6232'
    },
    
  ];

  public mailPages = [
      {
        title: 'Inbox',
        url: '/folder/Inbox',
        icon: 'mail',
        badge: '3',
        color: 'danger'
      },
      {
        title: 'Outbox',
        url: '/folder/Outbox',
        icon: 'paper-plane',
      },
      {
        title: 'Calls',
        url: '/folder/Calls',
        icon: 'call'
      },
      {
        title: 'Chats',
        url: '/folder/Chats',
        icon: 'chatbox-ellipses'
      },
      {
        title: 'Favorites',
        url: '/folder/Favorites',
        icon: 'heart'
      },
      {
        title: 'Archived',
        url: '/folder/Archived',
        icon: 'archive'
      },
      {
        title: 'Trash',
        url: '/folder/Trash',
        icon: 'trash'
      },
      {
        title: 'Spam',
        url: '/folder/Spam',
        icon: 'warning',
        badge: '87',
        color: 'warning'
      }
  ];
  public appointmentPages = [
    {
      title: 'My Appointments',
      url: '/appointments/My Appointments',
      icon: 'home',
    },
    {
      title: 'All Appointments',
      url: '/appointments/All Appointments',
      icon: 'file-tray-full',
    },
  ];
  public contactFolders = [
      {
        title: 'All Contacts',
        url: '/contacts/Contacts',
        icon: 'people-circle'
      },
      {
        title: 'Hunt Groups',
        url: '/contacts/Hunt Groups',
        icon: 'folder'
      },
      {
        title: 'Recent Sessions',
        url: '/contacts/Recent Sessions',
        icon: 'folder'
      },
      {
        title: 'Sales & Marketing',
        url: '/contacts/Sales & Marketing',
        icon: 'folder'
      },
      {
        title: 'System Engineers',
        url: '/contacts/System Engineers',
        icon: 'folder'
      },
      {
        title: 'Core Development',
        url: '/contacts/Core Development',
        icon: 'folder'
      },
      {
        title: 'Operations',
        url: '/contacts/Operations',
        icon: 'folder'
      },
      {
        title: 'Support & Systems Engineering',
        url: '/contacts/Support & Systems Engineering',
        icon: 'folder'
      }
  ]; 
  public revStatus = [
      {
        title: 'Online',
        url: '',
        icon: 'ellipse',
        color: 'success'
      },
      {
        title: 'Busy',
        url: '',
        icon: 'ellipse',
        color: 'warning'
      },
      {
        title: 'Busy - Conference Internal',
        url: '',
        icon: 'ellipse',
        color: 'warning'
      },
      {
        title: 'Busy - Conference External',
        url: '',
        icon: 'ellipse',
        color: 'warning'
      },
      {
        title: 'Busy - Customer Site',
        url: '',
        icon: 'ellipse',
        color: 'warning'
      },
      {
        title: 'On the Phone',
        url: '',
        icon: 'ellipse',
        color: 'warning'
      },
      {
        title: 'Away',
        url: '',
        icon: 'ellipse',
        color: 'danger'
      },
      {
        title: 'Away - Customer Site',
        url: '',
        icon: 'ellipse',
        color: 'danger'
      },
      {
        title: 'Out to Lunch',
        url: '',
        icon: 'ellipse',
        color: 'danger'
      },
      {
        title: 'Be Right Back',
        url: '',
        icon: 'ellipse',
        color: 'danger'
      },
      {
        title: 'Appear Offline',
        url: '',
        icon: 'ellipse',
        color: 'medium'
      },
      {
        title: 'Sign Out',
        url: '',
        icon: 'log-out',
        color: 'medium'
      }
  ];   
}
