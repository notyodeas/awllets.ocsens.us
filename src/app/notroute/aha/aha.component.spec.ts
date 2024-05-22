import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhaComponent } from './aha.component';

describe('AhaComponent', () => {
  let component: AhaComponent;
  let fixture: ComponentFixture<AhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
