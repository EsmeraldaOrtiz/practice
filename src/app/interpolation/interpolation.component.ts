import { Component, OnInit } from '@angular/core';
import { IPeople } from './interpolation';
import { InterpolationService } from './interpolation.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css', './interpolation-list.component.css']
})
export class InterpolationComponent implements OnInit {
Var: string = 'Hola!';
imaWidth: number = 50;
imaMargin: number = 2;
showIma: boolean = false;
errorMessage: string;

_listFilter: string;
  pageTitle: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredPeople = this.listFilter ? this.performFilter(this.listFilter) : this.peoples;
  }
message: string;

filteredPeople: IPeople[];

peoples: IPeople[] = [
{
"id": 1,
"numId" : "MI0-001",
"name" : "Mario Bustos",
"job" : "Ingeniero",
"company" : "ARRIS",
"ima" : "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/29597383_10211549230263212_466270243610504872_n.jpg?_nc_cat=101&_nc_ht=scontent-lax3-1.xx&oh=ccfc4a5eb57c78cfcb356d501a4d3549&oe=5D7F3C95",
"sal" : 28000,
"starRating" : 3
},

{
  "id": 2,
  "numId" : "FL0-002",
  "name" : "Esmeralda Ortiz",
  "job" : "Practicante",
  "company" : "ARRIS",
  "ima" : "http://eslamoda.com/wp-content/uploads/sites/2/2016/01/girasoless.jpg",
  "sal" : 8000,
  "starRating" : 2.5
  },

  {
    "id": 3,
    "numId" : "ML0-003",
    "name" : "Daniel Rodriguez",
    "job" : "Practicante",
    "company" : "ARRIS",
    "ima" : "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/60884371_10156296486261794_2198857989505417216_n.jpg?_nc_cat=101&_nc_ht=scontent-lax3-1.xx&oh=33e723190d2e3d7d523f2e587a52f050&oe=5D877E46",
    "sal" : 8000,
    "starRating" : 3
    }
]

constructor(private interpolationService: InterpolationService){
  this.filteredPeople = this.peoples;
  this.listFilter = '';
}

performFilter(filterBy: string): IPeople[] {
  filterBy = filterBy.toLocaleLowerCase();
  return this.peoples.filter((people: IPeople) =>
  people.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

toggleIma(): void {
  this.showIma = !this.showIma;
}

onRatingClicked(message: string): void{
  this.pageTitle = 'Team List: ' + message;
}

ngOnInit(): void{
  this.interpolationService.getPeoples().subscribe(
  peoples => {
    this.peoples = peoples;
    this.filteredPeople = this.peoples;
  },
  error => this.errorMessage = <any>error
  );
}

}