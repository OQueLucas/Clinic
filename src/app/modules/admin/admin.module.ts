import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../../shared/shared.module';
import { AdminRoutes } from './admin.routing';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, SharedModule, AdminRoutes],
})
export class AdminModule {}
