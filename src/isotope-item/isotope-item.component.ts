import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IsotopeGridComponent } from '../isotope-grid/isotope-grid.component';

@Component({
  selector: 'isotope-item',
  templateUrl: './isotope-item.component.html',
  styleUrls: ['./isotope-item.component.scss']
})
export class IsotopeItemComponent implements AfterViewInit {

  constructor(
      private grid: IsotopeGridComponent,
      public el: ElementRef,
      @Inject(PLATFORM_ID) private platformId: object
  ) { }

  ngAfterViewInit() {
      if (isPlatformBrowser(this.platformId)) {
          this.grid.add(this.el.nativeElement);
      }
  }

}
