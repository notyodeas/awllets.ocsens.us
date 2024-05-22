import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcimedsComponent } from './alcimeds.component';

describe('AlcimedsComponent', () => {
  let component: AlcimedsComponent;
  let fixture: ComponentFixture<AlcimedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlcimedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlcimedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
