import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrancoSharedModule } from 'app/shared';
import {
  NovedadesComponent,
  NovedadesDetailComponent,
  NovedadesUpdateComponent,
  NovedadesDeletePopupComponent,
  NovedadesDeleteDialogComponent,
  novedadesRoute,
  novedadesPopupRoute
} from './';

const ENTITY_STATES = [...novedadesRoute, ...novedadesPopupRoute];

@NgModule({
  imports: [FrancoSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    NovedadesComponent,
    NovedadesDetailComponent,
    NovedadesUpdateComponent,
    NovedadesDeleteDialogComponent,
    NovedadesDeletePopupComponent
  ],
  entryComponents: [NovedadesComponent, NovedadesUpdateComponent, NovedadesDeleteDialogComponent, NovedadesDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrancoNovedadesModule {}
