import CardContainer from "./compenent.js";
const $template = document.createElement('template');
$template.innerHTML =`
    <div class = "card-list">

    </div>
`;

export default class CardList extends HTMLElement {
    constructor(){
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$list = this.querySelector('.card-list')
    }
    
    static get observedAttributes() {
        return ['cards'];
    }
    attributeChangedCallback(attrName,oldValue,newValue){
        if(attrName =='cards') {
            let data = JSON.parse(newValue);
            console.log(data);
            for(let cardData of data) {
                //console.log(cardData);
                let $cardContainer = new CardContainer();
                $cardContainer.setAttribute('id',cardData.id);
                $cardContainer.setAttribute('background-color',cardData.backgroundColor);
                $cardContainer.setAttribute('image',cardData.image);
                $cardContainer.setAttribute('text',cardData.text);
                $cardContainer.setAttribute('color',cardData.color);
                $cardContainer.setAttribute('icon',cardData.icon);
                $cardContainer.setAttribute('background-body',cardData.backgroundBody);
                $cardContainer.setAttribute('href',cardData.href);
                this.$list.appendChild($cardContainer);
            }
        }
    }
}

window.customElements.define('card-list',CardList);