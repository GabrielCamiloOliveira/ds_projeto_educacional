import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDificuldadeComponent } from './menu-dificuldade.component';

describe('MenuDificuldadeComponent', () => {
  let component: MenuDificuldadeComponent;
  let fixture: ComponentFixture<MenuDificuldadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuDificuldadeComponent]
    });
    fixture = TestBed.createComponent(MenuDificuldadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
