import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormatletaComponent} from './formatleta/formatleta.component';
import { FormaAlunoComponent } from './forma-aluno/forma-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    FormatletaComponent,
    FormaAlunoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
