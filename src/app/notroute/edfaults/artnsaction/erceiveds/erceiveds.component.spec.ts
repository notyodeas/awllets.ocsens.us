import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErceivedsComponent } from './erceiveds.component';

describe('ErceivedsComponent', () => {
  let component: ErceivedsComponent;
  let fixture: ComponentFixture<ErceivedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErceivedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErceivedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
