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



    }
}