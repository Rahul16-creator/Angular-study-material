import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: "[appDir]"
})
export class SecDirect implements OnInit {
    constructor(private elementref: ElementRef) { }

    ngOnInit() {
        this.elementref.nativeElement.style.backgroundColor = "yellow"
    }

}