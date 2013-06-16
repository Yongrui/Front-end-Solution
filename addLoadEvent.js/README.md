# 共享onload事件：addLoadEvent

``window.onload``一次只能保存对一个函数的引用，多次绑定函数会覆盖前面的函数。

addLoadEvent是一个共享``onload``函数，它是Silmon Willison编写的。它有一个参数：打算在页面加载完毕时执行的函数的名字。

这个函数是我在《JavaScript DOM编程艺术(第2版)》这本书看到的。当需要在页面加载完毕时执行多个函数时，这是一个很简单很好的解决方案。下面是``addLoadEvent``函数的执行步骤：

1.  把现有的``window.onload``事件处理函数的值存入变量``oldonload``。
2.  如果在这个处理函数上还没有绑定任何函数，就像平时那样把新函数添加给它。
3.  如果在这个处理函数上已经绑定了一些函数，就把新函数追加到现有指令的末尾。

``addLoadEvent``函数的详细代码请看addLoadEvent.js文件。