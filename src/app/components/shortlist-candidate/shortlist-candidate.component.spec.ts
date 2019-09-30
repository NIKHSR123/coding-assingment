import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistCandidateComponent } from './shortlist-candidate.component';

describe('ShortlistCandidateComponent', () => {
  let component: ShortlistCandidateComponent;
  let fixture: ComponentFixture<ShortlistCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortlistCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlistCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
