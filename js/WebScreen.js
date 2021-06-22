const $template = document.createElement('template');
$template.innerHTML = `
   <!-- <button class="btn">Sign out</button> -->
    <div class="web">
        <div class="boxx">
            <div class="center-outer">
                <div class="center-inner">
                
                <div class="bubbles">
                <h1>THEME FOR KID</h1>
                </div>
                
                </div>
                </div>
        </div>
        <div class="carousel">
            <a class="carousel-item" href="map1.html">
                <img src="./image/map1.png" id="tv">
                <h3>Fruit</h3>
            </a>
            <a class="carousel-item" href="map2.html">
                <img src="./image/map2.png" id="tv">    
                <h3>Animal</h3>
            </a>
            <a class="carousel-item" href="map3.html">
                <img src="./image/map3.png" id="tv">
                <h3>School</h3>
            </a>
            <a class="carousel-item" href="map4.html">
                <img src="./image/map4.png" id="tv">
                <h3>Sports</h3>
            </a>
            <a class="carousel-item" href="map5.html">
                <img src="./image/map5.png" id="tv">
                <h3>Weathers</h3>
            </a>
        </div>
        
    </div>
`;
export default class WebScreen extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$signOut = this.querySelector(".btn");
    }
    connectedCallback(){
        this.$signOut.onclick = () => {
            firebase.auth().signOut();
        }
    }
    
}
window.customElements.define('web-screen', WebScreen)