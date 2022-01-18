import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformNewComponent } from './reactiveform-new.component';

describe('ReactiveformNewComponent', () => {
  let component: ReactiveformNewComponent;
  let fixture: ComponentFixture<ReactiveformNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
