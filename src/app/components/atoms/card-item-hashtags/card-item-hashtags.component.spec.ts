import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemHashtagsComponent } from './card-item-hashtags.component';

describe('CardItemHashtagsComponent', () => {
  let component: CardItemHashtagsComponent;
  let fixture: ComponentFixture<CardItemHashtagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardItemHashtagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemHashtagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
