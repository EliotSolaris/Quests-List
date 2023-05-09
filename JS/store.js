function sendItemsToBackEnd() {
fetch('http://localhost:4321/quests', {
    method: 'POST',
    body: 'item'
})
}
function insert(item, callback){
    const todos = this.getLocalStorage();

    this.setLocalStorage(todos);


    sendItemsToBackEnd()
    if (callback) {
        callback();
    }
}