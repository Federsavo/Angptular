import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PippoNeiGuaiComponent } from './pippo-nei-guai.component';

describe('PippoNeiGuaiComponent', () => {
  let component: PippoNeiGuaiComponent;
  let fixture: ComponentFixture<PippoNeiGuaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PippoNeiGuaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PippoNeiGuaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
