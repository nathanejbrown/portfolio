import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeTextComponent } from './large-text.component';

describe('LargeTextComponent', () => {
  let component: LargeTextComponent;
  let fixture: ComponentFixture<LargeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
