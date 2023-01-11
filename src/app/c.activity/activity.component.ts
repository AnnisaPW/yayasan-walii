import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  images = true;

  showNavigationArrows = true;
  showNavigationIndicators = false;
  interval = 0;
}
