import { Component, OnInit, ElementRef, Input, HostListener, Renderer2} from '@angular/core';
import { Expedition } from './../../shared/models/expedition.model';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-expedition-preview',
  templateUrl: './expedition-preview.component.html',
  styleUrls: ['./expedition-preview.component.scss']
})
export class ExpeditionPreviewComponent implements OnInit {

  @Input() expedition: Expedition = {
    id: 0,
    slug: 'empty',
    title: '',
    description: '',
    states: [],
    dateFrom: new Date(),
    dateTo: new Date(),
    previewPhotoUrls: [''],
    photoUrls: [''],
    contentHTML: ''
  };

  /* @HostListener('window:scroll', []) onWindowScroll(event: any) {
    // do some stuff here when the window is scrolled
    var target = this.nativeElement.getElementsByClassName('img-parallax')[0];
    var scrolltotop = document!.scrollingElement!.scrollTop;
    var xvalue = 'center';
    
    var factor = 1;
    var yvalue = scrolltotop * factor;

    this.renderer.setStyle(target, 'backgroundPosition', xvalue + ' ' + yvalue + 'px');
  }*/

  nativeElement: HTMLElement;

  public datepipe: DatePipe = new DatePipe('en-US');

  constructor(
    private router: Router,
    private element : ElementRef,
    private renderer: Renderer2,
  ) {

  }

  ngOnInit() {
    this.nativeElement = this.element.nativeElement;
  }

  goToExpedition(): void {
    const navigationDetails: string[] = ['/expedition'];
    navigationDetails.push(this.expedition.slug);
    this.router.navigate(navigationDetails);
  }

}
