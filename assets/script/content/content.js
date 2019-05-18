const News = [{
	text: '开奖啦！红框封面秀幸运儿，快看你中奖了没'
}, {
	text: '打卡新地标！中国国家地理“红框”落户莫干山、下渚湖'
}]

const focusMenu = [{
	title: '柴达木PK火星',
	description: '火星上是否有生命？',
	add: ''
}, {
	title: '湖北（下）',
	description: '“江湖老大”是湖北',
	add: ''
}, {
	title: '入藏八线',
	description: '八条优选进藏路线',
	add: ''
}, {
	title: '大变局',
	description: '兴全基金',
	add: '中国国家地理大讲堂'
}, {
	title: '发现西藏',
	description: '100个最美景观拍摄地',
	add: ''
}]

const focusPictures0 =
	[{
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}]
const focusPictures1 =
	[{
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}]
const focusPictures2 =
	[{
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}]
const focusPictures3 =
	[{
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}]
const focusPictures4 =
	[{
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}, {
		src: '../assets/pictures/5c4854e1301075g03932643.jpg',
		illus: ''
	}]

let createContent = () => {
	let html = `
		<div class="ad">
		  <a href="#">
		    <img src="../assets/pictures/0f000FhHsEM_E2crnIsPjf.jpg" />
		  </a>
		 </div>
		<div class="scroll-news"></div>
		<div class="focus"></div>
		<div class="bbs"></div>
		<div class="landscape"></div>
		<div class="popularize"></div>
		<div class="official"></div>
		<div class="contributions"></div>
	`
	let content = document.querySelector('.content');
	content.innerHTML = html;
}

let createScrollNews = () => {
	let html = `
		<div class="news">
		  <b>新闻资讯：</b><a href="#">${News[1].text}</a>
		  <b>新闻资讯：</b><a href="#">${News[0].text}</a>
		</div>
	`
	scrollNews = document.querySelector('.scroll-news');
	scrollNews.innerHTML = html;
	let flag = true;
	let scroll = setInterval(() => {
		let news = document.querySelector('.news');
		if (flag === true) {
			news.style.margin = '-21px 0 0 0';
			flag = false;
		} else {
			news.style.margin = '0px';
			flag = true;
		}
	}, 5000);

}

let createFocus = () => {
	let html = `
		<div class="left">
		  <div class="subtitle">
			<span>焦点</span>
			<br/>
			<span class="small">FOCUS</span>
		  </div>
		  <ul class="menu-gallery"></ul>
		</div>
		<div class="right"></div>
	`
	let focus = document.querySelector('.focus');
	focus.innerHTML = html;
}

let createFocusMenu = () => {
	let menuGallery = document.querySelector('.menu-gallery');
	focusMenu.map((e, index) => {
		if (index === 0) {
			let html = `
			<li class="active">
			  <h3 class="title">${e.title}</h3>
			  <span class="description">${e.description}</span>
			  <span class="add">${e.add}</span>
			</li>
		`
			menuGallery.innerHTML += html;
		} else {
			let html = `
			<li>
			  <h3 class="title">${e.title}</h3>
			  <span class="description">${e.description}</span>
			  <span class="add">${e.add}</span>
			</li>
		`
			menuGallery.innerHTML += html;
		}
	})
}
let focusMenuIndex = 0;
let addFocusMenuClick = () => {
	let menuLi = document.querySelectorAll('.menu-gallery li');
	menuLi.forEach((e, index) => {
		e.onclick = () => {
			let focusSliderPage = document.querySelector('.focus-slider-page ul');
			menuLi[focusMenuIndex].className = '';
			e.className = 'active';
			focusMenuIndex = index;
			createFocusSliderPictureAndPage();
			focusSliderPage.style.margin = "0 auto";
		}
	})
}

let createFocusRight = () => {
	let html = `
		<div class="focus-slider-picture"><ul></ul></div>
		<div class="focus-slider-page"><ul></ul></div>
	`
	let right = document.querySelector('.right');
	right.innerHTML = html;
}

