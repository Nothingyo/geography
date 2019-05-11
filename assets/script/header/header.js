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
				<img src="./assets/pictures/logo.png">
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

	let menu = document.querySelector('.menu');
	//let menu - item = document.querySelectorAll('.menu-item');
	menuItem.map((e, index) => {
		menu.innerHTML += `<li class="menu-item-${index}"><a href="#">${e.name}</a></li>`
	})

}

let createTool = () => {
	let tools = document.querySelector('.tools');
	let html = `
	<li class="tool1"><a>APP</a></li>
	<li class="tool2"><a href="#">投稿</a></li>
	<li class="tool3"><a href="#"></a></li>
	`
	tools.innerHTML = html;
}

let call = () => {
	$('.menu-item-0').load('assets/html/first.html');
	$('.menu-item-1').load('assets/html/ggallery.html');
}

createHeaderMain();
createMenu();
createTool();
call();