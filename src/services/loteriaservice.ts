const API_LOTERIA = "https://loteriascaixa-api.herokuapp.com/api/";

export async function getLoterias(loteria: string, concurso: string) {
  try {
    const response = await fetch(`${API_LOTERIA}/${loteria}/${concurso}`);
    const data = await response.json();
    if (data && typeof data === "object") {
      return data;
    } else{
      console.error("Formato de dados inesperado para 'maismi'");
    }
   
  } catch (error) {
    console.log(error, " error do services");
    return null;
  }
}
