import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NavigationConf } from '../models/navigationConf.model';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;

    scrolledWindowHeight: boolean = false;
    allowedSidebar: boolean = false;
    sidebarVisible: boolean = false;
    navbarAnimationsAllowed: boolean = false;

    @Input() navigationConf: NavigationConf = {
        navigationItems: [
            {
                name: "O Nás",
                urlPath: "/about"
            },{
                name: "Články",
                urlPath: "/blog"
            }
        ]
    };

    @HostListener("window:scroll", []) onWindowScroll(event: any) {
        // do some stuff here when the window is scrolled
        this.scrolledWindowHeight = window.pageYOffset > window.innerHeight - 120;
    }

    @HostListener('window:resize', []) onResize(event: any) {
        this.allowedSidebar = window.innerWidth < 960;
        if (!this.allowedSidebar) {
            this.sidebarVisible = false;
            // Turn on scrolling
            document.body.style.overflow = 'visible'
        }
    }

    constructor(public location: Location, private element : ElementRef) {
        this.sidebarVisible = false;
        this.allowedSidebar = window.innerWidth < 960;

    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navigation-button')[0];
    }

    isHome() {
      var title = this.location.prepareExternalUrl(this.location.path());
      if(title.charAt(0) === '#'){
          title = title.slice( 1 );
      }
        if( title === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isBlog() {
      var title = this.location.prepareExternalUrl(this.location.path());
      if(title.charAt(0) === '#'){
          title = title.slice( 1 );
      }
        if( title === '/blog' ) {
            return true;
        }
        else {
            return false;
        }
    }

    toggleNavigation() {
        this.navbarAnimationsAllowed = true;
        this.sidebarVisible = !this.sidebarVisible;
        document.body.style.overflow = window.getComputedStyle(document.body).overflow === 'hidden' ? 'visible' : 'hidden';
    }
}
