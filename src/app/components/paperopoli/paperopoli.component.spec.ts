import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperopoliComponent } from './paperopoli.component';

describe('PaperopoliComponent', () => {
  let component: PaperopoliComponent;
  let fixture: ComponentFixture<PaperopoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaperopoliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaperopoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
