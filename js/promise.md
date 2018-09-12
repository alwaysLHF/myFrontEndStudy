#promise 对象

##基本概念
promise是异步编程的解决方案。简单来说，promise就是一个容器，里面保存着未来才会结束的事件的结果。我们可以把它看做是一个对象，从这个对象中可以获取异步操作的消息。
##特点
- `对象状态不受外界影响` promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。promise对象的结果只由操作结果决定，外部无法改变
- `状态改变后不再变化` promise对象只有两种改变方式： 
	1. pending -> fulfilled
	2. pending -> rejeced  
如果改变已经发生了，你再对promise对象添加回调函数，也会得到这个结果。（事件event的特点是如果你错过了它，你是监听不到结果的）
##优点
有了promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数，此外promise提供的接口可以使控制异步操作更加容易
##缺点
- 建立后立即执行，中途无法取消
- 如果不设置回调函数，promise内部抛出的错误，不会反映到外部
- 处于pending状态时，无法得知目前进行状态（刚刚开始还是即将完成）
##基本用法
ES6规定，promise对象是一个构造函数，用来生成promise实例。
```javascript
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```  
上面将一个函数作为参数来构建Promise。resolve和reject是两个js引擎提供的函数，不用自己部署。  
promise实例生成后，可以用then方法指定resolve状态和reject状态的回调函数。
```javascript
promise.then(
	function(value){
	//success
},
	function(error){
	//failure
}
);
```
then方法可以接受两个回调函数作为参数，第一个回调函数是promise状态变为resolve时调用，另外一个是状态变为rejected时候调用。其中，第二个函数是可选的。
当前脚本所有同步任务执行完成后，才会执行resolve。  
##常用方法
- Promise.prototype.then()
- Promise.prototype.catch()  
用于指定发生错误时的回调函数  
- Promise.prototype.catch()
将多个promise实例包装成新的promise实例  
```javascript
const p = Promise.all([p1, p2, p3]);
```

	p的状态由p1, p2, p3 决定，三个都为fulfilled，则p的状态为fulfilled，返回值组成数组传出。有一个状态为rejected，则p的状态为rejected，返回第一个rejected。
- Promise.race() 
```javascript
const p = Promise.race([p1, p2, p3]);
```  

	p1，p2, p3中有一个状态发生改变，p的状态发生变化，并返回率先发生变化的函数。  

	
- Promise.resolve()
	将其他对象转为promise对象