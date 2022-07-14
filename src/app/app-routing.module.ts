import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'login', component: LogInComponent },
  { path: 'products', loadChildren: () => import("./components/properties/product.module").then(m => m.ProductModule),canActivate:[AuthGuard] },
  { path: '**', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
