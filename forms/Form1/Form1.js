
TextInputName.onkeyup=function(){
    // LabelName.innerHTML = TextInputName.value;
}

ButtonSave.onclick=function(){
    //LabelResults.innerHTML = TextInputName.value + "<br />"+ Textarea1.value;
    var myDetails = TextInputName.value + "<br />"+ Textarea1.value;
    localStorage.savedDetails = myDetails;
    console.log(localStorage);
    //LabelName.value = "Information Saved!";
    $("#Toast1").toast("show");
    Form1.reset();
}
