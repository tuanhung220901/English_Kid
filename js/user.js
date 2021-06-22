import { getDataFromDocs, getDataFromDoc } from "./utils.js";

export async function register(name, email, password) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        await firebase.auth().currentUser.updateProfile({
            displayName: name
        });

        // console.log(firebase.auth().currentUser);

        let currentUser = firebase.auth().currentUser;

        await firebase.firestore().collection("users").doc(currentUser.uid).set({
            status: 'free',
            currentConversationId: ''
        }); // tự sinh 1 id 

        alert("Create account successfully");
    } catch (error) {
        alert(error.message);
    }

    console.log("This code must be executed");
}

export async function login(email, password) {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        alert("Login successfully");
    } catch (error) {
        alert(error.message)
    }
}

export function authStateChanged() {
    // đăng kí, đăng nhập, đăng xuất
    firebase.auth().onAuthStateChanged(function (user) {
        if (user != null) {
            document.getElementById('app').innerHTML = '<web-screen></web-screen>';
            $(document).ready(function(){
                $('.carousel').carousel();
            });
        } else {
            document.getElementById('app').innerHTML = '<auth-screen></auth-screen>';
        }
    });
}