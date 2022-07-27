import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@shared/service/auth.guard';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path:'',component:ProductListComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
