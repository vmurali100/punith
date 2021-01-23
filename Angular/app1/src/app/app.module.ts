import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PunitComponent } from './punit/punit.component';
import { ParentComponent } from './Parent2Child/parent/parent.component';
import { ChildComponent } from './Parent2Child/child/child.component';
import { Parent1Component } from './Child2Parent/parent1/parent1.component';
import { Child1Component } from './Child2Parent/child1/child1.component';
import { Comp1Component } from './Comp2Comp/comp1/comp1.component';
import { Comp2Component } from './Comp2Comp/comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    PunitComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    Comp1Component,
    Comp2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
