import { NgModule } from '@angular/core';
import { InterpolationComponent } from '../interpolation/interpolation.component';
import { InterpolationDetailComponent } from '../interpolation/interpolation-detail.component';
import { ConvertToSpacesPipe } from '../pipes/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { InterpolationDetailGuard } from '../interpolation/interpolation-detail.guard';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [
    InterpolationComponent,
    InterpolationDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'peoples', component: InterpolationComponent },
      { path: 'peoples/:id',
      canActivate: [InterpolationDetailGuard],
      component: InterpolationDetailComponent },
    ]),
    SharedModule,
  ]
})
export class PeopleModule { }
