import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeLogoComponent } from './creative-logo.component';

describe('CreativeLogoComponent', () => {
  let component: CreativeLogoComponent;
  let fixture: ComponentFixture<CreativeLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreativeLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
