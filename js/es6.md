##模板字符串  
模板字符串是为了解决使用+号拼接字符串的不便利而出现的。它的功能非常强大，但是我们大多数时候使用它则非常简单。看一个例子大家就明白怎么使用了。  
```javascript
// es6
const a = 20;
const b = 30;
const string = `${a}+${b}=${a+b}`;

// es5
var a = 20;
var b = 30;
var string = a + "+" + b + "=" + (a + b);
```
##解析结构  
解析结构是一种全新的写法，我们只需要使用一个例子，大家就能够明白解析结构到底是怎么一回事儿。  
```javascript
// 首先有这么一个对象
const props = {
    className: 'tiger-button',
    loading: false,
    clicked: true,
    disabled: 'disabled'
}
```
当我们想要取得其中的2个值：loading与clicked时：
```javascript
// es5
var loading = props.loading;
var clicked = props.clicked;

// es6
const { loading, clicked } = props;

// 给一个默认值，当props对象中找不到loading时，loading就等于该默认值
const { loading = false, clicked } = props;
```  
另外，数组也有属于自己的解析结构
数组以序列号一一对应，这是一个有序的对应关系。
而对象根据属性名一一对应，这是一个无序的对应关系。
根据这个特性，使用解析结构从对象中获取属性值更加具有可用性。  
