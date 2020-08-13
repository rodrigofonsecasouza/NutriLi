import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { TablesComponent } from './pages/tables/tables.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/admin',
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {
      title: 'Home'
    }
  },

  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Error'
    }
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
  // {path: 'typography', component: TypographyComponent},
  // {path: 'maps', component: MapsComponent},
  // {path: 'notifications', component: NotificationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
