import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coba',
  templateUrl: './coba.component.html',
  styleUrls: ['./coba.component.css'],
})
export class CobaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
