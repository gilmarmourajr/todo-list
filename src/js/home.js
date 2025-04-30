import chapado from "../imgs/chapadoadm.jpg";

export default function homeLoad () {
    const contentDiv = document.getElementById("content");
    let homeDiv = document.createElement("div");
    homeDiv.classList.add("home");

    let mainTitle = document.createElement("h1");
    mainTitle.textContent = "Porque devemos comer bem?";

    let mainDiv = document.createElement("div");
    let chapadoImg = document.createElement("img");
    chapadoImg.src = chapado;
    
    let subDiv = document.createElement("div");

    let subTitle = document.createElement("h2");
    let ul = document.createElement("ul");
    ul.innerHTML = "<li>Mais energia e disposição</li><li>Melhora do humor</li><li>Qualidade de sono</li><li>Prevenção de doenças</li>";
    subDiv.append(subTitle, ul);
    mainDiv.append(chapadoImg, subDiv);
    
    let callText = document.createElement("h2");
    callText.textContent = "Venha conhecer nossas opções!";
    
    homeDiv.append(mainTitle, mainDiv, callText);

    contentDiv.appendChild(homeDiv);
}