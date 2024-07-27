import { Endereco } from './endereco';

export class Aluno {
  id!: number;
  name!: string;
  email!: string;
  cpf!: string;
  anoNascimento!: number;
  endereco!: Endereco;
}
