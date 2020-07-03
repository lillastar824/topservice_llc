import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GetQuoteComponent } from "./get-quote/get-quote.component";
import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { CupidComponent } from "./cupid/cupid.component";
import { SufferComponent } from "./suffer/suffer.component";
import { DietComponent } from "./diet/diet.component";
import { BoltComponent } from "./bolt/bolt.component";
import { LyricalComponent } from "./lyrical/lyrical.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { title: "Top Service" },
    pathMatch: "full"
  },
  {
    path: "get-quote",
    component: GetQuoteComponent,
    data: { title: "Top Service - Get Quote" },
    pathMatch: "full"
  },
  {
    path: "portfolio",
    component: PortfolioComponent,
    data: { title: "Top Service - Portfolios" },
    pathMatch: "full"
  },
  {
    path: "bolt",
    component: BoltComponent,
    data: { title: "Top Service - Portfolios" },
    pathMatch: "full"
  },
  {
    path: "lyrical",
    component: LyricalComponent,
    data: { title: "Top Service - Portfolios" },
    pathMatch: "full"
  },
  {
    path: "cupid",
    component: CupidComponent,
    data: { title: "Top Service - Portfolios" },
    pathMatch: "full"
  },
  {
    path: "suffer",
    component: SufferComponent,
    data: { title: "Top Service - Portfolios" },
    pathMatch: "full"
  },
  {
    path: "diet",
    component: DietComponent,
    data: { title: "Top Service - Portfolios" },
    pathMatch: "full"
  },
  {
    path: "about",
    component: AboutComponent,
    data: { title: "Top Service - About" },
    pathMatch: "full"
  },
  {
    path: "contact",
    component: ContactComponent,
    data: { title: "Top Service - Contact" },
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
