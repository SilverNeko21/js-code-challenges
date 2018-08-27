var i;
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

module.exports = function acceptableSequence(str) {
    for(i = 0; i < str.length; i++){
        if (letters.indexOf(str[i]) !== -1){
            if(str[i - 1] !== "+" || str[i + 1] !== "+") {
                return false;
            }
        }
    }
    return true;
};
