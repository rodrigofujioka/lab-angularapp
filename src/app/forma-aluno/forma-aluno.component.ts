import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno';
import { AlunoService } from '../aluno.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forma-aluno',
  templateUrl: './forma-aluno.component.html',
  styleUrls: ['./forma-aluno.component.css']
})
export class FormaAlunoComponent implements OnInit {

  aluno = {} as Aluno;
  alunos: Aluno[];

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
  }


  saveAtleta(form: NgForm) {

    this.alunoService.saveAluno(this.aluno).subscribe(() => {
      this.cleanForm(form);
    });
  }

     // Chama o serviço para obtém todos os usuários
     getAtletas() {
      this.alunoService.getAlunos().subscribe((alunos: Aluno[]) => {
        this.alunos = alunos;
      });
    }


    // limpa o formulario
    cleanForm(form: NgForm) {
      form.resetForm();
      this.aluno = {} as Aluno;
    }

}
