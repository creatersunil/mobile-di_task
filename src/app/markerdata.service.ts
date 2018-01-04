import { Injectable } from '@angular/core';
import { marker } from './marker';
@Injectable()
export class MarkerdataService {
  markers: marker[] = [
    {
      name: 'CHICKEN PARK',
      lat: 12.953946399407366,
      lng: 77.48974800109863
    },
    {
      name: 'Patefull',
      lat: 12.954364630785008,
      lng: 77.52073287963867
    },
    {
      name: 'Maikaa Restaurant',
      lat: 12.951520643569632,
      lng: 77.51463890075684
    },
    {
      name: 'Hotel Udupi Grand',
      lat: 12.96072166125174,
      lng: 77.50313758850098
    },
    {
      name: 'Five Star Chicken',
      lat: 12.880355520074078,
      lng: 77.65274047851562
    },
	  {
      name: 'Samrudhi Restaurant',
      lat: 12.890103000672228,
      lng: 77.64042377471924
    },
	  {
      name: 'Foodiction',
      lat: 12.888838830326671,
      lng: 77.65078783035278
    },
	  {
      name: 'Palm Springs',
      lat: 12.88980101226613,
      lng: 77.64737606048584
    },
	  {
      name: 'Sri Bhagya',
      lat: 12.889403589739358,
      lng: 77.6474404335022
    },
	  {
      name: 'Hickeyz',
      lat: 12.892896702983181,
      lng: 77.63808488845825
    },
	  {
      name: 'Chackochi Mess',
      lat: 12.892352868196658,
      lng: 77.6383638381958
    },
  ];
  constructor() { }
  getAllMarkers() {
    if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {
      localStorage.setItem('markers', JSON.stringify(this.markers));
      return this.markers;
     
    }
    else {
      
      var markers = JSON.parse(localStorage.getItem('markers'));
      return markers;
    }

  }
  addMarker(newmarker: marker) {

    var markers = JSON.parse(localStorage.getItem('markers'));
    markers.push(newmarker);
    localStorage.setItem('markers', JSON.stringify(markers));
  }
  removeMarker(mark: marker) {

    var markers = JSON.parse(localStorage.getItem('markers'));
    markers.splice(markers.indexOf(mark),1);
    localStorage.setItem('markers', JSON.stringify(markers));
  }
}
