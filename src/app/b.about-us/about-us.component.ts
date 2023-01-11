import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  providers: [NgbCarouselConfig],
})
export class AboutUsComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {}

  images = true;

  showNavigationArrows = true;
  showNavigationIndicators = false;
  wrap = false;
  keyboard = false;
  pauseOnHover = false;
  interval = 0;
}
