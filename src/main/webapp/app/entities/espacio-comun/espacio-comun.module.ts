import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrancoSharedModule } from 'app/shared';
import {
  EspacioComunComponent,
  EspacioComunDetailComponent,
  EspacioComunUpdateComponent,
  EspacioComunDeletePopupComponent,
  EspacioComunDeleteDialogComponent,
  espacioComunRoute,
  espacioComunPopupRoute
} from './';

const ENTITY_STATES = [...espacioComunRoute, ...espacioComunPopupRoute];

@NgModule({
  imports: [FrancoSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    EspacioComunComponent,
    EspacioComunDetailComponent,
    EspacioComunUpdateComponent,
    EspacioComunDeleteDialogComponent,
    EspacioComunDeletePopupComponent
  ],
  entryComponents: [
    EspacioComunComponent,
    EspacioComunUpdateComponent,
    EspacioComunDeleteDialogComponent,
    EspacioComunDeletePopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrancoEspacioComunModule {}
