import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrancoSharedModule } from 'app/shared';
import {
  SeguroComponent,
  SeguroDetailComponent,
  SeguroUpdateComponent,
  SeguroDeletePopupComponent,
  SeguroDeleteDialogComponent,
  seguroRoute,
  seguroPopupRoute
} from './';

const ENTITY_STATES = [...seguroRoute, ...seguroPopupRoute];

@NgModule({
  imports: [FrancoSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [SeguroComponent, SeguroDetailComponent, SeguroUpdateComponent, SeguroDeleteDialogComponent, SeguroDeletePopupComponent],
  entryComponents: [SeguroComponent, SeguroUpdateComponent, SeguroDeleteDialogComponent, SeguroDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrancoSeguroModule {}
