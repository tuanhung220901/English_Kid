export function getDataFromDoc(doc) {
    let data = doc.data(); // --> object
    data.id = doc.id;
    return data;
}
export function getDataFromDocs(docs) {
    // let result = [];
    // for(let doc of docs) {
    //     result.push(getDataFromDoc(doc));
    // }
    // return result;

    return docs.map(function(doc) {
        return getDataFromDoc(doc);
    });

}