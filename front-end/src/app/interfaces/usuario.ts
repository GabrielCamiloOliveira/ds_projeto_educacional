export interface Usuario {
    
    id: number;
    email: string;
    username: string;
    senha: string;
    nivel: number;
    hp: number;
    pokemons: number[];
    pokemonAtual : number;
    pIniciante: number;
    pModerado: number;
    pExperiente: number;
    pMestre: number;
}