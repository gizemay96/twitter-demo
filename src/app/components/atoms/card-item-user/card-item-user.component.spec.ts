import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemUserComponent } from './card-item-user.component';

describe('CardItemUserComponent', () => {
  let component: CardItemUserComponent;
  let fixture: ComponentFixture<CardItemUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardItemUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
