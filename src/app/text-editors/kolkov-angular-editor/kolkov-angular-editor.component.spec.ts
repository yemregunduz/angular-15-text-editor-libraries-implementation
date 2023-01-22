import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolkovAngularEditorComponent } from './kolkov-angular-editor.component';

describe('KolkovAngularEditorComponent', () => {
  let component: KolkovAngularEditorComponent;
  let fixture: ComponentFixture<KolkovAngularEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KolkovAngularEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KolkovAngularEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
