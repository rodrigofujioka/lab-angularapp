import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaAlunoComponent } from './forma-aluno.component';

describe('FormaAlunoComponent', () => {
  let component: FormaAlunoComponent;
  let fixture: ComponentFixture<FormaAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
