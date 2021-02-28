import { Component, OnInit } from '@angular/core';
declare var ol: any;

@Component({
  selector: 'app-about-me-component',
  templateUrl: './about-me-component.component.html',
  styleUrls: ['./about-me-component.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  latitude = 43.6007;
  longitude = 1.4329;

  map: any;

  ngOnInit(): void {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom: 7
      })
    });
  }



}
