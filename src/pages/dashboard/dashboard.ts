import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,Platform  } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  Marker,
  GoogleMapsEvent,
  Polyline,
  LatLng,
  ILatLng,
  HtmlInfoWindow
} from '@ionic-native/google-maps';
import { LocalNotifications } from '@ionic-native/local-notifications';



/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  map: GoogleMap;
  htmInfoWindow: HtmlInfoWindow;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    private localNotifications: LocalNotifications,private plt: Platform) {
      this.plt.ready().then((readySource) => {
        this.localNotifications.on('click').subscribe(notification => {
          
          this.navCtrl.push("ChatRoomPage")
        })
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.loadMap();
  }
  
  
  
  
  loadMap() {

    // let locations: MarkerOptions[] = [
    //   {"title": "AH-North",animation: 'DROP',  position: {lat: 42.702459,lng: -83.280267},icon: {url: "./assets/imgs/horse.png",size: {width: 30,height: 30}}},
    //   {"title": "AH-South",animation: 'DROP',  position: {lat: 42.644375, lng: -83.241970},icon: {url: "./assets/imgs/horse.png",size: {width: 30,height: 30}}},
    //   {"title": "Troy",animation: 'DROP',  position: {lat: 42.587763, lng: -83.172670 },icon: {url: "./assets/imgs/horse.png",size: {width: 30,height: 30}}}
    // ];
    // let mapOptions: GoogleMapOptions = {
    //   camera: {
    //     target: [
    //       {lat: 42.702459,lng: -83.280267},
    //       {lat: 42.644375, lng: -83.241970},
    //       {lat: 42.587763, lng: -83.172670 }
    //     ],
    //     zoom:11,
    //     tilt: 30
    //   }
    // };

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 42.702459,
           lng: -83.280267
         },
         zoom:11,
         tilt: 30, 
       }  
    };

    

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // this.map.one(GoogleMapsEvent.MAP_READY)
    //   .then(() => {
    //     this.htmInfoWindow =  new HtmlInfoWindow();

    //     // Create markers
    //     let mvcArray: BaseArrayClass<MarkerOptions> = new BaseArrayClass<MarkerOptions>(locations);
    //     mvcArray.mapAsync((markerOpts: MarkerOptions, next: (marker: Marker) => void) => {
    //       this.map.addMarker(markerOpts).then(next);
    //     }).then((markers: Marker[]) => {

    //       // Listen the MARKER_CLICK event on all markers
    //       markers.forEach((marker: Marker) => {
    //         this.htmInfoWindow.open(marker);
    //         marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((parmas: any[]) => {
    //           //this.onMarkerClick(parmas);
    //         });
    //       });
    //     });

    //   });

    
    // Conti Locations
    this.map.addMarker({
      title: 'AH-North',
      icon: {
        url: "./assets/imgs/horse.png",
        size: {
          width: 30,
          height: 30
        }
      },
      animation: 'DROP',
      position: { 
        lat: 42.702459,
        lng: -83.280267
      }
    }).then((marker: Marker) => {
      marker.showInfoWindow();
    });
    
    
    this.map.addMarker({
      title: 'AH-South',
      icon: {
        url: "./assets/imgs/horse.png",
        size: {
          width: 30,
          height: 30
        }
      },
      animation: 'DROP',
      position: { 
        lat: 42.644375, 
        lng: -83.241970
      }
    }).then((marker: Marker) => {
      marker.showInfoWindow();
    });

    this.map.addMarker({
      title: 'Troy',
      icon: {
        url: "./assets/imgs/horse.png",
        size: {
          width: 30,
          height: 30
        }
      },
      animation: 'DROP',
      position: { 
        lat: 42.587763, 
        lng: -83.172670 
      }
    }).then((marker: Marker) => {
      marker.showInfoWindow();
    });

    this.map.addMarker({
      title: 'Harmond',
      icon: {
        url: "./assets/imgs/horse.png",
        size: {
          width: 30,
          height: 30
        }
      },
      animation: 'DROP',
      position: { 
        lat: 42.700109, 
        lng:  -83.260967 
      }
    }).then((marker: Marker) => {
      marker.showInfoWindow();
    });
    this.map.addMarker({
      title: 'Farmington Hills',
      icon: {
        url: "./assets/imgs/horse.png",
        size: {
          width: 30,
          height: 30
        }
      },
      animation: 'DROP',
      position: { 
        lat: 42.491312, 
        lng:  -83.425443
      }
    }).then((marker: Marker) => {
      marker.showInfoWindow();
    });

    //User Locations
    this.map.addMarker({
      title: 'Jack  2/4',
      icon: {
        url: "./assets/imgs/Jack.png",
        size: {
          width: 30,
          height: 30
        }
      },
      animation: 'DROP',
      position: { 
        lat:42.804809, 
        lng:-83.269967 
      }
    }).then((marker: Marker) => {
      marker.showInfoWindow();
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((parmas: any[]) => {
        this.showConfirm("Jack")
       });
    });

    this.map.addMarker({
      title: 'Ayo  0/4',
      icon: {
        url: "./assets/imgs/Ayo.png",
        size: {
          width: 30,
          height: 30
        }
      },
      animation: 'DROP',
      position: { 
        lat:42.726144, 
        lng:-83.366253 
      }
    }).then((marker: Marker) => {
      marker.showInfoWindow();
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((parmas: any[]) => {
        this.showConfirm("Ayo")
       });
    });

    this.map.addMarker({
      title: 'Joe  4/4',
      icon: {
        url: "./assets/imgs/Joe.png",
        size: {
          width: 30,
          height: 30
        }
      },
      animation: 'DROP',
      position: { 
        lat:42.753780, 
        lng:-83.143664 
      }
    }).then((marker: Marker) => {
      marker.showInfoWindow();
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((parmas: any[]) => {
        this.showConfirm("Joe")
       });
    });

    this.map.addMarker({
      title: 'Sreeram  3/4',
      icon: {
        url: "./assets/imgs/Sreeram.png",
        size: {
          width: 30,
          height: 30
        }
      },
      animation: 'DROP',
      position: { 
        lat:42.673437, 
        lng:-83.364038 
      }
    }).then((marker: Marker) => {
      marker.showInfoWindow();
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((parmas: any[]) => {
       this.showConfirm("Sreeram")
      });
    });

    this.map.addMarker({
      title: 'Girl1  1/4',
      icon: {
        url: "./assets/imgs/female1.jpg",
        size: {
          width: 30,
          height: 30
        }
      },
      animation: 'DROP',
      position: { 
        lat:42.779072,
         lng:-83.189462
      }
    }).then((marker: Marker) => {
      marker.showInfoWindow();
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((parmas: any[]) => {
       this.showConfirm("Girl1")
      });
    });

    this.map.addMarker({
      title: 'Girl2  4/4',
      icon: {
        url: "./assets/imgs/female2.jpg",
        size: {
          width: 30,
          height: 30
        }
      },
      animation: 'DROP',
      position: { 
        lat:42.772438,
        lng:-83.353942
      }
    }).then((marker: Marker) => {
      marker.showInfoWindow();
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((parmas: any[]) => {
       this.showConfirm("Girl2")
      });
    });

    this.map.addMarker({
      title: 'Girl2  3/4',
      icon: {
        url: "./assets/imgs/female3.jpg",
        size: {
          width: 30,
          height: 30
        }
      },
      animation: 'DROP',
      position: { 
        lat:42.635628,
        lng:-83.366595
      }
    }).then((marker: Marker) => {
      marker.showInfoWindow();
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((parmas: any[]) => {
       this.showConfirm("Girl3")
      });
    });

    
    // yourLocation.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
    //   alert('clicked');
    // });
    let Jack_loc: ILatLng = {lat:42.804809, lng:-83.269967} 
    let Ayo_loc: ILatLng = {lat:42.726144, lng:-83.366253}
    let Joe_loc: ILatLng = {lat:42.753780, lng:-83.143664} 
    let Sreeram_loc: ILatLng = {lat:42.673437, lng:-83.364038}
    let girl1_loc: ILatLng = {lat:42.779072, lng:-83.189462}
    let girl2_loc: ILatLng = {lat:42.772438, lng:-83.353942}
    let girl3_loc: ILatLng = {lat:42.635628, lng:-83.366595}

    let AB_North: ILatLng = {lat: 42.702459, lng: -83.280267};
    let AB_South: ILatLng = {lat: 42.644375, lng: -83.241970};
    let Troy: ILatLng = {lat: 42.587763, lng: -83.172670};
    let Harmond: ILatLng = {lat: 42.700109, lng: -83.260967}
    let Farmington: ILatLng = {lat: 42.491312, lng: -83.425443}


    let Jack_Path: ILatLng[] = [
      Jack_loc,
      AB_North
    ];
    let Ayo_Path: ILatLng[] = [
      Ayo_loc,
      AB_South
    ];
    let Girl1_Path: ILatLng[] = [
      girl1_loc,
      AB_South
    ];
    let Girl2_Path: ILatLng[] = [
      girl2_loc,
      Harmond
    ];
    let Girl3_Path: ILatLng[] = [
      girl3_loc,
      Farmington
    ];
    let Girl4_Path: ILatLng[] = [
      girl3_loc,
      Troy
    ];
    let Joe_Path: ILatLng[] = [
      Joe_loc,
      Troy
    ];
    let Sreeram_path: ILatLng[] = [
      Sreeram_loc,
      AB_North
    ];

    this.map.addPolyline({
      points: Jack_Path,
      color: '#000000',
      width: 1,
      geodesic: true,
      clickable: true  // clickable = false in default
    }).then((polyline: Polyline) => {
      polyline.on(GoogleMapsEvent.POLYLINE_CLICK).subscribe((params: any) => {
        let position: LatLng = <LatLng>params[0];
        this.map.addMarker({
          position: position,
          title: position.toUrlValue(),
          disableAutoPan: true
        }).then((marker: Marker) => {
          marker.showInfoWindow();
        });
      });
    });

    this.map.addPolyline({
      points: Ayo_Path,
      color: '#000000',
      width: 1,
      geodesic: true,
      clickable: true  // clickable = false in default
    }).then((polyline: Polyline) => {
      polyline.on(GoogleMapsEvent.POLYLINE_CLICK).subscribe((params: any) => {
        let position: LatLng = <LatLng>params[0];
        this.map.addMarker({
          position: position,
          title: position.toUrlValue(),
          disableAutoPan: true
        }).then((marker: Marker) => {
          marker.showInfoWindow();
        });
      });
    });

    this.map.addPolyline({
      points: Girl1_Path,
      color: '#000000',
      width: 1,
      geodesic: true,
      clickable: true  // clickable = false in default
    }).then((polyline: Polyline) => {
      polyline.on(GoogleMapsEvent.POLYLINE_CLICK).subscribe((params: any) => {
        let position: LatLng = <LatLng>params[0];
        this.map.addMarker({
          position: position,
          title: position.toUrlValue(),
          disableAutoPan: true
        }).then((marker: Marker) => {
          marker.showInfoWindow();
        });
      });
    });

    this.map.addPolyline({
      points: Girl2_Path,
      color: '#000000',
      width: 1,
      geodesic: true,
      clickable: true  // clickable = false in default
    }).then((polyline: Polyline) => {
      polyline.on(GoogleMapsEvent.POLYLINE_CLICK).subscribe((params: any) => {
        let position: LatLng = <LatLng>params[0];
        this.map.addMarker({
          position: position,
          title: position.toUrlValue(),
          disableAutoPan: true
        }).then((marker: Marker) => {
          marker.showInfoWindow();
        });
      });
    });

    this.map.addPolyline({
      points: Girl3_Path,
      color: '#000000',
      width: 1,
      geodesic: true,
      clickable: true  // clickable = false in default
    }).then((polyline: Polyline) => {
      polyline.on(GoogleMapsEvent.POLYLINE_CLICK).subscribe((params: any) => {
        let position: LatLng = <LatLng>params[0];
        this.map.addMarker({
          position: position,
          title: position.toUrlValue(),
          disableAutoPan: true
        }).then((marker: Marker) => {
          marker.showInfoWindow();
        });
      });
    });

    this.map.addPolyline({
      points: Girl4_Path,
      color: '#000000',
      width: 1,
      geodesic: true,
      clickable: true  // clickable = false in default
    }).then((polyline: Polyline) => {
      polyline.on(GoogleMapsEvent.POLYLINE_CLICK).subscribe((params: any) => {
        let position: LatLng = <LatLng>params[0];
        this.map.addMarker({
          position: position,
          title: position.toUrlValue(),
          disableAutoPan: true
        }).then((marker: Marker) => {
          marker.showInfoWindow();
        });
      });
    });

    this.map.addPolyline({
      points: Joe_Path,
      color: '#000000',
      width: 1,
      geodesic: true,
      clickable: true  // clickable = false in default
    }).then((polyline: Polyline) => {
      polyline.on(GoogleMapsEvent.POLYLINE_CLICK).subscribe((params: any) => {
        let position: LatLng = <LatLng>params[0];
        this.map.addMarker({
          position: position,
          title: position.toUrlValue(),
          disableAutoPan: true
        }).then((marker: Marker) => {
          marker.showInfoWindow();
        });
      });
    });

    this.map.addPolyline({
      points: Sreeram_path,
      color: '#000000',
      width: 1,
      geodesic: true,
      clickable: true  // clickable = false in default
    }).then((polyline: Polyline) => {
      polyline.on(GoogleMapsEvent.POLYLINE_CLICK).subscribe((params: any) => {
        let position: LatLng = <LatLng>params[0];
        this.map.addMarker({
          position: position,
          title: position.toUrlValue(),
          disableAutoPan: true
        }).then((marker: Marker) => {
          marker.showInfoWindow();
        });
      });
    });
  }

  showConfirm(name) {
    const confirm = this.alertCtrl.create({
      title: 'Confirm Ride',
      message: 'Do you want to ride with '+name+' ?',
      buttons: [
        {
          text: 'Nah',
          handler: () => {
           alert("You can check for other users")
          }
        },
        {
          text: 'Yeah',
          handler: () => {
            this.localNotifications.schedule({
              id: 1,
              text: name + ' has requested to ride with you'
            })
            ;
            alert("Your request has been sent to "+name)
          }
        }
      ]
    });
    confirm.present();
  }

}
