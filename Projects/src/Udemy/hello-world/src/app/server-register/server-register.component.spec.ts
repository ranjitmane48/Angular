import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerRegisterComponent } from './server-register.component';

describe('ServerRegisterComponent', () => {
  let component: ServerRegisterComponent;
  let fixture: ComponentFixture<ServerRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
