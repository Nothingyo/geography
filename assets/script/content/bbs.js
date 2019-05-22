const bbsMenus = [{
	title: '社区推荐'
}, {
	title: '风土人情'
}, {
	title: '城市中国'
}, {
	title: '乡村印象'
}, {
	title: '风景物语'
}, {
	title: '且行且歌'
}]
const BbsRightPictures0 = [{
	src1: '../assets/pictures/5b580e60784568878806585_t.jpg',
	src2: '../assets/pictures/5b580e60784568878806585_t.jpg',
	illus1: '成都寻旧',
	author1: '童强',
	illus2: '成都寻旧',
	author2: '童强'

}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}]
const BbsRightPictures1 = [{
	src1: '../assets/pictures/5b580e60784568878806585_t.jpg',
	src2: '../assets/pictures/5b580e60784568878806585_t.jpg',
	illus1: '成都寻旧',
	author1: '童强',
	illus2: '成都寻旧',
	author2: '童强'

}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}]
const BbsRightPictures2 = [{
	src1: '../assets/pictures/5b580e60784568878806585_t.jpg',
	src2: '../assets/pictures/5b580e60784568878806585_t.jpg',
	illus1: '成都寻旧',
	author1: '童强',
	illus2: '成都寻旧',
	author2: '童强'

}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}]
const BbsRightPictures3 = [{
	src1: '../assets/pictures/5b580e60784568878806585_t.jpg',
	src2: '../assets/pictures/5b580e60784568878806585_t.jpg',
	illus1: '成都寻旧',
	author1: '童强',
	illus2: '成都寻旧',
	author2: '童强'

}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}]
const BbsRightPictures4 = [{
	src1: '../assets/pictures/5b580e60784568878806585_t.jpg',
	src2: '../assets/pictures/5b580e60784568878806585_t.jpg',
	illus1: '成都寻旧',
	author1: '童强',
	illus2: '成都寻旧',
	author2: '童强'

}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}]
const BbsRightPictures5 = [{
	src1: '../assets/pictures/5b580e60784568878806585_t.jpg',
	src2: '../assets/pictures/5b580e60784568878806585_t.jpg',
	illus1: '成都寻旧',
	author1: '童强',
	illus2: '成都寻旧',
	author2: '童强'

}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}, {
	illus: '成都寻旧',
	author: '童强'
}]
let createBbs = () => {
	let bbs = document.querySelector('.bbs');
	let html = `
		<div class="left">
		  <div class="subtitle">
			<span>社区</span>
			<br/>
			<span class="small">BBS</span>
		  </div>
		  <ul class="menu-community"></ul>
		</div>
		<div class="right"></div>
	`
	bbs.innerHTML = html;
}

let createBbsMenu = () => {
	let menuCommunity = document.querySelector('.menu-community');
	//menuCommunity.innerHTML = '';
	bbsMenus.map((e, index) => {
		if (index === 0) {
			let html = `<li class='active'>${e.title}</li>`;
			menuCommunity.innerHTML = html;
		} else {
			let html = `<li>${e.title}</li>`;
			menuCommunity.innerHTML += html;
		}
	})
}

let bbsIndex = 0;
let changeBbsIndex = () => {
	let menuCommunityli = document.querySelectorAll('.menu-community li');
	console.log(menuCommunityli);
	menuCommunityli.forEach((e, index) => {
		e.onclick = () => {
			menuCommunityli[bbsIndex].className = '';
			e.className = 'active';
			bbsIndex = index;
			createBbsRightPicture();
			createBbsLi();
		}
	})
}
let createBbsRight = () => {
	let bbsRight = document.querySelector('.bbs .right');
	let html = `
		<div class="bbs-picture">
			<div class="bbs-picture-img">
				<img/>
				<div class="bbs-picture-sub"></div>
			</div>
			<div class="bbs-picture-img">
				<img/>
				<div class="bbs-picture-sub"></div>
			</div>
		</div>
		<div class="bbs-li"></div>
	`
	bbsRight.innerHTML = html;
}

