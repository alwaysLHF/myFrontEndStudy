#react 简介  
##是什么  
- 用来构建UI的组件库  
- 不是MVC框架，仅仅是视图(V)层的库  
##核心概念  
- vitural DOM 
> React将DOM抽象为虚拟DOM，虚拟DOM其实就是用一个对象来描述DOM，通过对比前后两个对象的差异，最终只把变化的部分重新渲染，提高渲染的效率
为什么用虚拟dom，当dom反复更改时需要遍历 而原生dom可遍历属性多达231个 且大部分与渲染无关 更新页面代价太大  