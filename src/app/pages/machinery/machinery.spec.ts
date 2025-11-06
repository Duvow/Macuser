import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Machinery } from './machinery';

describe('Machinery', () => {
  let component: Machinery;
  let fixture: ComponentFixture<Machinery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Machinery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Machinery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
