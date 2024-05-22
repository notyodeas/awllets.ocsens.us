import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtnsactionComponent } from './artnsaction.component';

describe('ArtnsactionComponent', () => {
  let component: ArtnsactionComponent;
  let fixture: ComponentFixture<ArtnsactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtnsactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtnsactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
