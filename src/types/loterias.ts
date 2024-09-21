// types/lotomania.ts

export interface LotoManiaResult {
    loteria: string;
    concurso: string;
    data: string;
    dezenas: string[];
    trevos: string[];
    acumulou: boolean;
  }
  
  export interface LotoManiaProps {
    resultado: LotoManiaResult;
    exibirPremio?: boolean; // opcional
  }
  