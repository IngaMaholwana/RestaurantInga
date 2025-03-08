import catIMG from './images/cat.jpg';

export default function loadAbout() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    content.innerHTML = `
        <div class="header">🐱 About Us! 🐱</div>
        <div class="about-content">
            <div class="intro">Who We Are</div>
            <div class="intro-content">This was cool looking project look at these cats. Visit us to see these cuddly critters!
            </div>
            <img src="${catIMG}" alt="cat" height="250" width="310">
        </div>`;
}