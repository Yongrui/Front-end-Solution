// 判断是否已滚动到足够低
function lowEnougn() {
	var pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight);
	var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
	var scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

	// 在离页面询问20像素时触发翻页
	return pageHeight - viewportHeight - scrollHeight < 20;
}

// 监测滚动位置并载入更多内容
function checkScroll() {
	if (!lowEnougn()) {
		return pollScroll();
	};

	// Do something
	// Load more contents with ajax or ...
	var xhr = new XMLHttpRequest();
	xhr.open("get", "example.php", false);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			// 添加内容

			// 
			pollScroll;
		}
	}
	xhr.send(null);
}

function pollScroll() {
	setTimeout(checkScroll, 100);
}

pollScroll();
