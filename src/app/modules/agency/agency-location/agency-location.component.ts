import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Mapboxgl from 'mapbox-gl'
import { IItemAgency } from 'src/app/shared/components/item/item-agency/iitem-agency.metadata';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-agency-location',
  templateUrl: './agency-location.component.html',
  styleUrls: ['./agency-location.component.scss']
})
export class AgencyLocationComponent implements OnInit {

  public agencies: IItemAgency[] = JSON.parse(localStorage.getItem('agencies'));
  public currentAgency: IItemAgency;
  public id: number;

  constructor(private route: ActivatedRoute
    ) { 
      this.id = this.route.snapshot.params.id; }

  map: Mapboxgl.Map;

  ngOnInit() {

    this.currentAgency = this.agencies.find(agency => agency.id === +this.id)
    
    Mapboxgl.accessToken = environment.mapboxKey;
  
    this.map = new Mapboxgl.Map({
      container: 'map-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.currentAgency.lat,this.currentAgency.lon],
      zoom: 16
      });

      this.makeMarker(this.currentAgency.lat,this.currentAgency.lon);

  }

  makeMarker (lat: number, lon: number) {
    const marker = new Mapboxgl.Marker({
      dragable: true
    })
    .setLngLat([lat, lon])
    .addTo(this.map)
  }

}
