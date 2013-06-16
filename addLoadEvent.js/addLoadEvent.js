// 共享onload事件
// 参数func是打算在页面加载完毕时执行函数的名字
function addLoadEvent(func) {
	// 把现有的window.onload事件处理函数的值存入变量oldonload
	var oldonload = window.onload;

	if (typeof window.onload != "function") {
		// 如果window.onload没有绑定任何函数，就直接将新函数添加给它
		window.onload = func;
	} else {
		// 如果window.onload已经绑定了一些函数，就将新函数追加到现有指令的末尾
		// 即将oldonload和新函数一起绑定到window.onload中
		window.onload = function() {
			oldonload();
			func();
		}
	}
}