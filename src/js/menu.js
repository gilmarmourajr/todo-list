import cavalo from "../imgs/cavalo.jpg";
import feijoada from "../imgs/feijoada.jpg";
import milanesaFrango from "../imgs/milanesa-frango.jpg";
import panqueca from "../imgs/panqueca.jpeg";
import parmeCarne from "../imgs/parme_carne.jpg";
import yakisoba from "../imgs/yakisoba.jpeg";

const imgs = [cavalo, feijoada, milanesaFrango, panqueca, parmeCarne, yakisoba];
const names = ["Bife à Cavalo", "Feijoada", "Milanesa de Frango", "Panqueca de Carne", "Parmegiana de Carne", "Yakisoba Misto"];
const prices = ["R$28,99", "R$28,99", "R$22,99", "R$28,99", "R$31,99", "R$28,99"];

export default function menuLoad () {
    const contentDiv = document.getElementById("content");

    let cardapioDiv = document.createElement("div");
    cardapioDiv.classList.add("cardapio");

    for(let i = 0; i<imgs.length; i++) {
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        let img = document.createElement("img");
        img.src = imgs[i];

        let nameDiv = document.createElement("div");
        let name = document.createElement("p");
        name.textContent = names[i];
        let price = document.createElement("p");
        price.textContent = prices[i];

        nameDiv.append(name, price);
        itemDiv.append(img, nameDiv);
        cardapioDiv.appendChild(itemDiv);
    }

    contentDiv.appendChild(cardapioDiv);
}