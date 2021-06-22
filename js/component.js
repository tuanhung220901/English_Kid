let $template = document.createElement('template');

$template.innerHTML=`
    <div class="web">
    <div id="coating">
    </div>
    <div class="map">
        <div class="adjust_1">
            <a href="./theme/theme.html">
                <button id = "pic1" class="button_start learn-more"></button> 
            </a>

        </div>
        <div class="adjust_2">
            <a href="./theme/theme.html">
                <button id = "pic2" class="button_start learn-more"></button> 
            </a>
        </div>
        <div class="adjust_3">
            <a href="./theme/theme.html">
                <button id = "pic3" class="button_start learn-more"></button> 
            </a>
        </div>
        <div class="adjust_4">
            <a href="./theme/theme.html">
                <button id = "pic4" class="button_start learn-more"></button> 
            </a>
        </div>
        <div class="adjust_5">
            <a href="./theme/theme.html">
                <button id = "pic5" class="button_start learn-more"></button> 
            </a>  
        </div>         
    </div>
`;
export default class mapComponenet extends HTMLElement{
    constructor(){
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$nut1=this.querySelector('.learn-more');
    }
    
}

window.customElements.define('map-component',mapComponenet)
