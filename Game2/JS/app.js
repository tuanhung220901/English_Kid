import fillIn from "./web.js";
import { getDataFromDocs } from "./ultils.js";
let theme;
async function getByTheme(){
    theme = await firebase.firestore().collection('checkTheme').doc("deNIr3kPX64oceB2LROw").get();
}
await getByTheme();
console.log(theme.data().theme);
let $game2 = document.querySelector('fill-in');
// $game2.setAttribute('back-ground',data2);
// $game2.setAttribute('picture',data1);
 async function getByData(){
    let response = await firebase.firestore().collection('game2').where('theme', '==' , theme.data().theme).get();
    return getDataFromDocs(response.docs);
}
async function getByDataCheck(){
    let data = await firebase.firestore().collection('tickGame2').get();
    return getDataFromDocs(data.docs);
}
async function getDocByDatas(){
    let datas = await getByData();
    while(true){
        let dataCheck = await getByDataCheck();
        console.log(datas.length);
        let index = Math.floor(Math.random() * dataCheck.length);
        index = index.toString();
        console.log(index);
        let checks = await firebase.firestore().collection('tickGame2').doc(index).get();
        console.log(checks.data().check);
        if(checks.data().check == true){
            await firebase.firestore().collection('tickGame2').doc(index).update({check: false});
            let randomQuestion = datas[index];
            console.log(randomQuestion);
            $game2.setAttribute('text',randomQuestion.text);
            $game2.setAttribute('back-ground',randomQuestion.backGround);
            $game2.setAttribute('image',randomQuestion.image);
            $game2.setAttribute('sentence',randomQuestion.sentence);
            break;
        }
        // kiểm tra nếu mà nó tất cả các câu hỏi đã được chọn hết thì sẽ reset lại câu hỏi 
        let checkUse = true;
        for(let i = 0;i < dataCheck.length; i++) {
            if(dataCheck[i].check == true){
                checkUse = false;
                break;
            }
        }
        if(checkUse == true){
            for(let i = 0;i < dataCheck.length; i++) {
                let indexCheckUse = i.toString();
                //console.log(datas[i]);
                await firebase.firestore().collection('tickGame2').doc(indexCheckUse).update({check:true});
            }
            //alert("reset lại bộ câu hỏi");
        }
    }
}
getDocByDatas();
