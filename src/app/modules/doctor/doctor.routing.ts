import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorComponent,
    children: [],
  },
];

export const DoctorRoutes = RouterModule.forChild(routes);
