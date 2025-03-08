import omeletIMG from './images/omelet.jpeg';
import pastaIMG from './images/pasta.jpeg';
import pancakeIMG from './images/pancakes.jpeg';
import biscuitIMG from './images/biscuits.jpeg';
import cappucinoIMG from './images/cappucino.jpeg';
import smoothieIMG from './images/smoothie.jpeg';


export default function loadMenu() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    content.innerHTML = `
        <div class="header">🐱 Menu 🐱</div>
        <div class="food">
            <div class="main-dishes">
                <div class="blurb">Dig into our meow-velous selection of mains!</div>
                <div class="yum">
                    <div class="omelet">
                        <img src="${omeletIMG}" alt="Omelet" height="310" width="310">
                        <div class="item-blurb">Omeowlette (omelet) -- $10</div>
                    </div>
                    <div class="pasta">
                        <img src="${pastaIMG}" alt="Pasta" height="310" width="310">
                        <div class="item-blurb">Pawsitively Divine Pasta -- $14</div>
                    </div>
                </div>
            </div>
            <div class="light-snacks">
                <div class="blurb">Try out our sweet treats!</div>
                <div class="yum">
                    <div class="pancake">
                        <img src="${pancakeIMG}" alt="Pancakes" height="310" width="310">
                        <div class="item-blurb">Pawsome Pancakes -- $8</div>
                    </div>
                    <div class="biscuits">
                        <img src="${biscuitIMG}" alt="Biscuits" height="310" width="310">
                        <div class="item-blurb">Bitey Biscuits -- $7</div>
                    </div>
                </div>
            </div>
            <div class="drinks">
                <div class="blurb">Relax with a refreshing drink!</div>
                <div class="yum">
                    <div class="cappucino">
                        <img src="${cappucinoIMG}" alt="Cappucino" height="310" width="310">
                        <div class="item-blurb">Clawssic Capuccino -- $4</div>
                    </div>
                    <div class="biscuits">
                        <img src="${smoothieIMG}" alt="Smoothie" height="310" width="310">
                        <div class="item-blurb">Grape Purr-psicle Smoothie -- $5</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="extra">...and even more!</div>
        `;
}