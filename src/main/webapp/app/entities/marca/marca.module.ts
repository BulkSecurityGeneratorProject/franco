import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrancoSharedModule } from 'app/shared';
import {
  MarcaComponent,
  MarcaDetailComponent,
  MarcaUpdateComponent,
  MarcaDeletePopupComponent,
  MarcaDeleteDialogComponent,
  marcaRoute,
  marcaPopupRoute
} from './';

const ENTITY_STATES = [...marcaRoute, ...marcaPopupRoute];

@NgModule({
  imports: [FrancoSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [MarcaComponent, MarcaDetailComponent, MarcaUpdateComponent, MarcaDeleteDialogComponent, MarcaDeletePopupComponent],
  entryComponents: [MarcaComponent, MarcaUpdateComponent, MarcaDeleteDialogComponent, MarcaDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrancoMarcaModule {}
