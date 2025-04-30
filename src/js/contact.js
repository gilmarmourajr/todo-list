import mapIcon from "../icons/map-marker.svg";
import phoneIcon from "../icons/phone.svg";
import emailIcon from "../icons/email.svg";

const horarios = ["Horários de abertura:", "Segunda a Sexta: 11:00 às 22:00", "Domingos e feriados: 11:00 às 21:00"];
const icons = [mapIcon, phoneIcon, emailIcon];
const contacts = ["Avenida Otaviano Alves de Lima", "+55 (11) 91234-5678", "emaillegal@gmail.com"];

export default function contactLoad () {
    const contentDiv = document.getElementById("content");

    let contatoDiv = document.createElement("div");
    contatoDiv.classList.add("contato");

    let infoDiv = document.createElement("div");

    horarios.forEach((horario) => {
        const p = document.createElement("p");
        p.textContent = horario;
        infoDiv.appendChild(p);
    });

    for(let i=0; i < icons.length; i++) {
        const newDiv = document.createElement("div");
        const img = document.createElement("img");
        const p = document.createElement("p");
        img.src = icons[i];
        p.textContent = contacts[i];

        newDiv.append(img, p);
        infoDiv.appendChild(newDiv);
    }

    contatoDiv.appendChild(infoDiv);
    contentDiv.appendChild(contatoDiv);
}