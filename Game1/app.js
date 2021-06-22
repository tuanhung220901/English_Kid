import Game1 from "./compenent.js";
import {getDataFromDocs} from "./ultils.js";
// Music

let $musicClick = document.querySelector('#music-click'); 
let $musicStart = document.querySelector('#music-start');

let theme;
async function getByTheme(){
    theme = await firebase.firestore().collection('checkTheme').doc("deNIr3kPX64oceB2LROw").get();
}
await getByTheme();
console.log(theme.data().theme);

let $game1 = document.querySelector('game-1');
let correct;
 async function getByData(){
    let response = await firebase.firestore().collection('game1').where('theme', '==' , theme.data().theme).get();
    return getDataFromDocs(response.docs);
}
async function getByCheck(){
    let response = await firebase.firestore().collection('tickGame1').get();
    return getDataFromDocs(response.docs);
}
async function getDocByDatas(){
    let datas = await getByData();
    console.log(datas);
    while(true){
        let checkData = await getByCheck();
        let index = Math.floor(Math.random() * datas.length);
        index = index.toString();
        console.log(index);
        let checks = await firebase.firestore().collection('tickGame1').doc(index).get();
        console.log(checks.data().check);
        if(checks.data().check == true){
            await firebase.firestore().collection('tickGame1').doc(index).update({check: false});
            let randomQuestion = datas[index];
            //console.log(randomQuestion);
            $game1.setAttribute('back-ground',randomQuestion.backGroud);
            $game1.setAttribute('image',randomQuestion.ask);
            $game1.setAttribute('text',randomQuestion.text);
            $game1.setAttribute('choose',JSON.stringify(randomQuestion.choose));
            correct = randomQuestion.correct;
            //console.log(correct);
            break;
        }
        // kiểm tra nếu mà nó tất cả các câu hỏi đã được chọn hết thì sẽ reset lại câu hỏi 
        let checkUse = true;
        for(let i = 0;i < checkData.length; i++) {
            //console.log(datas[i].check);
            if(checkData[i].check == true){
                checkUse = false;
                break;
            }
        }
        if(checkUse == true){
            for(let i = 0;i < checkData.length; i++) {
                let indexCheckUse = i.toString();
                //console.log(datas[i]);
                await firebase.firestore().collection('tickGame1').doc(indexCheckUse).update({check:true});
            }
            //alert("reset lại bộ câu hỏi");
        }
    }
}
await getDocByDatas();
let $popupWin = document.querySelector('.popup-win');
let $popupLose = document.querySelector('.popup-lose');
let $closePopup = document.querySelector('.close-popup');
let $btnBack = document.querySelector('.back');
document.getElementById("colum-a").onclick = function(){
    $musicClick.play();
    let $choose = document.querySelector("#colum-a");
    if($choose.textContent == correct){
        $popupWin.style.display = 'block';
        $btnBack.onclick = function(){
            $musicClick.play();
            //e.stopPropagation();
            $popupWin.style.display = 'none';
        }
    } 
    else {
        $popupLose.style.display = 'block';
        $closePopup.onclick = function(){
            $musicClick.play();
            //e.stopPropagation();
            $popupLose.style.display = 'none';
        }
        $btnBack.onclick = function(){
            $musicClick.play();
            //e.stopPropagation();
            $popupLose.style.display = 'none';
        }
    } 

};
document.getElementById("colum-b").onclick = function(){
    $musicClick.play();
    let $choose = document.querySelector("#colum-b");
    if($choose.textContent == correct){
        $popupWin.style.display = 'block';
        $btnBack.onclick = function(){
            $musicClick.play();
            //e.stopPropagation();
            $popupWin.style.display = 'none';
        }
    } 
    else {
        $popupLose.style.display = 'block';
        $closePopup.onclick = function(){
            $musicClick.play();
            //e.stopPropagation();
            $popupLose.style.display = 'none';
        }
        $btnBack.onclick = function(){
            $musicClick.play();
            //e.stopPropagation();
            $popupLose.style.display = 'none';
        }
    } 
};
document.getElementById("colum-c").onclick = function(){
    $musicClick.play();
    let $choose = document.querySelector("#colum-c");
    if($choose.textContent == correct){
        $popupWin.style.display = 'block';
        $btnBack.onclick = function(){
            $musicClick.play();
            //e.stopPropagation();
            $popupWin.style.display = 'none';
        }
    } 
    else {
        $popupLose.style.display = 'block';
        $closePopup.onclick = function(){
            $musicClick.play();
            //e.stopPropagation();
            $popupLose.style.display = 'none';
        }
        $btnBack.onclick = function(){
            $musicClick.play();
            //e.stopPropagation();
            $popupLose.style.display = 'none';
        }
    } 
};
document.getElementById("colum-d").onclick = function(){
    $musicClick.play();
    // nhạc nền
    //
    let $choose= document.querySelector("#colum-d");
    if($choose.textContent == correct){
        $popupWin.style.display = 'block';
        $btnBack.onclick = function(){
            $musicClick.play();
            //e.stopPropagation();
            $popupWin.style.display = 'none';
        }
    } 
    else {
        $popupLose.style.display = 'block';
        $closePopup.onclick = function(){
            $musicClick.play();
            //e.stopPropagation();
            $popupLose.style.display = 'none';
        }
        $btnBack.onclick = function(e){
            $musicClick.play();
            e.stopPropagation();
            $popupLose.style.display = 'none';
        }
    } 
};
