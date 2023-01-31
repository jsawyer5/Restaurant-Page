export function contact() {
    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "Tony's Authentic Italian food"
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const phoneImage = document.createElement("img");
    phoneImage.classList.add("image");
    phoneImage.src = "../src/mike-meyers--haAxbjiHds-unsplash.jpg";
    phoneImage.alt = "Image of phone";
    contentDiv.appendChild(phoneImage);

    const para1phoneImage = document.createElement("p");
    para1phoneImage.classList.add("contact-copy");
    para1phoneImage.textContent = "You can contact us by phone at 1800-111-1111";
    contentDiv.appendChild(para1phoneImage);

    const emailImage = document.createElement("img");
    emailImage.classList.add("image");
    emailImage.src = "../src/solen-feyissa-TaOGbz_S-Qw-unsplash.jpg";
    emailImage.alt = "Image of email";
    contentDiv.appendChild(emailImage);

    const para1Email = document.createElement("p");
    para1Email.classList.add("contact-copy");
    para1Email.textContent = "Our email is Tony's@wedontknow.com";
    contentDiv.appendChild(para1Email);

}