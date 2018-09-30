#闭包
##返回函数
js不仅可以将函数作为input，也可以将函数作为返回值。  
返回的函数不仅可以稍后执行，还可以调用原外部函数的参数和局部变量。也就是说，函数返回时，相关的参数和变量都保存在返回的函数中，这种称为闭包的程序结构拥有极大的威力。  
##注意  
- 返回函数`引用`了局部变量
- 返回的函数并没与立即执行，直到调用了才会执行。
- 返回函数不要引用任何循环变量，或者后续会发生变化的量。
>function count() {
> var arr = [];
>    for (var i=1; i<=3; i++) {
>     arr.push(function () {
>      return i * i;  // arr 中将函数push进去了
> });
> }
>return arr;
>}

>var results = count();
>var f1 = results[0];
>var f2 = results[1];
>var f3 = results[2];

你可能以为结果是1 4 9，然而，其实是16 16 16。  
原因就在与返回的函数中包含有引用变量i，但是他并不是立即执行，等3个函数都返回时，所引用变量i已经变成了4，所以最终返回结果为16. 

如果一定要引用循环变量，方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变。
```javascript
function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}  
```  
> 这里使用了一个立即执行的匿名函数，将i保存在了n中  
##闭包作用  
js语言没有class机制，只有函数。借助闭包，可以封装一个私有变量。  
```javascript  
'use strict';

function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
}  
```  
使用如下  
```javascipt
var c1 = create_counter();
c1.inc(); // 1
c1.inc(); // 2
c1.inc(); // 3

var c2 = create_counter(10);
c2.inc(); // 11
c2.inc(); // 12
c2.inc(); // 13
```  
我们可以看到，在返回的对象中，实现了一个闭包。该闭包携带了局部变量x,而外部变量完全无法访问到x。