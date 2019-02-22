module.exports = function check(str, bracket) {
    if(str.length%2!=0){
        return false;
    }
    var arr=str.split('');
    var stack=[];
    for(var j=0;j<arr.length; j++){
        for(var i=0; i<bracket.length;i++){
            if(stack[stack.length-1]==bracket[i][0]&&arr[j]==bracket[i][1]){
                stack.pop();
            }else{
                if(arr[j]==bracket[i][0]){
                    stack.push(arr[j]);
                }
            }
        }

    }
    return stack.length==0;
}
