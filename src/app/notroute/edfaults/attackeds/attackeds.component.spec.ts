import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackedsComponent } from './attackeds.component';

describe('AttackedsComponent', () => {
  let component: AttackedsComponent;
  let fixture: ComponentFixture<AttackedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttackedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttackedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
