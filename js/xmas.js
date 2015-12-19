
var ul = document.getElementById('xmas-friends');
for (var i = ul.children.length; i >= 0; i--) {
	ul.appendChild(ul.children[Math.random() * i | 0]);
}
