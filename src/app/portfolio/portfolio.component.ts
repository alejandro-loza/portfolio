import { Component, OnInit } from '@angular/core';
import {Gallery} from 'angular-gallery';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private gallery: Gallery) {}

  showGallery(index: number = 0) {
      let prop: any = {};
      prop.images = [
        {path: '/assets/brunavs/a0txc-hgjps.jpg'},
        {path: '/assets/brunavs/a26go-cewpm.jpg'},
        {path: '/assets/brunavs/ab45w-8fidg.jpg'},
        {path: '/assets/brunavs/allv2-1opd2.jpg'},
        {path: '/assets/brunavs/anmnp-xgcdt.jpg'},
        {path: '/assets/brunavs/anor7-ppxmp.jpg'},
        {path: '/assets/brunavs/aqqsl-wgxwe.jpg'}
      ];
      prop.index = index;
      this.gallery.load(prop);
  }

  closeGallery() {
      this.gallery.close();
  }

  ngOnInit(): void {
  }

}
