const landscapeMenu = [
	'石林', '丹霞', '雅丹', '喀斯特', '石柱', '盆地', '礁石', '湿地', '海岸', '岛屿', '三角洲', '冲积扇', '冰川', '梯田', '林地', '热带雨林', '草原', '观星地', '古典园林', '石窟', '古楼', '古城', '国道', '铁路', '绿洲', '河流', '古镇', '古村', '自然遗产', '文化遗产', '地质公园', '自然保护区'
]
const popularizeMenu = [
	'四川100个最美观景拍摄点', '青海100个最美观景拍摄点', '内蒙古100个最美观景拍摄点', '西藏100个最美观景拍摄点'
]
const landscapePictures = [{
	src: '../assets/pictures/wKgBy1nPEYaAVlPHAABPhIqUzPA708.jpg',
	illus: '“开裂”的冰岛',
	author: '秦昭'
}, {
	src: '../assets/pictures/wKgBy1nPJmOAHr9PAABKrc-myqA867.jpg',
	illus: '阿什库勒火山',
	author: '彭相荣'
}, {
	src: '../assets/pictures/wKgBy1mJho2AY3FpAABkM5nUt_o063.jpg',
	illus: '喜马拉雅另一侧的秘境',
	author: '张秩'
}, {
	src: '../assets/pictures/wKgBy1nPGuOACFBbAABCTSwHDZQ733.jpg',
	illus: '长江南源当曲',
	author: '杨勇'
}, {
	src: '../assets/pictures/wKgBy1nPKQyAL6pSAAB0Dep5IVo290.jpg',
	illus: '加舒尔布鲁木',
	author: '陈业伟'
}, {
	src: '../assets/pictures/wKgBy1nPDXGAWgvpAADIK-c2-PQ056.jpg',
	illus: '天上的阿里',
	author: '李忠东'
}]
let createLandscape = () => {
	let landscape = document.querySelector('.landscape');
	let html = `
	<div class="left">
		<div class="left1">
		  <div class="subtitle">
			<span>景观</span>
			<br/>
			<span class="small">LANDSCAPE</span>
		  </div>
		  <ul class="menu-landscape"></ul>
		</div>
		<div class="left2">
		  <div class="subtitle">
			<span>推广</span>
			<br/>
			<span class="small">POPULARIZE</span>
		  </div>
		  <ul class="menu-popularize"></ul>
		</div>
	</div>
		<div class="right"></div>
	`
	landscape.innerHTML = html;
}

let createLandscapeMenu1 = () => {
	let menu_landscape = document.querySelector('.menu-landscape');
	landscapeMenu.forEach((e, index) => {
		let html = `<li>${e}</li>`;
		menu_landscape.innerHTML += html;
	})
}
let createLandscapeMenu2 = () => {
	let menu_popularize = document.querySelector('.menu-popularize');
	console.log(menu_popularize);
	popularizeMenu.forEach((e, index) => {
		let html;
		if (index % 2 === 1) html = `<li class="single">${e}</li>`;
		else html = `<li class="double">${e}</li>`;
		menu_popularize.innerHTML += html;
	})
}
let createLandscapeRight = () => {
	let right = document.querySelector('.landscape .right');
	let html = `
		<div class="landscape-right-top">
			<div class="landscape-right-top-left">
				<div class="landscape-p"></div>
				<div class="landscape-p"></div>
				<div class="landscape-p"></div>
			</div>
			<div class="landscape-right-top-right">
				<div class="landscape-p"></div>
				<div class="landscape-p" style="height:424px"></div>
			</div>
		</div>
		<div class="landscape-right-bottom">
			<div class="landscape-p"></div>
		</div>
	`
	right.innerHTML = html;
}
let addLandscapePicture = () => {
	let landscape_p = document.querySelectorAll('.landscape-p');
	landscapePictures.forEach((e, index) => {
		let html = `<img src="${e.src}"/><div class="hide"><p>${e.illus}</p><p>作者：${e.author}</p></div>`
		landscape_p[index].innerHTML = html;
	})
}
createLandscape();
createLandscapeMenu1();
createLandscapeMenu2();
createLandscapeRight();
addLandscapePicture();