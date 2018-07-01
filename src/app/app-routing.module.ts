import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import { ShareComponent } from './share/share.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [MetaGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          meta: {
            title: 'Sweet home',
            description: 'Home, home sweet home... and what?'
          }
        }
      },
      {
        path: 'share/:id',
        component: ShareComponent,
        data: {
          meta: {
            title: 'Rubber duckie',
            description: 'Have you seen my rubber duckie?'
          }
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
