import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMediaComponent } from './my-media.component';

describe('MyMediaComponent', () => {
  let component: MyMediaComponent;
  let fixture: ComponentFixture<MyMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
