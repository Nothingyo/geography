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
const BbsRightPicturesSrc = [{
	src1: '../assets/pictures/5b580e60784568878806585_t.jpg',
	src2: '../assets/pictures/5b580e60784568878806585_t.jpg'
}]
const BbsRightPictures = [
	[{
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
	}],
	[{
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
	}],
	[{
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
	}],
	[{
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
	}],
	[{
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
	}],
	[{
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
	}],
	[{
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
]
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
	bbsRightPicture[0].src = BbsRightPicturesSrc[0].src1;
	bbsRightPicture[1].src = BbsRightPicturesSrc[0].src2;
	bbsRightPictureSub[0].innerHTML = `<p>${BbsRightPictures[bbsIndex][0].illus1}</p><p>作者：${BbsRightPictures[bbsIndex][0].author1}</p>`;
	bbsRightPictureSub[1].innerHTML = `<p>${BbsRightPictures[bbsIndex][0].illus2}</p><p>作者：${BbsRightPictures[bbsIndex][0].author2}</p>`;

}

let createBbsLi = () => {
	let BbsLi = document.querySelector('.bbs-li');
	BbsLi.innerHTML = '';
	for (let i = 1; i < 9; i++) {
		let html = `<dl>
						<dt>
							<a href="#">${BbsRightPictures[bbsIndex][i].illus}</a>
						</dt>
						<dd>作者：
							<a href="#"> ${BbsRightPictures[bbsIndex][i].author}</a>
						</dd>
					  </dl>
					 `
		BbsLi.innerHTML += html;
	}
}
createBbs();
createBbsMenu();
changeBbsIndex();
createBbsRight();
createBbsRightPicture();
createBbsLi();