import { Component, OnInit } from '@angular/core';
import { IPeople } from './interpolation';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-interpolation-detail',
  templateUrl: './interpolation-detail.component.html',
  styleUrls: ['./interpolation-detail.component.css']
})

export class InterpolationDetailComponent implements OnInit { 
  pageTitle: string = 'People Detail';
  people: IPeople;
  
  constructor(private route: ActivatedRoute,
              private router: Router) { }
              
    ngOnInit() {
      let id = +this.route.snapshot.paramMap.get('id');
      this.pageTitle += `: ${id}`;
      this.people =
        {
        "id": 1,
        "numId" : "MI0-001",
        "name" : "Mario Bustos",
        "job" : "Ingeniero",
        "company" : "ARRIS",
        "ima" : "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/29597383_10211549230263212_466270243610504872_n.jpg?_nc_cat=101&_nc_ht=scontent-lax3-1.xx&oh=ccfc4a5eb57c78cfcb356d501a4d3549&oe=5D7F3C95",
        "sal" : 28000,
        "starRating": 5
        },
        
        {
          "id": 2,
          "numId" : "FL0-002",
          "name" : "Esmeralda Ortiz",
          "job" : "Practicante",
          "company" : "ARRIS",
          "ima" : "http://eslamoda.com/wp-content/uploads/sites/2/2016/01/girasoless.jpg",
          "sal" : 8000,
          "starRating": 3.8
          },
        
          {
            "id": 3,
            "numId" : "ML0-003",
            "name" : "Daniel Rodriguez",
            "job" : "Practicante",
            "company" : "ARRIS",
            "ima" : "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/60884371_10156296486261794_2198857989505417216_n.jpg?_nc_cat=101&_nc_ht=scontent-lax3-1.xx&oh=33e723190d2e3d7d523f2e587a52f050&oe=5D877E46",
            "sal" : 8000,
            "starRating": 4.2
            }
    }
  
onBack(): void {
  this.router.navigate(['/peoples']);
}

  }
  