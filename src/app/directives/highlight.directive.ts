import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
// Add this Directive to the declarations
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  @Input() defaultColor: string = 'transparent';
  @Input('appHighlight') highlightColor: string = 'blue';
  ngOnInit() {
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
 
  @HostBinding('style.backgroundColor')
  backgroundColor!: string;

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
