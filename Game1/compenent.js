const $template = document.createElement('template');
$template.innerHTML = `
<div class="web">
    <div class = "text">
    Zoo
    </div>
    <div class= contain>
        <div class="home"></div>
        <div class="music"></div>
        
        <div class = "popup-win">
            <div class="icon-win"></div>
            <p class="message-win">Correct</p>
            <div class="options">
            <a href="index.html"><button class="btn">Continue</button></a>
            <a href="/theme/theme.html"><button class="btn back">Back</button></a>
            </div>
        </div> 
        <div class = "popup-lose"> 
            <div class="icon-lose"></div>
            <p class="message-lose">Incorrect</p>
            <div class="options">
                <button class="btn close-popup">Try Again</button>
                <a href="/theme/theme.html"><button class="btn back">Back</button></a> 
            </div>  
        </div>
    <div class="container">
        <div class="thumbex">
            <div class="thumbnail" >
                <div class="question"></div>
            </div>
        </div>
        </div>
            
            <div class="answer">
                <div id="colum-a"></div>
                <div id="colum-b"></div>
            </div>
        <div class="answer">
            <div id="colum-c"></div>
            <div id="colum-d"></div>
        </div>   
    </div>    
</div>
`; 
{/* <button id="colum-a"><a href="#">hehe</a></button> */}
export default class Game1 extends HTMLElement{
    constructor(){
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$question = this.querySelector('.question');
        this.$a = this.querySelector('#colum-a');
        this.$b = this.querySelector('#colum-b');
        this.$c = this.querySelector('#colum-c');
        this.$d = this.querySelector('#colum-d');
        this.$text = this.querySelector('.text');
    }
    static get observedAttributes(){
        return['back-ground','image','choose','text'];
    }
    attributeChangedCallback(attrName,oldValue,newValue){
        if(attrName == 'back-ground'){
            //console.log(newValue);
            document.body.style.backgroundImage = `url('${newValue}')`;
        }
        else if(attrName == 'image') {
            this.$question.style.backgroundImage  = `url('${newValue}')`;
        }
        else if(attrName == 'choose'){
            let chooses = JSON.parse(newValue);
            this.$a.innerHTML = chooses[0];
            this.$b.innerHTML = chooses[1];
            this.$c.innerHTML = chooses[2];
            this.$d.innerHTML = chooses[3];
        }
        else if(attrName == 'text'){
            this.$text.innerHTML = newValue;
        }
    }
}
window.customElements.define('game-1',Game1);