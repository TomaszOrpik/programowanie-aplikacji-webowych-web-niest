
let number1: number  = document.getElementById('input1').textContent as unknown as number;
let number2: number  = document.getElementById('input2').textContent as unknown as number;
let number3: number  = document.getElementById('input3').textContent as unknown as number;
let number4: number  = document.getElementById('input4').textContent as unknown as number;

let span1: HTMLElement = document.getElementById('span1');
let span2: HTMLElement = document.getElementById('span2');
let span3: HTMLElement = document.getElementById('span3');
let span4: HTMLElement = document.getElementById('span4');




let getSum = (): number => {
    return number1+number2+number3+number4;
};

let getMin = (): number => {
    return Math.min(number1, number2, number3, number4);
};

let getMax = (): number => {
    return Math.max(number1, number2, number3, number4);
};

let getAv = (): number => {
    return number1+number2+number3+number4 / document.querySelectorAll('input').length;
};

let arr: Array<HTMLElement>;
arr.push(document.getElementById('#input1'));
arr.push(document.getElementById('#input2'));
arr.push(document.getElementById('#input3'));
arr.push(document.getElementById('#input4'));

arr.forEach(
    function (el) {
        el.addEventListener('onchange', () =>
        {
            span1.innerText = "Sum: "+getSum.toString();
            span2.innerText = "Min: "+getMin().toString();
            span3.innerText = "Max: "+getMax().toString();
            span4.innerText = "Average: "+getAv().toString();
        });
    }
);

