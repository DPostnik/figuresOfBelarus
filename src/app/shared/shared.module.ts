import {NgModule} from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { FigurePageDirective } from './directives/figure-page.directive';

@NgModule(
  {
    imports: [HttpClientModule],
    exports: [FilterSearchPipe, HttpClientModule, FigurePageDirective],
    declarations: [FilterSearchPipe, FigurePageDirective],
    providers: []
  }
)
export class SharedModule
{

}