let createFocusSliderPictureAndPage = () => {
	let focusSliderPicture = document.querySelector('.focus-slider-picture ul');
	let focusSliderPage = document.querySelector('.focus-slider-page ul');
	focusSliderPicture.innerHTML = '';
	focusSliderPage.innerHTML = '';
	if (focusMenuIndex === 0) {
		for (let i = 0; i < focusPictures0.length; i++) {
			let html = `
			<li><img src="${focusPictures0[i].src}"/></li>
		`
			focusSliderPicture.innerHTML += html;
			let html2 = `<li><img src="${focusPictures0[i].src}" /></li>`
			focusSliderPage.innerHTML += html2;

		}
		focusSliderPicture.style.width = focusPictures0.length * 744 + "px";
		focusSliderPage.style.width = focusPictures0.length * 90 + "px";
	} else if (focusMenuIndex === 1) {
		for (let i = 0; i < focusPictures1.length; i++) {
			let html = `
			<li><img src="${focusPictures1[i].src}"/></li>
		`
			focusSliderPicture.innerHTML += html;
			let html2 = `<li><img src="${focusPictures1[i].src}" /></li>`
			focusSliderPage.innerHTML += html2;

		}
		focusSliderPicture.style.width = focusPictures1.length * 744 + "px";
		focusSliderPage.style.width = focusPictures1.length * 90 + "px";
	} else if (focusMenuIndex === 2) {
		for (let i = 0; i < focusPictures2.length; i++) {
			let html = `
			<li><img src="${focusPictures2[i].src}"/></li>
		`
			focusSliderPicture.innerHTML += html;
			let html2 = `<li><img src="${focusPictures2[i].src}" /></li>`
			focusSliderPage.innerHTML += html2;

		}
		focusSliderPicture.style.width = focusPictures2.length * 744 + "px";
		focusSliderPage.style.width = focusPictures2.length * 90 + "px";
	} else if (focusMenuIndex === 3) {
		for (let i = 0; i < focusPictures3.length; i++) {
			let html = `
			<li><img src="${focusPictures3[i].src}"/></li>
		`
			focusSliderPicture.innerHTML += html;
			let html2 = `<li><img src="${focusPictures3[i].src}" /></li>`
			focusSliderPage.innerHTML += html2;

		}
		focusSliderPicture.style.width = focusPictures3.length * 744 + "px";
		focusSliderPage.style.width = focusPictures3.length * 90 + "px";
	} else {
		for (let i = 0; i < focusPictures4.length; i++) {
			let html = `
			<li><img src="${focusPictures4[i].src}"/></li>
		`
			focusSliderPicture.innerHTML += html;
			let html2 = `<li><img src="${focusPictures4[i].src}" /></li>`
			focusSliderPage.innerHTML += html2;

		}
		focusSliderPicture.style.width = focusPictures4.length * 744 + "px";
		focusSliderPage.style.width = focusPictures4.length * 90 + "px";
	}
	let focusSliderPageLi = document.querySelectorAll('.focus-slider-page li');
	focusSliderPageLi[0].className = "show";
	addFocusSliderPage();
}
let PageIndex = 0;
let addFocusSliderPage = () => {
	PageIndex = 0;
	let focusSliderPage = document.querySelector('.focus-slider-page ul');
	let focusSliderPageLi = document.querySelectorAll('.focus-slider-page li');
	let focusSliderPicture = document.querySelector('.focus-slider-picture ul');
	focusSliderPicture.style.margin = "0 0 0 " + (-744) * PageIndex + "px";
	focusSliderPageLi.forEach((e, index) => {
		e.onclick = () => {
			focusSliderPageLi[PageIndex].className = '';
			PageIndex = index;
			focusSliderPageLi[PageIndex].className = 'show';
			focusSliderPage.style.margin = "0";
			focusSliderPicture.style.margin = "0 0 0 " + (-744) * PageIndex + "px";
		}
	})
}


createContent();
createScrollNews();
createFocus();
createFocusMenu();
addFocusMenuClick();
createFocusRight();
createFocusSliderPictureAndPage();