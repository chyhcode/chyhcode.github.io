// javascript:
if (location.pathname != '/WebApplication/Clinics/DiagCertificate_New.aspx')
	open('http://hisaw.ntuh.gov.tw/WebApplication/Clinics/DiagCertificate_New.aspx' + location.search, 'DiagCertificate_New');
else if (document.getElementById('NTUHWeb1_InstructionSetItem')) {
	if (window.NodeList && !NodeList.prototype.forEach) {
		NodeList.prototype.forEach = Array.prototype.forEach;
	}

	function qFor(s, f) {
		document.querySelectorAll(s).forEach(f);
	}

	function nn(n) {
		return n < 10 ? '0' + n : '' + n;
	}

	function dateStr(d, addTime) {
		d = new Date(d);
		return '於民國' + (d.getFullYear() - 1911) + '年' + nn(d.getMonth() + 1) + '月' + nn(d.getDate()) + '日' + (addTime ? nn(d.getHours()) + '時' + nn(d.getMinutes()) + '分' : '');
	}

	function createLink(wrap, t) {
		var a = document.createElement('a');
		a.innerText = t;
		a.style = 'font-weight: bold; font-size: 16px;';
		a.href = 'javascript: document.getElementById(\"NTUHWeb1_InstructionSetItem\").value += \"' + t + '\"; undefined;';
		wrap.innerText = '';
		wrap.bmklet = true;
		return wrap.appendChild(a);
	}

	var WDtxt = ['至本院一般病房住院，', '轉至一般病房住院，', '轉至加護病房，', '轉至一般病房，'],
		ref = document.querySelector('#NTUHWeb1_gvwStatusHistory tr:nth-child(2) > td:nth-child(4)');
	ref && !ref.bmklet && createLink(ref, dateStr(ref.innerText, true) + '至本院急診就診並留觀待床，');

	qFor('#NTUHWeb1_dgLogPatTransferBed [class^=\"tableText\"] td:nth-child(3)', function(td) {
		!td.bmklet && createLink(td, dateStr(td.innerText));
	});

	ref = new Date();
	qFor('#NTUHWeb1_dgOpScheduleData tr[class^=\"tableText\"] td:nth-child(1)', function(td) {
		!td.bmklet && createLink(td, dateStr(td.innerText.length == 5 ? (ref.getFullYear() + '/' + td.innerText) : td.innerText) + '接受[術式]，');
	});

	qFor('[id$=\"lblChartNo\"]', function(a) {
		a.innerText = '展開檢傷時間';
		a.style = 'font-weight: bold; font-size: 16px;';
	});

	ref.setDate(ref.getDate() + 1);
	WDtxt.push(dateStr(ref) + '出院，出院後宜持續門診追蹤治療。');
	WDtxt.forEach(function(t) {
		document.getElementById('NTUHWeb1_dgLogPatTransferBed').parentNode.appendChild(createLink(document.createElement('div'), t).parentNode);
	});

	document.getElementById('NTUHWeb1_InstructionSetItem').value = '病患因上述疾病，';
	alert('診斷書小工具已開啟!');
}
else alert('此畫面非診斷書開立畫面!');


// 病患因上述疾病，
// 於民國年月日
// 至本院急診就診並留觀待床，

// 病患因上述疾病，
// 於民國年月日
// 至本院一般病房住院，
// 轉至一般病房住院，
// 轉至加護病房，
// 轉至一般病房，
// 出院，出院後宜持續門診追蹤治療。

// 於民國年月日接受