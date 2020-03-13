import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediadetailComponent } from './mediadetail.component';

describe('MediadetailComponent', () => {
  let component: MediadetailComponent;
  let fixture: ComponentFixture<MediadetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediadetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
