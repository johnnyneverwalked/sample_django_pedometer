import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from "./pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule)
      },
      {
        path: "steps",
        loadChildren: () => import("./pages/steps/steps.module").then(m => m.StepsModule)
      }
    ]
  },
  {path: "**", component: NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
