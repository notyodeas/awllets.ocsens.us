import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdfaultsComponent } from './edfaults.component';

describe('EdfaultsComponent', () => {
  let component: EdfaultsComponent;
  let fixture: ComponentFixture<EdfaultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdfaultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdfaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
