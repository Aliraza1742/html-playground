function abcd(a){
    a();
}
abcd(function(){
    console.log("This is first class function!")
});
