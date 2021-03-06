import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrancoSharedModule } from 'app/shared';
import {
  DetalleEventoComponent,
  DetalleEventoDetailComponent,
  DetalleEventoUpdateComponent,
  DetalleEventoDeletePopupComponent,
  DetalleEventoDeleteDialogComponent,
  detalleEventoRoute,
  detalleEventoPopupRoute
} from './';

const ENTITY_STATES = [...detalleEventoRoute, ...detalleEventoPopupRoute];

@NgModule({
  imports: [FrancoSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    DetalleEventoComponent,
    DetalleEventoDetailComponent,
    DetalleEventoUpdateComponent,
    DetalleEventoDeleteDialogComponent,
    DetalleEventoDeletePopupComponent
  ],
  entryComponents: [
    DetalleEventoComponent,
    DetalleEventoUpdateComponent,
    DetalleEventoDeleteDialogComponent,
    DetalleEventoDeletePopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrancoDetalleEventoModule {}
