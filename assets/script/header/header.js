const menuItem = [{
	name: '首页'
}, {
	name: '画廊'
}, {
	name: '景观'
}, {
	name: '谈资'
}, {
	name: '作者'
}, {
	name: '活动'
}, {
	name: '商城'
}]

let createHeaderMain = () => {
	let html = `
		<div class="part-one">
		  <div class="wpr">
			<div class="logo">
				<img src="../assets/pictures/logo.png">
			</div>
			<div class="search">
				<form id="search">
					<input type="text" placeholder="请输入关键词"/>
					<button type="submit" value="Submit">搜索</button>
				</form>
			</div>
		  </div>
		</div>
		<div class="part-two">
		  <div class="wpr">
			<div class="catalog">
				<ul class="menu"></ul>
				<ul class="tools"></ul>
			</div>
		  </div>
		</div>
	`
	let header = document.querySelector('.header');
	header.innerHTML = html;
}

let createMenu = () => {
	let scriptArgs = document.getElementById('headerScript').getAttribute('data');
	scriptArgs = Number(scriptArgs);
	let menu = document.querySelector('.menu');
	//let menu - item = document.querySelectorAll('.menu-item');
	menuItem.map((e, index) => {
		if (scriptArgs === index) {
			menu.innerHTML += `<li class="menu-item-${index}-active"><a href="./${index}.html">${e.name}</a></li>`
		} else {
			menu.innerHTML += `<li class="menu-item-${index}"><a href="./${index}.html">${e.name}</a></li>`
		}
	})

}

let createTool = () => {
	let tools = document.querySelector('.tools');
	let html = `
	<li class="tool1"><a href="./APP.html">APP</a></li>
	<li class="tool2"><a href="./post.html">投稿</a></li>
	<li class="tool3"><a href="#"></a></li>
	`
	tools.innerHTML = html;
}
createHeaderMain();
createMenu();
createTool();