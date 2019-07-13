// in order to use this, I need to pull out the bootstrap js. Should only have angular acting on the dom.

import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen
  }

  constructor() { }

}
