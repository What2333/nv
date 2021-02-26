console.log('hi')
let demo = document.querySelector('#demo');

let string = `你好，我是一名前端新人。请多指教hahahahahahahahha`

let n = 0;

demo.innerHTML = string.substring(0, n);

let step = () => {
    setTimeout(() => {
        n = n + 1;
        demo.innerHTML = string.substring(0, n);
        if (n < string.length) {
            step();
        }
    }, 100);
}

step(); let step = () => {
    setTimeout(() => {
        n = n + 1;
        demo.innerHTML = string.substring(0, n);
        if (n < string.length) {
            step();
        }
        n = n + 1;
        demo.innerHTML = string.substring(0, n);
        if (n < string.length) {
            step();
        }
    }, 100);
}


