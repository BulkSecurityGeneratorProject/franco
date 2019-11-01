import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrancoSharedModule } from 'app/shared';
import {
  QRComponent,
  QRDetailComponent,
  QRUpdateComponent,
  QRDeletePopupComponent,
  QRDeleteDialogComponent,
  qRRoute,
  qRPopupRoute
} from './';

const ENTITY_STATES = [...qRRoute, ...qRPopupRoute];

@NgModule({
  imports: [FrancoSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [QRComponent, QRDetailComponent, QRUpdateComponent, QRDeleteDialogComponent, QRDeletePopupComponent],
  entryComponents: [QRComponent, QRUpdateComponent, QRDeleteDialogComponent, QRDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrancoQRModule {}
