import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitListCardComponent } from './twit-list-card.component';

describe('TwitListCardComponent', () => {
  let component: TwitListCardComponent;
  let fixture: ComponentFixture<TwitListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
