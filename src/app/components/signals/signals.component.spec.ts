import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsComponent } from './signals.component';
import { HttpClientModule } from '@angular/common/http';

describe('SignalsComponent', () => {
  let component: SignalsComponent;
  let fixture: ComponentFixture<SignalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalsComponent],
      providers: [HttpClientModule],
    });
    fixture = TestBed.createComponent(SignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
