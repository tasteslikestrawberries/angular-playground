import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodTestComponent } from './zod-test.component';

describe('ZodTestComponent', () => {
  let component: ZodTestComponent;
  let fixture: ComponentFixture<ZodTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZodTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZodTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
