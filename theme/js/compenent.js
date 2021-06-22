const $template = document.createElement('template');
$template.innerHTML=`
<div class="container">
<a href = "">
    <div class="card">
        <div class="card-image"></div>
        <div class="group">
            <div class="border"></div>
            <div class="card-color">
                <div class = "icon"></div>
            </div>
            <div class="card-text">
                <div class= color>Choose the best answer</div>
            </div>
           
        </div>
    </div>
</a>    
</div>
`;
export default class CardContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$image = this.querySelector('.card-image');
        this.$cardColor = this.querySelector('.card-color');
        this.$text = this.querySelector('.card-text');
        this.$icon = this.querySelector('.icon');
        this.$content = this.querySelector('.container');
        this.$href = this.querySelector('a');
    }
    static get observedAttributes() {
        return ['background-color', 'image', 'text', 'icon','color','background-body','href'];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName == 'image'){
            this.$image.style.backgroundImage = `url('${newValue}')`;
        }  
        else if(attrName == 'background-color') {
            console.log(newValue);
            this.$cardColor.style.backgroundColor = newValue;
        }
        else if(attrName == 'icon') {
            this.$icon.style.backgroundImage = `url('${newValue}')`;
        }
        else if(attrName == 'text'){
            this.$text.innerHTML = newValue;
        } 
        else if(attrName == 'color'){
            this.$text.style.color  = newValue;
        } 
        else if(attrName == 'background-body'){
           document.body.style.backgroundColor = newValue;
           this.$content.style.backgroundColor = newValue;
        }
        else if(attrName == 'href'){
            newValue = newValue.toString();
            //console.log(newValue);
            this.$href.href = newValue;
        }
    }
}

window.customElements.define('card-container', CardContainer);