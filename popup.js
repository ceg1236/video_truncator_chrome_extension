console.log('popup JS');

document.addEventListener('DOMContentLoaded', () => {
	let truncator_switch = document.getElementById("truncator_switch");

	chrome.storage.local.get('truncator', function(result) {
	  console.log('truncator is ' + result['truncator']);
	  if (result['truncator']) {
	  	truncator_switch.checked = true;
	  } else {
			truncator_switch.checked = false;
		}
	});

	// if ( JSON.parse(localStorage.getItem('truncator')) ) {
	// 	truncator_switch.checked = true;
	// } else {
	// 	truncator_switch.checked = false;
	// }
});

truncator_switch.addEventListener('click', (e) => {
	console.log(e, "click");
	if (truncator_switch.checked) {
		chrome.storage.local.set({'truncator': true}, function(val) {
		  console.log('truncator set to true');
			// localStorage.setItem('truncator', true);
		});

	} else {

		chrome.storage.local.set({'truncator': false}, function(val) {
		  console.log('truncator set to false');
			// localStorage.setItem('truncator', false);
		});
	}
});