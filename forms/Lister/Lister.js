Lister.onshow = function() {
	if(localStorage.savedDetails) {
		LabelResults.innerHTML = localStorage.savedDetails;
	}
}

ClearDetails.onclick = function() {
	//localStorage.removeItem("savedDetails");
	//localStorage.clear();
	localStorage.savedDetails = "";
	LabelResults.innerHTML = "";
	console.log(localStorage.savedDetails);
	limit = "";
}

var keynum, lines = 1;
function limitLines(obj, e) {
	if(window.event) {
		keynum = e.keyCode;
	}
	else if(e.which) {
		keynum = e.which;
	}

	if(keynum == 13) {
		if(lines == obj.rows) {
			return False;
		}
		else {
			lines++;
		}
	}

}