import { AuthorComponent } from './author/author.component';
import { QuoteComponent } from './quote/quote.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbdTableComplete } from './table/table-complete'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'quotes',component:QuoteComponent},
    {path:'author',component:AuthorComponent},
    {path:'table',component:NgbdTableComplete},
    
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
