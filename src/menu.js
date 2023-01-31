export function menu() {
    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "Tony's Menu";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const lasagna = document.createElement("img");
    lasagna.classList.add("image");
    lasagna.src = "../src/sunorwind-PgkGsxjvGB4-unsplash.jpg";
    lasagna.alt = "Image of Lasagna";
    contentDiv.appendChild(lasagna);

    const para1Lasagna = document.createElement("p");
    para1Lasagna.classList.add("menu-copy");
    para1Lasagna.textContent = "Family recipie with a generous portion";
    contentDiv.appendChild(para1Lasagna);

    const spagetti = document.createElement("img");
    spagetti.classList.add("image");
    spagetti.src = "../src/mgg-vitchakorn-PLyJqEJVre0-unsplash.jpg";
    spagetti.alt = "Image of spagetti";
    contentDiv.appendChild(spagetti);

    const para2Spagetti = document.createElement("p");
    para2Spagetti.classList.add("menu-copy");
    para2Spagetti.textContent = "Made with in-house noodles to perfection!";
    contentDiv.appendChild(para2Spagetti);

    const ceasarSalad = document.createElement("img");
    ceasarSalad.classList.add("image");
    ceasarSalad.src = "../src/chris-tweten-FK-UKNip0pE-unsplash.jpg";
    ceasarSalad.alt = "Image of ceasar salad";
    contentDiv.appendChild(ceasarSalad);

    const para2CeasarSalad = document.createElement("p");
    para2CeasarSalad.classList.add("menu-copy");
    para2CeasarSalad.textContent = "The best ceasar salad in the area";
    contentDiv.appendChild(para2CeasarSalad);

}