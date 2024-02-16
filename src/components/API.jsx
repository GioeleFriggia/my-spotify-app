export const fillMusicSection = async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Aggiungi questo console.log per verificare i dati delle canzoni
      return data.data; // Ritorna solo l'array di dati delle canzoni
    } else {
      console.error("Errore nella richiesta API:", response.statusText);
      return []; // Ritorna un array vuoto in caso di errore
    }
  } catch (error) {
    console.error("Errore durante il recupero dei dati delle canzoni:", error);
    return []; // Ritorna un array vuoto in caso di errore
  }
};
