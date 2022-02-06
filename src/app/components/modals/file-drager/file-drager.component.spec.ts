import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDragerComponent } from './file-drager.component';

describe('FileDragerComponent', () => {
  let component: FileDragerComponent;
  let fixture: ComponentFixture<FileDragerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileDragerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDragerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
