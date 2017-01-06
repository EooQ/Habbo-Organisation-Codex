// Write the page's path on your web server.
var Pages = [
"/",
"library.html",
"#",
"admin.html"
]

// Write the name of your company.
var LogoText = "HOC";

// Write the title of the corresponding page.
var Title = [
"Home",
"Organisation Library",
"Contact",
"Admin"
]

var filename = location.pathname.replace(/^.*[\\\/]/, '')

if (LogoText!="") {
	document.write('<p class="logo">'+LogoText+'</p>');
}

var Nav = document.write('<ul class="nav" id="nav">')

for (var i = 0; i < Pages.length; i++) {
	var Href = document.write('<li><a href="'+Pages[i]+'"');
	if (Title[i] == "Admin") {
		document.write(' id="right"')
	}
	document.write('>'+Title[i]+'</a></li>');
}

document.write('<li id="mobilebtn"><span style="float:right;" onclick="mobile()">&#9776</span><li>');
document.write('</ul>');

document.write('<script type="text/javascript">function mobile() {var x = document.getElementById("nav"); if (x.className === "nav") {x.className += " responsive";} else {x.className = "nav";}}</script>')