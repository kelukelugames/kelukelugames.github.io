var TABLE_ID = "clipsTable"

var clips = ['gUmMBF7uYLQ?start=38&end=58',
	'QiDzcUNolW0?end=81',
	'wNmzm6gv4Vk?start=30&end=61',
	'tlnCsmTpbVg?start=779&end=795',
	'toKK1rX-hkY?start=29&end=55',
	'uK50iI_i_nY?start=123&end=273',
	'_MP5w9yAbgA?start=4&end=139',
	'VU4pP1a8MQc?start=48&end=67',
	'ys0M9u0wQUA?start=1'];

var PREFIX = '<iframe width="560" height="315" src="https://www.youtube.com/embed/';
var POSTFIX = '&version=3" frameborder="0" allowfullscreen></iframe>';

var interval = setInterval(addRow, 1, 1);

function addRow(waitTime) {
	var table = document.getElementById(TABLE_ID);
	var row = table.insertRow();

	var cell1 = row.insertCell();
	var cell2 = row.insertCell();
	cell1.innerHTML = PREFIX + getClip() + POSTFIX;
	cell2.innerHTML = (clips.length > 0) ? (PREFIX + getClip() + POSTFIX) : null;


	clearInterval(interval);
	
	if (clips.length > 0) {
		waitTime = Math.min(waitTime * 10, 500);
		interval = setInterval(addRow, waitTime, waitTime);
	}
}

function getClip() {
	var index = Math.floor(Math.random() * clips.length);
	var temp = clips[index];
	clips[index] = clips[clips.length - 1];
	clips[clips.length - 1] = temp;
	return clips.pop();
}

