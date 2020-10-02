import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MenuPage } from "./menu";

const routes: Routes = [
  {
    path: "",
    component: MenuPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
