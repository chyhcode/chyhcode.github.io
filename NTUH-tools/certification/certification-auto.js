var txt, tableER, tableERs, tableWD, tableOP, AccountIDSE, t, today = new Date(),
	timeline = [],
	toER, toWD;

if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
}

timeline.sortByTime = function() {
	var i, j, temp;
	for (i = this.length - 1; i > 0; i--) {
		for (j = i - 1; j >= 0; j--) {
			// 由後排到前
			if (this[i].time > this[j].time) {
				temp = this[i];
				this[i] = this[j];
				this[j] = temp;
			}
		}
	}
	this.visit = date(this[this.length - 1].time);
	console.log(timeline);
}

function nn(n) {
	return n < 10 ? '0' + n : '' + n;
}

function date(d, style) {
	if (style == 'DT') return '，於民國' + (d.getFullYear() - 1911) + '年' + nn(d.getMonth() + 1) + '月' + nn(d.getDate()) + '日' + nn(d.getHours()) + '時' + nn(d.getMinutes()) + '分';
	else if (style == 'D') return '，於民國' + (d.getFullYear() - 1911) + '年' + nn(d.getMonth() + 1) + '月' + nn(d.getDate()) + '日';
	else return d.getFullYear() + '/' + nn(d.getMonth() + 1) + '/' + nn(d.getDate());
}

if (tableWD = document.getElementById('NTUHWeb1_dgLogPatTransferBed')) {
	txt = '檢測到住院資訊，預設今辦明出...\r\n';
	// AccountIDSE = location.search.match(/AccountIDSE=([^&]+)/)[1]; // AccountIDSE=21T07409232
	AccountIDSE = '21T07325711';
	tableWD.querySelectorAll('tr').forEach(function(tr) {
		// 帳號 床號 起日 迄日
		if (tr.cells[0].innerText == AccountIDSE) {
			timeline.push({
				time: new Date(tr.cells[2].innerText),
				style: 'D',
				event: (tr.cells[1].innerText.match(/01A1|03B |03C |03D1|04A2|04B1|04B2|04D1|06PE|08PE|0PII|0PNI|5CVI/)) ? 'ICU' : 'WD',
				sentance: ''
			});
		}
	});

	// 今辦明出
	t = new Date();
	t.setDate(t.getDate() + 1);
	timeline.push({
		time: t,
		style: 'D',
		event: 'MBD',
		sentance: '出院，出院後宜持續門診追蹤治療。'
	});
	timeline.sortByTime();

	if (tableER = document.getElementById('NTUHWeb1_gvwStatusHistory')) {
		txt += '檢測到急診資訊，請確認所展開資料為"急診續轉住院"\r\n';
		// 檢傷, 已離部, 住院
		// 動向 暫留床 異動人員 修改時間
		t = new Date(tableER.rows[1].cells[3].innerText);
		toER = tableER.rows[1].cells[3].innerText.slice(0, 10);
		toWD = tableER.rows[tableER.rows.length - 1].cells[3].innerText.slice(0, 10);
		document.querySelectorAll('#NTUHWeb1_gvwEmgHistory tr').forEach(function(tr) {
			// 姓名 病歷號 科別 帳號 4來診日期 5離部日期 6離部動向
			if (tr.cells[4].innerText == toER &&
				tr.cells[5].innerText == toWD &&
				tr.cells[6].innerText.indexOf('住院') != -1 &&
				toWD == timeline.visit
			) {
				timeline.push({
					time: t,
					style: 'DT',
					event: 'ER',
					sentance: ''
				});
				timeline.sortByTime();
			}
		});
	}
	else {
		txt += '未檢測到急診資訊，將自動略過...\r\n若欲帶入急診資訊，請展開"該病患之急診參考資料"、點選"病歷號"展開詳細時間，再重新使用小工具...\r\n';
	}

	if (tableOP = document.getElementById('NTUHWeb1_dgOpScheduleData')) {
		txt += '檢測到手術資訊。\r\n注意!!手術無時間資訊，小心與轉床資訊前後順序';
		tableOP.querySelectorAll('tr.tableText, tr.tableText2').forEach(function(tr) {
			// 日期 病房 診斷 術式
			t = tr.cells[0].innerText; // 2020/09/14 or 09/14
			if (!t.match(/[0-9]{4}/)) {
				t = today.getFullYear() + '/' + t;
			}
			t += ' 11:59:59';

			if (t > timeline.visit) {
				timeline.push({
					time: new Date(t),
					style: 'D',
					event: 'OP',
					sentance: '接受 ' + tr.cells[3].innerText;
				});
			}
		});
		timeline.sortByTime();
	}
	else {
		txt += '未檢測到手術資訊，將自動略過...\r\n若欲帶入手術資訊，請展開"該病患之手術排程參考資料"，再重新使用小工具...\r\n';
	}

	// 病患因上述疾病，
	txt += '病患因上述疾病';
	// ，於民國110年月日至本院一般病房住院
	// ，於民國110年月日時分至本院急診就診並留觀待床
	// ，於民國110年月日轉至一般病房[住院]
	// ，於民國110年月日轉至加護病房
	// ，於民國110年月日接受
	// ，於民國110年月日出院，出院後宜持續門診追蹤治療。
}
else {
	txt = '未檢測到住院資訊，無法使用小工具...\r\n請展開"該病患之住院參考資料"，再重新使用小工具...\r\n';
}