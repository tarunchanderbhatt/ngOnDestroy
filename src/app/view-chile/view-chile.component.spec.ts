import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChileComponent } from './view-chile.component';

describe('ViewChileComponent', () => {
  let component: ViewChileComponent;
  let fixture: ComponentFixture<ViewChileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
