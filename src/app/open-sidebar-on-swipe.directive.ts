import { Directive, HostBinding, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Directive({
  selector: '[appOpenSidebarOnSwipe]'
})

export class OpenSidebarOnSwipeDirective {
@HostBinding('style.width') width;
@Output() setWidth: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    console.log('directive');

  }
  ngAfterViewInit(){
    this.setWidth.emit(80);
  }

}
