import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { SharedModule } from '../../shared/shared.module';
import { PatientRoutes } from './patient.routing';

@NgModule({
  declarations: [PatientComponent],
  imports: [CommonModule, SharedModule, PatientRoutes],
})
export class PatientModule {}
