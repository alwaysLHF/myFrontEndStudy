// ___   _       _          __      ___  __    __  _____   _       _   _   _____  
// /   | | |     | |        / /     /   | \ \  / / /  ___/ | |     | | | | |  ___| 
// / /| | | |     | |  __   / /     / /| |  \ \/ /  | |___  | |     | |_| | | |__   
// / / | | | |     | | /  | / /     / / | |   \  /   \___  \ | |     |  _  | |  __|  
// / /  | | | |___  | |/   |/ /     / /  | |   / /     ___| | | |___  | | | | | |     
// /_/   |_| |_____| |___/|___/     /_/   |_|  /_/     /_____/ |_____| |_| |_| |_|     
function tokenizer(input) {
    let current = 0; // 追踪我们在代码中的位置

    let tokens = []; // push我们的词语

    while (current < input.length) {

        let char = input[current]; // 我们计划在char中存储当前字符

        // 我们首先查看是否有开括号
        if (char === '(') {
            tokens.push({
                type: 'paren',
                value: '('
            });

            current++;

            continue;
        }

        // 然后查看是否有闭括号
        if (char === ')') {
            tokens.push({
                type: 'paren',
                value: '('
            });

            current++;

            continue;
        }

        // 接下来我们查看空格键， 我们靠他来判断分割代码。但是我们不会存储他
        let WHITESPACE = /\s/;
        if (WHITESPACE.test(char)) {
            current++;
            continue;
        }

        // 下一种类型是数字
        let NUMBERS = /[0-9]/;
        if (NUMBERS.test(char)) {

            // 数字肯定是一长串啦
            let value = '';

            while (NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }

            tokens.push({ type: 'number', value });

            continue;

        }

        // 数字完了字符串
        if (char === '"') {
            let value = '';

            char = input[++current]; // 跳过双引号

            while (char !== '"') {
                value += char;
                char = input[++current];
            }

            char = input[++current]; // 跳过后面双引号

            tokens.push({ type: 'string', value });

            continue;
        }

        // 函数名
        let LETTERS = /[a-z]/i;
        if (LETTERS.test(char)) {
            let value = '';

            while (LETTERS.test(char)) {
                value += char;
                char = input[++current];
            }

            tokens.push({
                type: 'name',
                value
            });

            continue;
        }

        //如果所有的都不适合，我们就抛出错误
        throw new TypeError('I dont know ehat this character is :' + char);

    }

    // 然后返回
    return tokens;
}

// 第二部 转化
function parser(tokens) {
    let current = 0;

    // 这次不用循环啦，改用嵌套
    function walk() {

        let token = tokens[current];

        if (token) {

        }
    }


}