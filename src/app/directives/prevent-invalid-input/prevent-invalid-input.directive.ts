import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appPreventInvalidInput]',
})
export class PreventInvalidInputDirective {
  private beforeValue?: string;

  pattern = input.required<RegExp, string>({
    alias: 'appPreventInvalidInput',
    transform: pattern => new RegExp(pattern),
  });

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('beforeinput') onBeforeInput() {
    this.beforeValue = this.el.nativeElement.value;
  }

  @HostListener('input', ['$event.target']) onInput(input: HTMLInputElement) {
    console.log(this.pattern());
    console.log(
      `"${input.value}" matches: ${this.pattern().test(input.value)}`,
    );
    if (this.pattern().test(input.value)) return;

    this.el.nativeElement.value = this.beforeValue ?? '';
  }
}
