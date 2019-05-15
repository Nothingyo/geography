const News = [{
	text: '开奖啦！红框封面秀幸运儿，快看你中奖了没'
}, {
	text: '打卡新地标！中国国家地理“红框”落户莫干山、下渚湖'
}]

const
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
			news.style.margin = '-20px 0 0 0';
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

// let createFocusMenu=()=>{
// 	let html=`
// 		<li
// 	`
// }
createContent();
createScrollNews();
createFocus();