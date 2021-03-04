console.log('hi')
let demo = document.querySelector('#demo');

let string = `你好，我是一名前端新人。请多指教hahahahahahahahha`

let string = '奏，是一块一块ing时养成一个意群一口气不停顿说出来。训练语调的难点在于弱读，因为弱读的轻和模糊，才凸显出重音单词的语调变化。难来源于要训练耳朵的注意力和舌头在轻重之间自如转换，这是生理训练。其他部分：音变（包括连读、爆破、省略和同化）、元音辅音、英音美音在单音上的差异，都是第二位的，上述项目要先练好意群内不换气是前提，可以挤压单词之间的时间缝隙！我不赞成使用Rachel的Franklin训练方式训练发音，会有巨大的效率损失和高的训练强度！如果你在一个短段落中，一个环节一个环节的训练，整合起来进行跟读朗读，结果往往是节奏和语调这两个宏'

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

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += '<br>';
        } else if (string[n] === " ") {
            string2 += '&nbsp';
        } else {
            string2 += string[n];
        }
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        if (n < string.length - 1) {
            n += 1;
            step();
        }


    }, 10);
};

step();




