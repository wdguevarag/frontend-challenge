import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AGENCIES } from 'src/app/data/constants/agencies.const';
import { IItemAgency } from 'src/app/shared/components/item/item-agency/iitem-agency.metadata';

@Component({
  selector: 'app-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss']
})
export class AgencyDetailComponent implements OnInit {

  public agencies: IItemAgency[] = JSON.parse(localStorage.getItem('agencies'));
  public currentAgency: IItemAgency;
  public id: number;

  public ifAlert: boolean = false;

  public agencyForm: {
    agency: {
      val: string,
      error: string,
      isValid: () => boolean
    },
    address: {
      val: string,
      error: string,
      isValid: () => boolean
    },
    district: {
      val: string,
      error: string,
      isValid: () => boolean
    },
    lat: {
      val: number,
      error: string,
      isValid: () => boolean
    },
    lon: {
      val: number,
      error: string,
      isValid: () => boolean
    }
  }

  constructor(
    private route: ActivatedRoute
  ) { 
    this.id = this.route.snapshot.params.id;

    this.agencyForm = {
      agency: {
        val: '',
        error: '*Es requerido',
        isValid() {
          return (this.val.length > 0)
        }        
      },
      address: {
          val: '',
          error: '*Es requerido',
          isValid() {
            return (this.val.length > 0)
          }
      },
      district: {
          val: '',
          error: '*Es requerido',
          isValid() {
            return (this.val.length > 0)
          }
      },
      lat: {
          val: 0,
          error: '*Es requerido',
          isValid() {
            return true
          }
      },
      lon: {
          val: 0,
          error: '*Es requerido',
          isValid() {
            return true
          }
      }
    }

  }

  get isValidForm() {
    return (this.agencyForm.agency.isValid() && this.agencyForm.address.isValid() && this.agencyForm.district.isValid()
        && this.agencyForm.lat.isValid()  && this.agencyForm.lon.isValid());
  }

  ngOnInit() {
    this.currentAgency = this.agencies.find(agency => agency.id === +this.id)

    if(this.currentAgency) {
      this.agencyForm.agency.val = this.currentAgency.agencia;
      this.agencyForm.address.val = this.currentAgency.direccion;
      this.agencyForm.district.val = this.currentAgency.distrito;
      this.agencyForm.lat.val = this.currentAgency.lat;
      this.agencyForm.lon.val = this.currentAgency.lon;
    }
  }

  updateAction() {
    let actualAgencies = this.agencies;
    
    let newArray = actualAgencies.map(item => {
      if(+item.id === +this.id) {
        return {
          ...item, 
          agencia: this.agencyForm.agency.val,
          direccion: this.agencyForm.address.val,
          distrito: this.agencyForm.district.val,
          lat: this.agencyForm.lat.val,
          lon: this.agencyForm.lon.val
        }
      }
      else {
        return item;
      }
    })

    if(!this.currentAgency) {
      this.currentAgency = {
        id: +this.id, 
        agencia: this.agencyForm.agency.val,
        departamento: 'Lima',
        provincia: 'Lima',
        direccion: this.agencyForm.address.val,
        distrito: this.agencyForm.district.val,
        lat: 0,
        lon: 0
      }
      newArray.push(this.currentAgency)
    }

    localStorage.setItem('agencies', JSON.stringify(newArray))
    
    this.ifAlert = true;

    setTimeout(()=>{this.ifAlert = false;}, 1500)

  }

}
