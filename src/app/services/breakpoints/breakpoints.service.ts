import { Injectable } from '@angular/core';
import { Observable, map, combineLatest } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class BreakpointsService {
  private isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(res => res.matches)
    )

  private isTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
      .pipe(
        map(res => res.matches)
      )

  isHandheld$: Observable<boolean> = combineLatest([this.isHandset$, this.isTablet$])
    .pipe(
      map(([a, b]) => a || b)
    )

  constructor(private breakpointObserver: BreakpointObserver) { }
}
