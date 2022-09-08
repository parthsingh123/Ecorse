import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllStudentsComponent } from './get-all-students.component';

describe('GetAllStudentsComponent', () => {
  let component: GetAllStudentsComponent;
  let fixture: ComponentFixture<GetAllStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
