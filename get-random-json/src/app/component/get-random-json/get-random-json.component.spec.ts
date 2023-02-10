import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { GetRandomJsonComponent } from './get-random-json.component';

describe('GetRandomJsonComponent', () => {
  let component: GetRandomJsonComponent;
  let fixture: ComponentFixture<GetRandomJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRandomJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRandomJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
