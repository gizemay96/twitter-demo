import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarCardComponent } from './side-bar-card.component';

describe('SideBarCardComponent', () => {
  let component: SideBarCardComponent;
  let fixture: ComponentFixture<SideBarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