let createBbsRightPicture = () => {
	let bbsRightPicture = document.querySelectorAll('.bbs-picture img');
	let bbsRightPictureSub = document.querySelectorAll('.bbs-picture-sub');
	if (bbsIndex === 0) {
		bbsRightPicture[0].src = BbsRightPictures0[0].src1;
		bbsRightPicture[1].src = BbsRightPictures0[0].src2;
		bbsRightPictureSub[0].innerHTML = `<p>${BbsRightPictures0[0].illus1}</p><p>作者：${BbsRightPictures0[0].author1}</p>`;
		bbsRightPictureSub[1].innerHTML = `<p>${BbsRightPictures0[0].illus2}</p><p>作者：${BbsRightPictures0[0].author2}</p>`;
	} else if (bbsIndex === 1) {
		bbsRightPicture[0].src = BbsRightPictures1[0].src1;
		bbsRightPicture[1].src = BbsRightPictures1[0].src2;
		bbsRightPictureSub[0].innerHTML = `<p>${BbsRightPictures1[0].illus1}</p><p>作者：${BbsRightPictures1[0].author1}</p>`;
		bbsRightPictureSub[1].innerHTML = `<p>${BbsRightPictures1[0].illus2}</p><p>作者：${BbsRightPictures1[0].author2}</p>`;

	} else if (bbsIndex === 2) {
		bbsRightPicture[0].src = BbsRightPictures2[0].src1;
		bbsRightPicture[1].src = BbsRightPictures2[0].src2;
		bbsRightPictureSub[0].innerHTML = `<p>${BbsRightPictures2[0].illus1}</p><p>作者：${BbsRightPictures2[0].author1}</p>`;
		bbsRightPictureSub[1].innerHTML = `<p>${BbsRightPictures2[0].illus2}</p><p>作者：${BbsRightPictures2[0].author2}</p>`;

	} else if (bbsIndex === 3) {
		bbsRightPicture[0].src = BbsRightPictures3[0].src1;
		bbsRightPicture[1].src = BbsRightPictures3[0].src2;
		bbsRightPictureSub[0].innerHTML = `<p>${BbsRightPictures3[0].illus1}</p><p>作者：${BbsRightPictures3[0].author1}</p>`;
		bbsRightPictureSub[1].innerHTML = `<p>${BbsRightPictures3[0].illus2}</p><p>作者：${BbsRightPictures3[0].author2}</p>`;

	} else if (bbsIndex === 4) {
		bbsRightPicture[0].src = BbsRightPictures4[0].src1;
		bbsRightPicture[1].src = BbsRightPictures4[0].src2;
		bbsRightPictureSub[0].innerHTML = `<p>${BbsRightPictures4[0].illus1}</p><p>作者：${BbsRightPictures4[0].author1}</p>`;
		bbsRightPictureSub[1].innerHTML = `<p>${BbsRightPictures4[0].illus2}</p><p>作者：${BbsRightPictures4[0].author2}</p>`;

	} else if (bbsIndex === 5) {
		bbsRightPicture[0].src = BbsRightPictures5[0].src1;
		bbsRightPicture[1].src = BbsRightPictures5[0].src2;
		bbsRightPictureSub[0].innerHTML = `<p>${BbsRightPictures5[0].illus1}</p><p>作者：${BbsRightPictures5[0].author1}</p>`;
		bbsRightPictureSub[1].innerHTML = `<p>${BbsRightPictures5[0].illus2}</p><p>作者：${BbsRightPictures5[0].author2}</p>`;

	}
}

let createBbsLi = () => {
	let BbsLi = document.querySelector('.bbs-li');
	BbsLi.innerHTML = '';
	if (bbsIndex === 0) {
		for (let i = 1; i < 9; i++) {
			let html = `<dl>
						<dt>
							<a href="#">${BbsRightPictures0[i].illus}</a>
						</dt>
						<dd>作者：
							<a href="#"> ${BbsRightPictures0[i].author}</a>
						</dd>
					  </dl>
					 `
			BbsLi.innerHTML += html;
		}
	} else if (bbsIndex === 1) {
		for (let i = 1; i < 9; i++) {
			let html = `<dl>
						<dt>
							<a href="#">${BbsRightPictures1[i].illus}</a>
						</dt>
						<dd>作者：
							<a href="#"> ${BbsRightPictures1[i].author}</a>
						</dd>
					  </dl>
					 `
			BbsLi.innerHTML += html;
		}
	} else if (bbsIndex === 2) {
		for (let i = 1; i < 9; i++) {
			let html = `<dl>
						<dt>
							<a href="#">${BbsRightPictures2[i].illus}</a>
						</dt>
						<dd>作者：
							<a href="#"> ${BbsRightPictures2[i].author}</a>
						</dd>
					  </dl>
					 `
			BbsLi.innerHTML += html;
		}
	} else if (bbsIndex === 3) {
		for (let i = 1; i < 9; i++) {
			let html = `<dl>
						<dt>
							<a href="#">${BbsRightPictures3[i].illus}</a>
						</dt>
						<dd>作者：
							<a href="#"> ${BbsRightPictures3[i].author}</a>
						</dd>
					  </dl>
					 `
			BbsLi.innerHTML += html;
		}
	} else if (bbsIndex === 4) {
		for (let i = 1; i < 9; i++) {
			let html = `<dl>
						<dt>
							<a href="#">${BbsRightPictures4[i].illus}</a>
						</dt>
						<dd>作者：
							<a href="#"> ${BbsRightPictures4[i].author}</a>
						</dd>
					  </dl>
					 `
			BbsLi.innerHTML += html;
		}
	} else if (bbsIndex === 5) {
		for (let i = 1; i < 9; i++) {
			let html = `<dl>
						<dt>
							<a href="#">${BbsRightPictures5[i].illus}</a>
						</dt>
						<dd>作者：
							<a href="#"> ${BbsRightPictures5[i].author}</a>
						</dd>
					  </dl>
					 `
			BbsLi.innerHTML += html;
		}
	}
}
createBbs();
createBbsMenu();
changeBbsIndex();
createBbsRight();
createBbsRightPicture();
createBbsLi();