Lister.onshow = Function() {
	If(localStorage.savedDetails) {
		LabelResults.innerHTML = localStorage.savedDetails;
	}
}

ClearDetails.onclick = Function() {
	//localStorage.removeItem("savedDetails");
	//localStorage.clear();
	localStorage.savedDetails = "";
	LabelResults.innerHTML = "";
	console.log(localStorage.savedDetails);
	limit = "";
}

var keynum, lines = 1;
Function limitLines(obj, e) {
	If(window.event) {
		keynum = e.keyCode;
	}
	Else If(e.which) {
		keynum = e.which;
	}

	If(keynum == 13) {
		If(lines == obj.rows) {
			return False;
		}
		Else {
			lines++;
		}
	}

}