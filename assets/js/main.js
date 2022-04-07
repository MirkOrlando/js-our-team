/* 
Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
*/

// array di oggetti (lista dei membri del team)
const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];
/* MILESTONE 1 (da fare entro le 18):
stampare su console le informazioni di nome, ruolo e la stringa della foto */
// 1. ciclare l'array per individuare i dati del singolo membro
for (let i = 0; i < team.length; i++) {
  const member = team[i];
  // console.log(member);
  // 2. stampare in console ogni dato
  console.log(`MEMBER ${i}`);
  console.log(member.name);
  console.log(member.role);
  console.log(member.image);
}

/* MILESTONE 2 (se ce la fai falla entro le 18 altrimenti puoi consegnare anche dopo le 18 - easy):
stampare le stesse informazioni su DOM sottoforma di stringhe */
// 1. inizializzare la variabile del contenitore del DOM
const containerElement = document.querySelector(".container");
// 2. ciclare l'array per individuare i dati del singolo membro
for (let i = 0; i < team.length; i++) {
  const member = team[i];
  // 3. creare un contenitore (card) per ogni membro
  const cardElement = document.createElement("div");
  // 4. appendere alla card i dati del membro
  cardElement.append(
    `IMAGE ${member.image} - NAME ${member.name} - ROLE ${member.role}`
  );
  // 5. stampare a schermo le informazioni di ogni membro sottoforma di stringa
  containerElement.append(cardElement);
}

/* BONUS 1 (solo se non sei giá frustrato dalle milestone 1 e 2):
trasformare la stringa foto in una immagine effettiva */

/* BONUS 2 (solo se non sei giá fuso):
organizzare i singoli membri in card/schede */
