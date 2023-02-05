import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerUnitComponent } from './server-unit.component';

describe('ServerUnitComponent', () => {
  let component: ServerUnitComponent;
  let fixture: ComponentFixture<ServerUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
