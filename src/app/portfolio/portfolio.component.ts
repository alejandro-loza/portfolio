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
          {path: '/assets/photo-1547691889-841a6f1c5ca6.jpg'},
          {path: '/assets/photo-1548625149-9129dad5eef7.jpg'},
          {path: '/assets/photo-1548625149-d37da68f9a7f.jpg'},
          {path: '/assets/photo-1487819162750-4a48cfbf83b0.jpg'},
          {path: '/assets/photo-1489365091240-6a18fc761ec2.jpg'}
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
