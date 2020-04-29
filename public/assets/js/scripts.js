//Home Page Banner Slide Show

let images = [
	'.banner_img/tc1.jpg',
	'.banner_img/tc2.jpg',
	'.banner_img/tc3.jpg',
	'.banner_img/tc4.jpg',
	'.banner_img/tc5.jpg',
	'.banner_img/tc6.jpg',
	'.banner_img/tc7.jpg',
	'.banner_img/tc8.jpg',
];

let secs = 4;
images.forEach(img => {
	new Image().src = img;
});

function backgroundSeq() {
	window.clearTimeout();
	let k = 0;
	for (let i = 0; i < images.length; i++) {
		setTimeout(() => {
			document.getElementById('banner').style.background =
				'url(' + images[k] + ') no-repeat center center';
			document.getElementById('banner').style.backgroundSize = 'cover';
			// document.getElementById('banner').width = "960";
			// 			document.getElementById('banner').height = "720";

			if (k + 1 === images.length) {
				setTimeout(() => {
					backgroundSeq();
				}, secs * 1000);
			} else {
				k++;
			}
		}, secs * 1000 * i);
	}
}

if (document.getElementById('banner') !== null) {
	backgroundSeq();
}