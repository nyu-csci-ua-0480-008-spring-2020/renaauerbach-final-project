//Home Page Banner Slide Show

let images = [
	'..src/assets/img/tc1.jpg',
	'..src/assets/img/tc2.jpg',
	'..src/assets/img/tc3.jpg',
	'..src/assets/img/tc4.jpg',
	'..src/assets/img/tc5.jpg',
	'..src/assets/img/tc6.jpg',
	'..src/assets/img/tc7.jpg',
	'..src/assets/img/tc8.jpg',
];

let secs = 4;
images.forEach((img) => {
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
backgroundSeq();
