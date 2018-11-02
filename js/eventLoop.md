#事件循环机制(Event Loop)  
事件循环机制从整体上告诉了我们js代码的执行顺序。特别是ES6正式加入了promise对象后，对于新标准中事件循环机制的理解就变得更加重要。  

- js的一大特点：单线程。这个线程拥有唯一的一个事件循环。  
- js代码执行过程中除了依靠函数调用栈来搞定函数的执行顺序，还依靠任务队列来搞定另外一些代码的执行  
- 一个线程中，事件循环式唯一的，但是任务队列可以拥有多个  
- 任务队列分为macro-task（宏任务）与micro-task（微任务），在最新标准中，它们被称为task与jobs。  
- macro-task大概包括：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。  
- micro-task大概包括: process.nextTick, Promise, Object.observe(已废弃), MutationObserver(html5新特性)
- setTimeout/Promise等我们称之为任务源。而进入任务队列的是他们指定的具体执行任务。
- 来自不同任务源的任务会进入到不同的任务队列。其中setTimeout与setInterval是同源的。
- 事件循环的顺序，决定了javascript代码的执行顺序。他从整体代码开始第一次循环。之后全局上下文进入函数调用栈。直到调用栈清空（只剩全局），然后执行所有的micro-task。当所有可执行的micro-task执行完毕后。循环再次从macro-task开始，找到其中一个任务队列执行完毕，然后再执行所有的micro-task,这样一直循环下去。
- 其中每一个任务的执行，无论是macro-task还是micro-task，都是借助函数调用栈来完成。



参考网址：`https://www.jianshu.com/p/12b9f73c5a4f`
