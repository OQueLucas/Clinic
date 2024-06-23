import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutes],
})
export class AuthModule {}
