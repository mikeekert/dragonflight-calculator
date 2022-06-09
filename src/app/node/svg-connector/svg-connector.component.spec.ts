import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgConnectorComponent } from './svg-connector.component';

describe('SvgConnectorComponent', () => {
  let component: SvgConnectorComponent;
  let fixture: ComponentFixture<SvgConnectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgConnectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
