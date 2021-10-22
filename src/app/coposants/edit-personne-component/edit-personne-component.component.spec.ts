import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonneComponentComponent } from './edit-personne-component.component';

describe('EditPersonneComponentComponent', () => {
  let component: EditPersonneComponentComponent;
  let fixture: ComponentFixture<EditPersonneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPersonneComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
