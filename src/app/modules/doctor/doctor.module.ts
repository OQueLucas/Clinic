import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { SharedModule } from '../../shared/shared.module';
import { DoctorRoutes } from './doctor.routing';

@NgModule({
  declarations: [DoctorComponent],
  imports: [CommonModule, SharedModule, DoctorRoutes],
})
export class DoctorModule {}
