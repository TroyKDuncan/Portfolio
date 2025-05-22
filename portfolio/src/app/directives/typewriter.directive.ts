import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTypewriter]',
  standalone: true
})
export class TypewriterDirective implements OnInit {
  @Input('appTypewriter') text: string = '';
  @Input() speed: number = 60; // ms per character

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.typeText();
  }

  async typeText() {
    this.el.nativeElement.textContent = '';
    for (let i = 0; i < this.text.length; i++) {
      this.el.nativeElement.textContent += this.text.charAt(i);
      await new Promise(res => setTimeout(res, this.speed));
    }
  }
}