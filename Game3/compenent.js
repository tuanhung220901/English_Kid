const $template = document.createElement('template');
$template.innerHTML = ` 
    <div class = "text">
    Zoo
    </div>
    <div class = "contain"> 
        <div class="home"></div>
        <div class = "popup-win">
           
            <p class="message-win">Correct</p>
            <div class="options">
                <a href="index.html"><button class="btn">Continue</button></a>
                <button class="btn" id="">Back</button>
            </div> 
            <div class="icon-win"></div>
        </div> 
        <div class = "popup-lose"> 
            <p class="message-lose">Incorrect</p>
            <div class="options">
                <button class="btn close-popup">Try Again</button>
                <button class="btn">Back</button> 
            </div>  
            <div class="icon-lose"></div>
        </div>
        <div class="container">
        <div class="thumbex">
            <div class="thumbnail" >
                <div class="picture" >
                </div>
            </div>
        </div>
        </div>
        <div id="microphone"></div>
        <div>
            <p class="box output"></p>
        </div>
        
    </div>
`;
       
export default class Game3 extends HTMLElement{
    constructor(){
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$Picture = this.querySelector('.picture');
        
    }
    static get observedAttributes() {
        return ['image','back-ground'];
    }
    attributeChangedCallback(attrName,oldValue,newValue){
        if(attrName == 'image'){
            console.log(this.$Picture);
            this.$Picture.style.backgroundImage  = `url('${newValue}')`;
            
            console.log(newValue);
        }
        else if(attrName == "back-ground"){
            document.body.style.backgroundImage  = `url('${newValue}')`;
        }
    }
    // connectedCallback() {

    //     console.log("lần đầu tiên xuất hiện");
    // }
}
window.customElements.define('game-3',Game3);
