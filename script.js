function loadNav()
{
	let file = "nav.html";
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", file, false);
	xhttp.send();

	document.getElementById("nav").innerHTML = xhttp.responseText;
}

function loadFooter()
{
	let file = "footer.html";
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", file, false);
	xhttp.send();

	document.getElementById("footer").innerHTML = xhttp.responseText;
}

function agendaOnResize()
{
	let speakers = document.getElementsByName("speaker");
	for (i = 0; i < speakers.length; i++)
	{
		if (window.innerWidth < 992)
			speakers[i].classList.add("flex-column");
		else
			speakers[i].classList.remove("flex-column");
	}
}

function scrollToTarget(event, id, offset) {
	event.preventDefault();
	let target = document.getElementById(id);
	let navHeight = 56

	window.scrollTo({
		top: target.offsetTop - (navHeight + offset),
		behavior: "smooth"
	});
}

$(document).ready(function() {
	loadNav();
	loadFooter();

	$('[data-toggle="popover"]')
		.popover({html: true}) // 啟用 popover（內文啟用 html）
		.click(function(event) { event.preventDefault(); }); // 取消事件的默認動作（防止點擊後跑回頁面上方）
});
