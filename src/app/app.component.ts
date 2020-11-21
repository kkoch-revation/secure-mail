import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public apps = [
    {
      title: 'Dashboard',
      url: '/dashboard/dashboard',
      icon: 'apps'
    },
    {
      title: 'Communicator Console',
      url: '/communicator/communicator',
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
      url: '/appointments/appointments',
      icon: 'calendar'
    },
    {
      title: 'Contacts',
      url: '/contacts/Contacts',
      icon: 'people'
    }
  ];
  public userMenu = [
    {
      title: 'Account Settings',
      url: '/settings/Settings',
      icon: 'person-circle'
    },
    {
      title: 'Application Settings',
      url: '/settings/Settings',
      icon: 'cog'
    }
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
    public communicatorFolders = [
      {
        title: 'Sales ACD',
        url: '/communicator/Communicator',
        icon: 'file-tray-full',
        badge: '7',
        color: 'danger'
      },
      {
        title: 'Service ACD',
        url: '/communicator/Communicator',
        icon: 'file-tray-full',
        badge: '',
        color: ''
      },
      {
        title: 'Support ACD',
        url: '/communicator/Communicator',
        icon: 'file-tray-full',
        badge: '2',
        color: 'danger'
      }
     ];
    public contactFolders = [
      {
        title: 'All Contacts',
        url: '/contacts/Contacts',
        icon: 'people-circle'
      },
      {
        title: 'Hunt Groups',
        url: '/folder/Hunt Groups',
        icon: 'folder'
      },
      {
        title: 'Recent Sessions',
        url: '/folder/Recent Sessions',
        icon: 'folder'
      },
      {
        title: 'Sales & Marketing',
        url: '/folder/Sales & Marketing',
        icon: 'folder'
      },
      {
        title: 'System Engineers',
        url: '/folder/System Engineers',
        icon: 'folder'
      },
      {
        title: 'Core Development',
        url: '/folder/Core Development',
        icon: 'folder'
      },
      {
        title: 'Operations',
        url: '/folder/Operations',
        icon: 'folder'
      },
      {
        title: 'Support & Systems Engineering',
        url: '/folder/Support & Systems Engineering',
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
      }
     ];   
	
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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
}
