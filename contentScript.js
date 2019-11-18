chrome.storage.local.get('truncator', function(result) {
	if (result['truncator']) {
		console.log('TRUNCATOR');
		if (document.getElementsByTagName("video")) {
			let video = document.getElementsByTagName('video')[0];
			let duration = video.duration;
			let timeCheck = setInterval( () => {
				if (video.currentTime + 10 > duration) {
					video.currentTime += 10;
					console.log('TRUNCATE');
					clearInterval(timeCheck);
				}
			}, 1000);
		}
	}
});
