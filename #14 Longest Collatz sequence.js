function processData(input) {
    const [itr, ...N] = input.split('\n');
    
    let seqLength = {1:1};
    let result={1:1};
    let max=1;
    for(let i=2; i<5000001; i++){
                if(!seqLength[i]){
                    generateSeq(i);
                }
                result[i] = seqLength[i]>=max ? (max=seqLength[i],i) : (result[i-1]);
    }
    N.forEach(n => console.log(result[n]));
    function generateSeq(n){
        let temp = [n];
        while(n>1){
            if(n&1){
                n = (3*n)+1;
            } else {
                n = n/2;
            }
            if(seqLength[n] != undefined){
                for (let p=1; p<=temp.length; p++){
                   seqLength[temp[p-1]] = seqLength[n] + p;
                };
                break;
            } else {
                temp.unshift(n);
            }
        }
    }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});