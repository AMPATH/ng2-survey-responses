import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralResponsesComponent } from './general-responses.component';

describe('GeneralResponsesComponent', () => {
  let component: GeneralResponsesComponent;
  let fixture: ComponentFixture<GeneralResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralResponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
