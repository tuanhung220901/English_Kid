const $template = document.createElement('template');
$template.innerHTML = `
<div class = "web">
    <div class = "text">
        Zoo
    </div>
    <div class = "contain"> 
    <div class="home"></div>
    <div class="music"></div>
    <div class = "popup-win">
        <div class="icon-win"></div>
        <p class="message-win">Correct</p>
        <div class="options">
        <a href="index.html"><button class="btn">Continue</button></a>
        <button class="btn" id="">Back</button>
        </div>
    </div> 
    <div class = "popup-lose"> 
        <div class="icon-lose"></div>
        <p class="message-lose">Incorrect</p>
        <div class="options">
            <button class="btn close-popup">Try Again</button>
            <button class="btn">Back</button> 
        </div>  
    </div>
        <div class="container">
        <div class="thumbex">
            <div class="thumbnail" >
                <div class="picture" ></div>
            </div>
        </div>
        </div>   
    <form class="fill-test"> 
        <div class="question"></div>
        <button class="learn-more btn-test" style="color:white">
                Check
        </button>
    </form>
        

</div>

`;
export default class fillIn extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$form = this.querySelector('.fill-test'); // cái này để làm gì vậy
        this.$image = this.querySelector('.picture');
        this.$text = this.querySelector('.text');
        // ra style css cái class iamge đi để nó ra giữa và hình đi để tí toi hiện ảnh luôn
        // làm luôn đi làm cho toi một cái khung ảnh ở đó đi toi chỉ thay data thoi
    }
    static get observedAttributes(){
        return['image','sentence','back-ground','text'];
    }
    attributeChangedCallback(attrName,oldValue, newValue){
        let tmp = '';
        let answer = [];
        let count=0;
        if(attrName == 'image'){
            this.$image.style.backgroundImage  = `url('${newValue}')`;
            
        }
        else if(attrName == 'back-ground'){
            document.body.style.backgroundImage  = `url('${newValue}')`;
        }
        else if(attrName == "text"){
            this.$text.innerHTML = newValue;
        }
        else if(attrName == 'sentence'){
            console.log(newValue);
            // bh cái newValue chính là chuỗi toi truyền cho bạn đó
            for (let i = 0; i <= newValue.length; i++) {
                if (newValue[i] != " " && newValue[i] != undefined) {
                    tmp += newValue[i];
                }
                else {
                    if (tmp != "") {
                        answer.push(tmp);
                        count++;
                    }
                    tmp = "";
                }
            }
        }
        let random = Math.floor(Math.random() * count);
        //hiện bài ra web 
        for (let i = 0; i < answer.length; i++) {
            if (i != random) {//nếu vị trí đó ko phải chỗ mình cần để ô trống => in chữ ra
                $('.question').append(answer[i] + " ")
            }
            else {//nếu đúng vị trí cần kiểm tra => thêm input vào đó
                $('.question').append("<input type='text' placeholder='................' class='test'>")
            }
        }
        let $popupWin = document.querySelector('.popup-win');
        let $popupLose = document.querySelector('.popup-lose');
        let $closePopup = document.querySelector('.close-popup');
        this.$form.onsubmit = (event) => {
            event.preventDefault();
            // $musicClick.play();
            let check = this.querySelector('.test').value.toLocaleLowerCase();
            let tmp = '';
            for (let i = 0; i < check.length; i++) {
                if (check[i] != " ")
                    tmp += check[i];    
            }
            if (tmp == answer[random]) $popupWin.style.display = 'block';
            else{
                $popupLose.style.display = 'block';
                $closePopup.onclick = function(){
                    $popupLose.style.display = 'none';
                }
            } 
    
        }

    }
}

window.customElements.define('fill-in', fillIn);
// khoan nhé nên firebase