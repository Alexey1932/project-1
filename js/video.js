const cancellFullScreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;



for (let i = 0; i < 4; i++) {
	const videoElemsObj = {
		video: document.getElementById('video-' + i),
		run: document.getElementById('video-run-' + i),
		pause: document.getElementById('video-pause-' + i)
	}
	videoElemsObj.run.onclick = function () {
		videoElemsObj.video.play();
	}
	videoElemsObj.pause.onclick = function () {
		videoElemsObj.video.pause();
	}
	videoElemsObj.video.addEventListener('ended', function () {
		setTimeout(function () {
			videoElemsObj.pause.click();
			cancellFullScreen.call(document);
		}, 900);
	});
}





