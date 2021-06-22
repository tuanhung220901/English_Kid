export function getDataFromDoc(doc){
    let data =  doc.data();
    data.id = doc.id;
    return data;
}
// docs là một mảng
export function getDataFromDocs(docs){
    return docs.map(function(doc){
        return getDataFromDoc(doc);
    });
}
// async export function getByData(){
//     let response = await firebase.firestore().collection("themeAnimal").get();
//     return getDataFromDocs(response.docs);
// }