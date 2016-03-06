var threadList=new Array();
var previousCommentFlag=false;
var commentList=new Array();
var verifiedAccountIcon='<img src="img/verified.png">';
var commentObject={author:'Phong123'+verifiedAccountIcon,content:"I'm coming. Be there in 5"};
commentList.push(commentObject);


var threads = []

$(document).ready(function(){
    $("#addNewThread").click(checkCookie);
});


function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}


function displayComment(popupContentArea){
	
	for (var i=0;i<commentList.length;i++){

		messageContent=commentList[i].content;
		author=commentList[i].author;

		popupContentArea.innerHTML=popupContentArea.innerHTML+"<div class='previouscomment'>"+
		"<div class='commentcontent'>"+messageContent+"</div>"+
		"<div class='commentauthor'>"+author+"</div>"
		+"</div>";
	}


}

function clearContentOfArea(popupContentArea){
	popupContentArea.innerHTML='';
}

function appendTextAreaandRespondButton(popupContentArea){
	popupContentArea.innerHTML=popupContentArea.innerHTML+'<textarea id="newrespond" rows="5" cols="80"></textarea><br/>'+
			'<input type="submit" value="Respond" onClick="addRespond(); return false;"></input>';
}

function generateCommentSection(){

	if (previousCommentFlag==false){
		var popupContentArea=document.getElementById('popupcontent');

		clearContentOfArea(popupContentArea);

		displayComment(popupContentArea);

		appendTextAreaandRespondButton(popupContentArea);

		previousCommentFlag=true;
	}
	else{
		clearContentOfArea(popupContentArea);
	}

}

function addRespond() {
	addRespondToList();

	previousCommentFlag=false;
	generateCommentSection();
}

function addRespondToList(){
	var newRespondValue=document.getElementById('newrespond').value;
	var author="Phong123"+verifiedAccountIcon;

	var newCommentObject={content:newRespondValue,author:this.author};
	commentList.push(newCommentObject);
}