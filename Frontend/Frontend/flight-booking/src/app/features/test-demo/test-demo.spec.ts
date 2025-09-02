import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDemo } from './test-demo';

describe('TestDemo', () => {
  let component: TestDemo;
  let fixture: ComponentFixture<TestDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
