import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Atleta } from '../atleta';
import { AtletaService } from '../atleta.service';

@Component({
  selector: 'app-formatleta',
  templateUrl: './formatleta.component.html',
  styleUrls: ['./formatleta.component.css']
})
export class FormatletaComponent implements OnInit {

  atleta = {} as Atleta;
  atletas: Atleta[];

  constructor(private atletaService: AtletaService) { }

  ngOnInit(): void {
  }


  saveAtleta(form: NgForm) {

    this.atletaService.saveAtleta(this.atleta).subscribe(() => {
      this.cleanForm(form);
    });
  }

     // Chama o serviço para obtém todos os usuários
     getAtletas() {
      this.atletaService.getAtletas().subscribe((atletas: Atleta[]) => {
        this.atletas = atletas;
      });
    }


    // limpa o formulario
    cleanForm(form: NgForm) {
      form.resetForm();
      this.atleta = {} as Atleta;
    }

}
