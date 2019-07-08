function palindrome(str){
    var len = str.length;
    var str1 = "";
    for(var i=len-1; i>=0;i--){
        str1+=str[i];
    }
    console.log(str1 == str)
}
palindrome("abcba");//true
palindrome("hello");//false