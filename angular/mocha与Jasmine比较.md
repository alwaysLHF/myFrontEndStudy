##官网一句话介绍：
jasmine：Jasmine is a Behavior Driven Development testing framework for JavaScript. It does not rely on browsers, DOM, or any JavaScript framework. Thus it's suited for websites, Node.js projects, or anywhere that JavaScript can run.  
mocha：Simple, flexible, fun JavaScript test framework for Node.js & The Browser  

两者都是开源  

mocha测试文件：
后缀名为.test.js
jasmine测试文件：  
后缀名为spec.js  

断言：
mocha需要添加相应模块  
jasmine：自带  

HTML结果报告：  
mocha: 使用mochawesome模块  
jasmine: 自带  

ES6测试：
mocha需要安装babel  
jasmine需要配置karma  

异步测试：  
mocha：可设置测试时间；内置对promise支持，允许直接返回promise，等到它的状态改变，再执行断言  
jasmine: 在angular中可以使用 fakeAsync()/async() 辅助函数来运行


##总结：
简单看了一下两个测试框架的简明教程。
mocha主打的是灵活，很多东西需要自己配置。对异步测试支持比较好。jasmine比较全面，该有的东西也都有。  

我觉得我们可以使用jasmine作为我们的测试框架。
首先，jasmine配置少，不需要额外添加模块。
其次，其功能能够满足我们测试需求，对于异步测试，虽然jasmine不支持promise，但是angular有很好的解决方案。  
最后也是最重要的，angular CLI默认使用jasmine测试框架。官网对组件、服务、管道、指令、场景等测试具有一整套的测试方案，以后对于测试相关问题也很好查找。