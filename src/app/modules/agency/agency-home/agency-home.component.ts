import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-agency-home',
  templateUrl: './agency-home.component.html',
  styleUrls: ['./agency-home.component.scss']
})
export class AgencyHomeComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
      setTimeout( ()=>{
        this.router.navigate(['/agency/list']);
      },2000
    )

  }

}
