export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
export class Map {
  // create a property and add a modifier if necessary
  // anotate the property
  // initialize the property inside of constructor or on the same line
  // ----------------------------------------------------------------
  //type of property googleMap is going to be an instance of class Map
  // a class can be used to create an instance of this class
  // or to be refer to as a type
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  // if you want to be an argument to addMarker you have to be of type Mappable
  addMarker(item: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: item.location.lat,
        lng: item.location.lng,
      },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: item.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
