function processData(input) {
    function getAllFactors(n) {
        var a = [0];
        while (n % 2 == 0) {
            a[0]++;
            n = n / 2;
        }
        for (var i = 3; i <= Math.sqrt(n); i = i + 2) {
            if (n % i == 0) { a.push(0); }
            while (n % i == 0) {
                a[a.length - 1]++;
                n = n / i;
            }
        }
        if (n > 2)
            a.push(1);
        return a.reduce((acc, val) => { return acc * (val + 1) }, 1);
    }
    let list = [1]; // list of all triangular numbers
    let flen = [1]; // list of factors list correponding to index on lisr array.
    let [itr, ...N] = input.split('\n');
    N.forEach(n => {
        let result;
        if (flen[list.length - 1] <= n) {
            while (true) {
                let len = list.length;
                let newList = list[len - 1] + len + 1;
                let newFlen = getAllFactors(newList);
                list.push(newList);
                flen.push(newFlen);
                if (newFlen > n) {
                    result = newList;
                    break;
                }
            }
        } else {
            for (var i = 0; i <= flen.length - 1; i++) {
                if (flen[i] > n) {
                    result = list[i];
                    i = flen.length; // to break for loop.
                }
            }
        }

        console.log(result);
    });

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
