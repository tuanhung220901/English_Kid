import Game3 from "./compenent.js";
import {getDataFromDocs} from "./ultils.js";
// khởi tạo biến correct để lưu giá trị correct từ firebase về
let correct;
let theme;
async function getByTheme(){
    theme = await firebase.firestore().collection('checkTheme').doc("deNIr3kPX64oceB2LROw").get();
}
await getByTheme();
console.log(theme.data().theme);

let $game3 = document.querySelector('game-3');
 async function getByData(){
    let response = await firebase.firestore().collection('game3').where('theme', '==' , theme.data().theme).get();
    return getDataFromDocs(response.docs);
}
async function getByCheck(){
    let response = await firebase.firestore().collection('tickGame3').get();
    return getDataFromDocs(response.docs);
}
async function getDocByDatas(){
    let datas = await getByData();
    console.log(datas);
    while(true){
        let checkData = await getByCheck();
        let index = Math.floor(Math.random() * checkData.length);
        index = index.toString();
        console.log(index);
        let checks = await firebase.firestore().collection('tickGame3').doc(index).get();
        console.log(checks.data().check);
        if(checks.data().check == true){
            await firebase.firestore().collection('tickGame3').doc(index).update({check: false});
            let randomQuestion = datas[index];
            //console.log(randomQuestion);
            $game3.setAttribute('image',randomQuestion.image);
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
                await firebase.firestore().collection('tickGame3').doc(indexCheckUse).update({check:true});
            }
            //alert("reset lại bộ câu hỏi");
        }
    }
}
getDocByDatas();
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
//  DATA TRUYỀN VÀO ĐÂY NHA ------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral' ];
// tạo ra để giữ cố định ngữ pháp
// Dòng đầu tiên - #JSGF V1.0;- cho biết định dạng và phiên bản được sử dụng
// Dòng thứ hai cho biết một loại thuật ngữ mà chúng tôi muốn nhận dạng. publictuyên bố rằng đó là quy tắc công khai,
// chuỗi trong dấu ngoặc nhọn xác định tên được công nhận cho thuật ngữ này ( color) và danh sách các mục theo sau dấu 
// bằng là các giá trị thay thế sẽ được công nhận và chấp nhận là giá trị thích hợp cho thuật ngữ. 
// Lưu ý cách mỗi ký tự được phân tách bằng ký tự ống dẫn.

var grammar = '#JSGF V1.0; grammar datas; public <data> = ;'



// khởi tạo biến để lưu giọng nói và khởi tạo một danh sách ngữ pháp giọng nói
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
/* SpeechGrammarList.addFromString()phương pháp này. Điều này chấp nhận dưới 
dạng tham số mà chuỗi chúng ta muốn thêm, cộng với tùy chọn giá trị trọng số 
chỉ định tầm quan trọng của ngữ pháp này trong mối quan hệ với các ngữ pháp khác 
có sẵn trong danh sách (có thể bao gồm từ 0.0 đến 0.1) nếu không để gì thì mặc định sẽ là 1 
*/
speechRecognitionList.addFromString(grammar, 1);
/*
SpeechRecognition.continuous: 
    Kiểm soát xem các kết quả liên tục được ghi lại ( true) hay chỉ một kết quả 
    duy nhất mỗi khi bắt đầu nhận dạng ( false).
SpeechRecognition.lang: 
    Đặt ngôn ngữ nhận dạng. Đặt điều này là thực hành tốt, và do đó được khuyến khích.
SpeechRecognition.interimResults: 
    Xác định xem hệ thống nhận dạng giọng nói sẽ trả về kết quả tạm thời hay chỉ là kết quả cuối cùng.
    Kết quả cuối cùng là đủ tốt cho bản demo đơn giản này.
SpeechRecognition.maxAlternatives: 
    Đặt số lượng kết quả phù hợp tiềm năng thay thế sẽ được trả về cho mỗi kết quả.
*/
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
var diagnostic = document.querySelector('.output');

var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

var dataHTML= '';
// colors.forEach(function(v, i, a){
//   console.log(v, i);
//   colorHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
// });
// hints.innerHTML = 'Tap/click then say a color to change the background color of the app. Try ' + colorHTML + '.';

document.getElementById('microphone').onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}
let $popupWin = document.querySelector('.popup-win');
let $popupLose = document.querySelector('.popup-lose');
let $closePopup = document.querySelector('.close-popup');
recognition.onresult = function(event) {
    // lấy ra giá trị của giọng nói 
    var result = event.results[0][0].transcript;
    // in ra giá trị của giọng nói
    diagnostic.textContent =  result;
    // bg.style.backgroundColor = color;
    if(correct == result){
        $popupWin.style.display = 'block';
    }
    else 
    $popupLose.style.display = 'block';
        $closePopup.onclick = function(e){
            //e.stopPropagation();
            $popupLose.style.display = 'none';
        }
}
recognition.onspeechend = function() {
    recognition.stop();
}


recognition.onnomatch = function(event) {
    diagnostic.textContent = 'I didnt recognize that color.';
}
recognition.onerror = function(event) {
    diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}

// xử lý giọng nói không được nhận
// let index  = Math.floor(Math.random() * flirtingUsers.length);
// let randomUser = flirtingUsers[index];

