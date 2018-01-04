import { Component, OnInit,ElementRef, NgZone, ViewChild } from '@angular/core';
import {AuthenticateService} from "../login/loginService/authenticate.service";
import { FormControl } from '@angular/forms';
import { marker } from './../marker';
import { MarkerdataService } from './../markerdata.service';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe} from './../filter.pipe';
import { MapsAPILoader } from '@agm/core'
import { } from 'googlemaps';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [AuthenticateService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = 'Angular';
  public lat: number ;
  public lng: number ;
  public searchControl: FormControl;
  public zoom: number;
  data= [
    {
      "id": "X999_Y999",
      "from": {
        "name": "Tom Brady", "id": "X12"
      },
      "message": "Looking forward to 2010!",
      "actions": [
        {
          "name": "Comment",
          "link": "http://www.facebook.com/X999/posts/Y999"
        },
        {
          "name": "Like",
          "link": "http://www.facebook.com/X999/posts/Y999"
        }
      ],
      "type": "status",
      "created_time": "2010-08-02T21:27:44+0000",
      "updated_time": "2010-08-02T21:27:44+0000"
    },
    {
      "id": "X999_Y977",
      "from": {
        "name": "Jim Kazama", "id": "X12"
      },
      "message": "How are you guys !",
      "actions": [
        {
          "name": "Comment",
          "link": "http://www.facebook.com/X999/posts/Y999"
        },
        {
          "name": "Like",
          "link": "http://www.facebook.com/X999/posts/Y999"
        }
      ],
      "type": "status",
      "created_time": "2010-08-02T21:27:44+0000",
      "updated_time": "2010-08-02T21:27:44+0000"
    },
    {
      "id": "X999_Y89",
      "from": {
        "name": "Paul varch", "id": "X12"
      },
      "message": "I Love my self :V !",
      "actions": [
        {
          "name": "Comment",
          "link": "http://www.facebook.com/X999/posts/Y89"
        },
        {
          "name": "Like",
          "link": "http://www.facebook.com/X999/posts/Y89"
        }
      ],
      "type": "status",
      "created_time": "2010-08-02T21:27:44+0000",
      "updated_time": "2010-08-02T21:27:44+0000"
    },
    {
      "id": "X998_Y998",
      "from": {
        "name": "Peyton Manning", "id": "X18"
      },
      "message": "Where's my contract?",
      "actions": [
        {
          "name": "Comment",
          "link": "http://www.facebook.com/X998/posts/Y998"
        },
        {
          "name": "Like",
          "link": "http://www.facebook.com/X998/posts/Y998"
        }
      ],
      "type": "status",
      "created_time": "2010-08-02T21:27:44+0000",
      "updated_time": "2010-08-02T21:27:44+0000"
    }
  ];

  // @ViewChild("search")
  // public searchElementRef: ElementRef;

  allMarkers: marker[];
  public searchData:any[]=new Array();
  names:any;
  constructor(private _service:AuthenticateService, private _data: MarkerdataService, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { 

      this.allMarkers = this._data.getAllMarkers();
      console.log(this.allMarkers);
     
      // console.log('searchdata'+this.searchData);
      // console.log(this.searchData);
      // this.searchData=this.allMarkers.filter(allMarker=>allMarker.name===);
      
    }

  ngOnInit() {
    this._service.checkCredentials();
    this.loadProfiles();
            //set google maps defaults
            this.zoom = 11;
            this.lat = 12.972065629706831;
            this.lng = 77.54287719726562;
        
            //create search FormControl
            // this.searchControl = new FormControl();
        
            // //set current position
            // this.setCurrentPosition();
        
            // //load Places Autocomplete
            // this.mapsAPILoader.load().then(() => {
            //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
            //     types: ["address"]
            //   });
            //   autocomplete.addListener("place_changed", () => {
            //     this.ngZone.run(() => {
            //       //get the place result
            //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        
            //       //verify result
            //       if (place.geometry === undefined || place.geometry === null) {
            //         return;
            //       }
        
            //       //set latitude, longitude and zoom
            //       this.lat = place.geometry.location.lat();
            //       this.lng = place.geometry.location.lng();
            //       this.zoom = 12;
            //     });
            //   });
            // });
        
            this.allMarkers.filter((data)=>{
              console.log(data.name);
              this.searchData.push(data.name)
              console.log(this.searchData);
            });
            //called after the constructor and called  after the first ngOnChanges() 
  }

  //  private setCurrentPosition() {
//   if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       this.lat = position.coords.latitude;
//       this.lng = position.coords.longitude;
//       this.zoom = 12;
//     });
//   }
// }


  loadProfiles(){
    for (var sd in this.data) {
      var a= this.data[0];
    }
   }

  logout():void {
    this._service.logout();
  }

  onClick(m: any) {
    console.log(m);
  }
  onMapClicked($event) {
  
     var newMarker:marker={
      name:'Restuarant',
      lat:$event.coords.lat,
      lng:$event.coords.lng
    }
    console.log(newMarker);
    this.allMarkers.push(newMarker);
    this._data.addMarker(newMarker);
  }
  onDelete(m:marker)
  {
    this.allMarkers.splice(this.allMarkers.indexOf(m),1);
    this._data.removeMarker(m);
  }
}
