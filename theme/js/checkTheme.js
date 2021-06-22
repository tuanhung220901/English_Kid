var input = document.getElementById("theme");
        console.log(input.getAttribute("theme"));
        let themes = input.getAttribute("theme").toString();
        async function updateData(){
            await firebase.firestore().collection('checkTheme').doc("deNIr3kPX64oceB2LROw").update({theme: themes});
        }
         updateData();