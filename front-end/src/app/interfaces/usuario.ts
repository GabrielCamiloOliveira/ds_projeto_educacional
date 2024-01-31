import { Achievement } from "./achievement";

export interface Usuario {
    
    id: number;
    email: string;
    username: string;
    senha: string;
    nivel: number;
    hp: number;
    achievementList: Achievement[];
    pokemonAtual : number;
    progressoFacil: number;
    progressoMedio: number;
    progressoDificil: number;
    progressoInsano: number;
}