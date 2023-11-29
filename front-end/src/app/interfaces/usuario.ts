export interface Usuario {
    
    id: number;
    email: string;
    nome: string;
    senha: string;
    nivel: number;
    hp: number;
    pokemons: number[];
}