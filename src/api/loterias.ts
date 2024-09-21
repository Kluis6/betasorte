import type { NextApiRequest, NextApiResponse } from 'next';

type Loterias = {
  loteria: string;
  concurso: string;
  data: string;
  dezenas: string[];
  trevos: string[];
  acumulou: boolean;
};

const BASE_URL = "https://loteriascaixa-api.herokuapp.com/api";

async function fetchLoteria(endpoint: string): Promise<Loterias[]> {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return Array.isArray(data) ? data : [data];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { loteria } = req.query;

  try {
    const data = await fetchLoteria(`${loteria}/latest`);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
