function processData(input) {
    const [itr, ...N] = input.split('\n');
    const sumLength = 10;
    let result="0";
    for (let i = 40; i>=0; i-=10){
        result = result.length > 10 ? Number(result.slice(0,-10)) : 0; // carry forward of last sum
        result = N.reduce((acc, n) => {
            return acc+Number(n.slice(i,i+10));
        }, result).toString();
    }
    console.log(result.slice(0,10));
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