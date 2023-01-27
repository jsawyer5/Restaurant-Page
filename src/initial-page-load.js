export function initialPageLoad() {
    const contentDiv = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Welcome To Tony's Fine Dinning";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const firstImage = document.createElement("img");
    firstImage.classList.add("first-image");
    firstImage.src = "../src/jonathan-borba-uB7q7aipU2o-unsplash.jpg";
    firstImage.alt = "Image of Restaurant";
    contentDiv.appendChild(firstImage);

    const para1 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "Tony's is nationally recognized for our famous lasagna";
    contentDiv.appendChild(para1);

    const para2 = document.createElement("p");
    para2.classList.add("landing-page-copy");
    para2.textContent = "Our business has been family owned for 3 generations!";
    contentDiv.appendChild(para2)

    const para3 = document.createElement("p");
    para3.classList.add("landing-page-copy");
    para3.textContent = "We welcome everyone to experience our fine food and outstanding service.";
    contentDiv.appendChild(para3);

}