import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: "[appHighDirect]"
})
export class HighDirect implements OnInit {

    @Input('mouseOver') mouseOver:string='blue';
    @Input('mouseLeave') mouseLeave:string='orange';
    constructor(private renderer: Renderer2, private elementRef: ElementRef) { }
    
    ngOnInit() {
        // this.renderer.setStyle(this.elementRef.nativeElement, "backgroundColor", "orange")
    }

    @HostListener('mouseenter') mouseover() {
        this.renderer.setStyle(this.elementRef.nativeElement, "backgroundColor", this.mouseOver)
    }

    @HostListener('mouseleave') mouseleave() {
        this.renderer.setStyle(this.elementRef.nativeElement, "backgroundColor", this.mouseLeave)
    }
}