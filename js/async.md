#async使用注意
##await包在try...catch语句中  
await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。  
##多个await命令  
多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。