import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDistrictComponent } from './single-district.component';

describe('SingleDistrictComponent', () => {
  let component: SingleDistrictComponent;
  let fixture: ComponentFixture<SingleDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDistrictComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
