import CardContainer from "./compenent.js";
import CardList from "./cardlist.js";
import {getDataFromDocs} from "./ultils.js";
// import data from "./datatheme.js";
let theme;
async function getByTheme(){
    theme = await firebase.firestore().collection('checkTheme').doc("deNIr3kPX64oceB2LROw").get();
}
await getByTheme();
console.log(theme.data().theme);
async function getByData(){
    let data = await firebase.firestore().collection('themeAnimal').where('theme' ,"==", theme.data().theme).get();
    return getDataFromDocs(data.docs);
}
let data = await getByData();
 let $cardList = document.getElementById('my-list');
// console.log(JSON.stringify(data));
 $cardList.setAttribute('cards', JSON.stringify(data));
