const outputDiv = document.getElementById('output');
const button = document.getElementById('execute');

button.addEventListener('click', () => {
    
    const fizzNumStr = document.getElementById('fizz-num').value;
    const buzzNumStr = document.getElementById('buzz-num').value;

    if (isInteger(fizzNumStr) && isInteger(buzzNumStr)) {
        outputDiv.innerHTML = '';
        displayOutputs(fizzNumStr, buzzNumStr);
    } else {
        outputDiv.innerHTML = '整数値を入力してください';
    }
});

/**
 * 整数判定を行う関数
 * @param {number} num
 * @returns {boolean}
 */
function isInteger(num) {
    const regx = /^\d+$/;
    return regx.test(num);
}

/**
 * 結果の出力を行う関数
 * @param {string} fizz 
 * @param {string} buzz 
 */
function displayOutputs(fizz, buzz) {

    // 初期値をキャッシュしておく
    const cashedFizz = parseInt(fizz);
    const cashedBuzz = parseInt(buzz);

    // 倍々される数
    let fizzNumInt = cashedFizz;
    let buzzNumInt = cashedBuzz;

    while (fizzNumInt < 100 || buzzNumInt < 100) {

        const span = document.createElement('SPAN');

        if (fizzNumInt  < buzzNumInt) {
            span.textContent = `Fizz ${fizzNumInt}`;
            fizzNumInt += cashedFizz;
        } else if (fizzNumInt > buzzNumInt) {
            span.textContent = `Buzz ${buzzNumInt}`;
            buzzNumInt += cashedBuzz;
        } else if (fizzNumInt === buzzNumInt) {
            span.textContent = `FizzBuzz ${fizzNumInt}`;
            fizzNumInt += cashedFizz;
            buzzNumInt += cashedBuzz;
        }

        outputDiv.appendChild(span);
        outputDiv.appendChild(document.createElement('BR'));
    } 
}