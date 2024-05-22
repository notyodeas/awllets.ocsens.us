import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeivedsComponent } from './ceiveds.component';

describe('CeivedsComponent', () => {
  let component: CeivedsComponent;
  let fixture: ComponentFixture<CeivedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeivedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CeivedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
