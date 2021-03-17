import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appFigurePage]'
})
export class FigurePageDirective {

  constructor(private el: ElementRef, private r: Renderer2) { }

  @HostListener('click') onClick(): void
  {
    this.r.setStyle(this.el.nativeElement, 'color', '#f00');
  }
}
