const footerItem = [{
	title: '杂志',
	items: ['中国国家地理', '中华遗产', '博物', '杂志订阅']
}, {
	title: '新媒体',
	items: ['中国国家地理网', '中国国家地理官方客户端', '官方微信', '官方微博'],
}, {
	title: '广告合作',
	items: ['杂志广告刊例'],
}, {
	title: '关于我们',
	items: ['成长记忆', '工作计划', '联系我们'],
}, {
	title: '关于网站',
	items: ['版权声明', '隐私条款', '意见反馈', '合作伙伴', '友情链接'],
}]

let createFooter = () => {
	let html = `
	  <div class="wps">
		<div class="footer-one"><ul></ul></div>
		<div class="clear"></div>
		<div class="footer-two"></div>
		<div class="clear"></div>
		<div class="footer-illustration"></div>
	  </div>
	`
	let footer = document.querySelector('.footer');
	footer.innerHTML = html;
}

let createFooterOne = () => {
	let footerOne = document.querySelector('.footer-one>ul');
	footerItem.map((e, index) => {
		console.log(e.items);
		let html1 = ``;
		e.items.map((e, index2) => {
			html1 += `<li><a href="#">${e}</a></li>`;
			//console.log(html1);
		});
		let html2 = `
			<li class="footer-one-li">
				<p>${e.title}</p>
				<ul>${html1}</ul>
			</li>
			`;
		footerOne.innerHTML += html2;
	})

}

let createFooterTwo = () => {
	let html = `
		<div class="footer-logo">
			<img src="../assets/pictures/loglo-footer.jpg"/>
			<div class="footer-icons"></div>
		</div>
		<div class="dingyue">
			<img src="../assets/pictures/cng-dingyue.png" />
			<p>订阅号</p>
		</div>
		<div class="fuwu">
			<img src="../assets/pictures/cng-fuwu.png" />
			<p>服务号</p>
		</div>
	`
	let footerTwo = document.querySelector('.footer-two');
	footerTwo.innerHTML = html;
}

let createFooterIllustrution = () => {
	let html = `<a href="#">Copyright © 2001-2017 Chinese National Geography Press. All rights reserved.

优秀科普网站 京ICP证090072号 京ICP备10014304号-4 京公网安备11010502026082 新出网证（京）字 049号 出版物经营许可证</a>`
	let footerIllustrution = document.querySelector('.footer-illustration');
	footerIllustrution.innerHTML = html;
}
createFooter();
createFooterOne();
createFooterTwo();
createFooterIllustrution();