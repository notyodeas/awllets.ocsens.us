import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnticeedsComponent } from './anticeeds.component';

describe('AnticeedsComponent', () => {
  let component: AnticeedsComponent;
  let fixture: ComponentFixture<AnticeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnticeedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnticeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
