# 跨浏览器事件对象：EventUtil

``EventUtil``对象包含了几个成员方法：

1.  ``addHandler``：添加事件处理程序
2.  ``getEvent``：获取``event``对象的引用
3.  ``getTarget``：返回事件的目标
4.  ``preventDefault``：取消事件的默认行为
5.  ``removeHandler``：移除事件处理程序
6.  ``stopPropagation``：阻止事件冒泡行为

以上方法基本上能够以跨浏览器的方式处理事件，并且保证能在大多数浏览器下一致地运行。