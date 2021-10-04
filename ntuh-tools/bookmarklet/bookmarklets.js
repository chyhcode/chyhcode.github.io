// https://cdn.jsdelivr.net/gh/chyhcode/chyhcode.github.io@main/ntuh-tools/bookmarklet/bookmarklets.js
var bookmarklet = {
	openLink: [{
		name: 'ConfirmDiagnosisOrder',
		title: '主',
		description: '',
		CommonUsed: 1,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/ConfirmDiagnosisOrder.aspx' + location.search, 'ConfirmDiagnosisOrder');
		},
	}, {
		name: 'PatientBriefMedicalRecord',
		title: '醫療簡歷',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/OtherIndependentProj/PatientBasicInfoEdit/SimpleInfoShowUsingPlaceHolder.aspx' + location.search.replace(/&Func=[A-Za-z]+/, '') + '&Func=PatientBriefMedicalRecord', 'PatientBriefMedicalRecord');
		},
	}, {
		name: 'PatientMedicalRecordListQuery',
		title: '史',
		description: '',
		CommonUsed: 1,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/OtherIndependentProj/PatientBasicInfoEdit/PatientMedicalRecordListQuery.aspx' + location.search, 'PatientMedicalRecordListQuery');
		},
	}, {
		name: 'MedicationHistory',
		title: '藥史',
		description: '',
		CommonUsed: 1,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/OtherIndependentProj/MedicationHistory/Default.aspx' + location.search, 'MedicationHistory');
		},
	}, {
		name: 'AdmissionNote',
		title: '入摘紀錄',
		description: '未完成',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/OtherIndependentProj/PatientBasicInfoEdit/SimpleInfoShowUsingPlaceHolder.aspx' + location.search.replace(/&Func=[A-Za-z]+/, '') + '&Func=AdmissionNote', 'AdmissionNote');
		},
	}, {
		name: 'DischargeSummaryByPersonID',
		title: '出摘紀錄',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/OtherIndependentProj/PatientBasicInfoEdit/SimpleInfoShowUsingPlaceHolder.aspx' + location.search.replace(/&Func=[A-Za-z]+/, '') + '&Func=DischargeSummaryByPersonID', 'DischargeSummaryByPersonID');
		},
	}, {
		name: 'OPNoteList',
		title: '手術紀錄',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/OtherIndependentProj/PatientBasicInfoEdit/SimpleInfoShowUsingPlaceHolder.aspx' + location.search.replace(/&Func=[A-Za-z]+/, '') + '&Func=OPNoteList', 'OPNoteList');
		},
	}, {
		name: 'MainMenu_V2',
		title: '護理作業',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Nursing/MainMenu_V2.aspx' + location.search, 'MainMenu_V2');
		},
	}, {
		name: 'VitalSign_TPR',
		title: '生',
		description: '',
		CommonUsed: 2,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Nursing/VitalSign_TPR.aspx' + location.search, 'VitalSign_TPR');
		},
	}, {
		name: 'DrugGivenNote',
		title: '給藥紀錄',
		description: '',
		CommonUsed: 1,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/DrugGivenNote.aspx' + location.search, 'DrugGivenNote');
		},
	}, {
		name: 'CatheterCare',
		title: '管路',
		description: '',
		CommonUsed: 1,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Nursing/CatheterCare.aspx' + location.search, 'CatheterCare');
		},
	}, {
		name: 'Estimate_IO_Summery',
		title: 'IO',
		description: '',
		CommonUsed: 1,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Nursing/Estimate_IO_Summery.aspx' + location.search, 'Estimate_IO_Summery');
		},
	}, {
		name: 'WorkList_ListCheck_V2',
		title: '治療及處置紀錄',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Nursing/WorkList_ListCheck_V2.aspx' + location.search, 'WorkList_ListCheck_V2');
		},
	}, {
		name: 'WorkList_OrderCheck',
		title: '醫囑簽收',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Nursing/WorkList_OrderCheck.aspx' + location.search, 'WorkList_OrderCheck');
		},
	}, {
		name: 'NursingProgressNote',
		title: '護程',
		description: '',
		CommonUsed: 1,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Nursing/NursingProgressNote.aspx' + location.search, 'NursingProgressNote');
		},
	}, {
		name: 'OffDutyNurV2',
		title: '護交',
		description: '',
		CommonUsed: 2,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/OffDutyNurV2.aspx' + location.search, 'OffDutyNurV2');
		},
	}, {
		name: 'Problem_PlanNote',
		title: '護理問題與措施紀錄',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Nursing/Problem_PlanNote.aspx' + location.search, 'Problem_PlanNote');
		},
	}, {
		name: 'OrderDisplay',
		title: '囑',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/OrderDisplay.aspx' + location.search, 'OrderDisplay');
		},
	}, {
		name: 'OrderScheduling',
		title: '檢排',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/OtherIndependentProj/PatientOrderScheduling/OrderScheduling.aspx' + location.search, 'OrderScheduling');
		},
	}, {
		name: 'CreateConsentForm',
		title: '同意書',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/ConsentFormWeb/CreateConsentForm.aspx' + location.search, 'CreateConsentForm');
		},
	}, {
		name: 'ChemotherapyMainPage',
		title: '黃單',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/OtherIndependentProj/Chemotherapy/MainPage.aspx' + location.search, 'ChemotherapyMainPage');
		},
	}, {
		name: 'OrderOpSchedule',
		title: '術排',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/OPManagement/OrderOpSchedule.aspx' + location.search, 'OrderOpSchedule');
		},
	}, {
		name: 'MedicalReportContent',
		title: '報',
		description: '',
		CommonUsed: 2,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/ElectronicMedicalReportViewer/MedicalReportContent.aspx' + location.search, 'MedicalReportContent');
		},
	}, {
		name: 'PACSImageShowList2',
		title: 'PACS',
		description: '',
		CommonUsed: 2,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/OtherIndependentProj/PatientBasicInfoEdit/PACSImageShowList2.aspx' + location.search, 'PACSImageShowList2');
		},
	}, {
		name: 'DWHistoricalLabReport',
		title: '歷史報告',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/ElectronicMedicalReportViewer/ExternalPage/DWHistoricalLabReport.aspx' + location.search + '&hfdPersonid=' + (location.search.match(/PersonID=([a-zA-Z][0-9]{9})/)[1] || ''), 'DWHistoricalLabReport');
		},
	}, {
		name: 'RISReport',
		title: '影醫報告',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/OtherIndependentProj/PatientBasicInfoEdit/SimpleInfoShowUsingPlaceHolder.aspx' + location.search.replace(/&Func=[A-Za-z]+/, '') + '&Func=RISReport', 'RISReport');
		},
	}, {
		name: 'SonoPERReport',
		title: '超音波報告',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/OtherIndependentProj/PatientBasicInfoEdit/SimpleInfoShowUsingPlaceHolder.aspx' + location.search.replace(/&Func=[A-Za-z]+/, '') + '&Func=SonoPERReport', 'SonoPERReport');
		},
	}, {
		name: 'InsertProgressNoteContent',
		title: '程',
		description: '',
		CommonUsed: 2,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/InsertProgressNoteContent.aspx' + location.search, 'InsertProgressNoteContent');
		},
	}, {
		name: 'ProgressNote',
		title: '程s',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/OtherIndependentProj/PatientBasicInfoEdit/SimpleInfoShowUsingPlaceHolder.aspx' + location.search.replace(/&Func=[A-Za-z]+/, '') + '&Func=ProgressNote', 'ProgressNote');
		},
	}, {
		name: 'DoctorEnterOrder',
		title: '診',
		description: '',
		CommonUsed: 2,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/DoctorEnterOrder.aspx' + location.search, 'DoctorEnterOrder');
		},
	}, {
		name: 'MedicationV2',
		title: '處',
		description: '',
		CommonUsed: 2,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/MedicationV2.aspx' + location.search, 'MedicationV2');
		},
	}, {
		name: 'DoctorDietMain',
		title: '食',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/DoctorDietMain.aspx' + location.search, 'DoctorDietMain');
		},
	}, {
		name: 'NotifyOtherDoctor',
		title: '照',
		description: '',
		CommonUsed: 1,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/NotifyOtherDoctor.aspx' + location.search, 'NotifyOtherDoctor');
		},
	}, {
		name: 'BloodStockCreateOrder',
		title: '血',
		description: '',
		CommonUsed: 1,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/BloodStock/Pages/His/CreateOrder.aspx' + location.search, 'BloodStockCreateOrder');
		},
	}, {
		name: 'SimpleShowiframePage',
		title: 'EMR',
		description: '',
		CommonUsed: 1,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/OtherIndependentProj/PatientBasicInfoEdit/SimpleShowiframePage.aspx' + location.search, 'SimpleShowiframePage');
		},
	}, {
		name: 'InsertAdmissionNoteContent',
		title: '入',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/InsertAdmissionNoteContent.aspx' + location.search, 'InsertAdmissionNoteContent');
		},
	}, {
		name: 'EnterTakeCarePersonInfo',
		title: '績效',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/EnterTakeCarePersonInfo.aspx' + location.search, 'EnterTakeCarePersonInfo');
		},
	}, {
		name: 'ConfirmDiagnosisOrder',
		title: '身分',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/ConfirmDiagnosisOrder.aspx' + location.search, 'ConfirmDiagnosisOrder');
		},
	}, {
		name: 'DoctorPrePareDischargeV2',
		title: '準',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/DoctorPrePareDischargeV2.aspx' + location.search, 'DoctorPrePareDischargeV2');
		},
	}, {
		name: 'DiagCertificate_New',
		title: '證',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://hisaw.ntuh.gov.tw/WebApplication/Clinics/DiagCertificate_New.aspx' + location.search, 'DiagCertificate_New');
		},
	}, {
		name: 'ClinicRoomAdministration',
		title: '約',
		description: '未完成',
		CommonUsed: 0,
		func: function() {
			open('http://hisaw.ntuh.gov.tw/WebApplication/Clinics/ClinicRoomAdministration.aspx' + location.search + '?I' + accountidse[0], 'ClinicRoomAdministration');
		},
	}, {
		name: 'InsertDisChargeNoteContent',
		title: '出',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/InsertDisChargeNoteContent.aspx' + location.search, 'InsertDisChargeNoteContent');
		},
	}, {
		name: 'FutureSchedule',
		title: '未來',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/OtherIndependentProj/PatientBasicInfoEdit/SimpleInfoShowUsingPlaceHolder.aspx' + location.search.replace(/&Func=[A-Za-z]+/, '') + '&Func=FutureSchedule', 'FutureSchedule');
		},
	}, {
		name: 'EmergencyConfirmDiagnosisOrder',
		title: '急診',
		description: '',
		CommonUsed: 0,
		func: function() {
			open('http://ehisaw.ntuh.gov.tw/WebApplication/Emergency/EmergencyConfirmDiagnosisOrder.aspx', 'EmergencyConfirmDiagnosisOrder');
		},
	}, {
		name: 'EBoardMainPage',
		title: '電子白板',
		description: '',
		CommonUsed: 1,
		func: function() {
			open('http://ihisaw.ntuh.gov.tw/WebApplication/EBoard/EBoardMainPage.aspx' + location.search, 'EBoardMainPage');
		},
	}, ],
	special: [{
		name: 'DiagCertificate',
		title: '診斷證明書小工具',
		description: '在診斷書開立頁面使用，將急診、住院、手術日期變成民國年，附帶常用語句"病患因上述疾病"、"至本院急診就診並留觀待床"、"轉至一般病房住院"...等等片語，以及並且支援點擊帶入文字。須注意，急診就診時間須點開"病人急診歷史動向"中的"病歷號"展開幾分幾秒。若小工具因為portal刷新被洗掉，例如使用系統內建片語、展開急診動向等，再重新使用小工具即可。若在其他頁面使用，將自動跳轉至診斷書頁面。',
		func: function() {
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
		},
		funcStr: "javascript: if(location.pathname!='/WebApplication/Clinics/DiagCertificate_New.aspx')open('http://hisaw.ntuh.gov.tw/WebApplication/Clinics/DiagCertificate_New.aspx'+location.search,'DiagCertificate_New');else if(document.getElementById('NTUHWeb1_InstructionSetItem')){if(window.NodeList&&!NodeList.prototype.forEach){NodeList.prototype.forEach=Array.prototype.forEach;}function qFor(s,f){document.querySelectorAll(s).forEach(f);}function nn(n){return n<10?'0'+n:''+n;}function dateStr(d,addTime){d=new Date(d);return'於民國'+(d.getFullYear()-1911)+'年'+nn(d.getMonth()+1)+'月'+nn(d.getDate())+'日'+(addTime?nn(d.getHours())+'時'+nn(d.getMinutes())+'分':'');}function createLink(wrap,t){var a=document.createElement('a');a.innerText=t;a.style='font-weight: bold; font-size: 16px;';a.href='javascript: document.getElementById(\"NTUHWeb1_InstructionSetItem\").value += \"'+t+'\"; undefined;';wrap.innerText='';wrap.bmklet=true;return wrap.appendChild(a);}var WDtxt=['至本院一般病房住院，','轉至一般病房住院，','轉至加護病房，','轉至一般病房，'],ref=document.querySelector('#NTUHWeb1_gvwStatusHistory tr:nth-child(2) > td:nth-child(4)');ref&&!ref.bmklet&&createLink(ref,dateStr(ref.innerText,true)+'至本院急診就診並留觀待床，');qFor('#NTUHWeb1_dgLogPatTransferBed [class^=\"tableText\"] td:nth-child(3)',function(td){!td.bmklet&&createLink(td,dateStr(td.innerText));});ref=new Date();qFor('#NTUHWeb1_dgOpScheduleData tr[class^=\"tableText\"] td:nth-child(1)',function(td){!td.bmklet&&createLink(td,dateStr(td.innerText.length==5?(ref.getFullYear()+'/'+td.innerText):td.innerText)+'接受[術式]，');});qFor('[id$=\"lblChartNo\"]',function(a){a.innerText='展開檢傷時間';a.style='font-weight: bold; font-size: 16px;';});ref.setDate(ref.getDate()+1);WDtxt.push(dateStr(ref)+'出院，出院後宜持續門診追蹤治療。');WDtxt.forEach(function(t){document.getElementById('NTUHWeb1_dgLogPatTransferBed').parentNode.appendChild(createLink(document.createElement('div'),t).parentNode);});document.getElementById('NTUHWeb1_InstructionSetItem').value='病患因上述疾病，';alert('診斷書小工具已開啟!');}else alert('此畫面非診斷書開立畫面!');",
	}, {
		name: 'LongGreenSheet',
		title: '綠單不換行小工具',
		description: '在綠單使用，原本八格會換行的綠單，導致剛好跨行的資料不好看，此小工具會將綠單合併成一長串。',
		func: function() {
			var d, fs, t, i, j, k;
			d = document.getElementById('Reportifrm');
			if (d) {
				d.style.height = '90vh';
				d = d.contentDocument;
			}
			else d = document;

			fs = d.querySelectorAll('fieldset.GroupHead');
			for (k = 0; k < fs.length; k++) {
				t = fs[k].querySelectorAll('table.GreenSheet');
				for (var i = 1; i < t.length; i++) {
					for (var j = 0; j < t[i].rows.length; j++) {
						if (j != 1) t[i].rows[j].removeChild(t[i].rows[j].firstElementChild);
						t[0].rows[j].innerHTML += t[i].rows[j].innerHTML;
					}
					fs[k].removeChild(t[i]);
				}
				fs[k].appendChild(d.createElement('div')).appendChild(t[0]);
			}

			if (!d.getElementById('GreenSheetOverflow')) {
				s = d.createElement('style');
				s.id = 'GreenSheetOverflow';
				s.innerText = '.GroupHead{min-inline-size:unset}.GroupHead>div{overflow-x:auto}.GreenSheetTitle,.GreenSheet{table-layout:fixed;margin:0}.GreenSheet th{min-width:87px}.GreenSheet tbody tr>:first-child,.GreenSheet .LEFTTOP{min-width:150px;position:sticky;left:0}';
				d.body.appendChild(s);
			}

			d = d.getElementById('rReportTab_lsvReportBody_ctrl0_ctl00_ReportTitle1_contentTemplatePlaceholder');
			if (d) d.style.border = 'none';
			undefined;
		},
		funcStr: "javascript: var d,fs,t,i,j,k;d=document.getElementById('Reportifrm');if(d){d.style.height='90vh';d=d.contentDocument;}else d=document;fs=d.querySelectorAll('fieldset.GroupHead');for(k=0;k<fs.length;k++){t=fs[k].querySelectorAll('table.GreenSheet');for(var i=1;i<t.length;i++){for(var j=0;j<t[i].rows.length;j++){if(j!=1)t[i].rows[j].removeChild(t[i].rows[j].firstElementChild);t[0].rows[j].innerHTML+=t[i].rows[j].innerHTML;}fs[k].removeChild(t[i]);}fs[k].appendChild(d.createElement('div')).appendChild(t[0]);}if(!d.getElementById('GreenSheetOverflow')){s=d.createElement('style');s.id='GreenSheetOverflow';s.innerText='.GroupHead{min-inline-size:unset}.GroupHead>div{overflow-x:auto}.GreenSheetTitle,.GreenSheet{table-layout:fixed;margin:0}.GreenSheet th{min-width:87px}.GreenSheet tbody tr>:first-child,.GreenSheet .LEFTTOP{min-width:150px;position:sticky;left:0}';d.body.appendChild(s);}d=d.getElementById('rReportTab_lsvReportBody_ctrl0_ctl00_ReportTitle1_contentTemplatePlaceholder');if(d)d.style.border='none';undefined;",
	}, {
		name: 'CopyPAP',
		title: 'PAP複製小工具',
		description: '住院醫師在撰寫Weekly、On Service、Off Service，PAP得從Progress一個一個複製，反過來也一樣，使用此小工具可以幫助住院醫師減少文書作業時間。使用方式：點開要複製的note，點選此小工具，會在"新增progess"那一區生成一個按鈕，如"progress 2021-01-01"，點開要貼上的note，按相應的按鈕"progress 2021-01-01"，貼上PAP。注意：需先建立好同樣數目的PAP，避免錯誤',
		func: function() {
			var btn, idPrefix, wrap = document.getElementById('btnWrap');
			if (window.NodeList && !NodeList.prototype.forEach) {
				NodeList.prototype.forEach = Array.prototype.forEach;
			}
			if (!wrap) {
				wrap = document.createElement('div');
				wrap.id = 'btnWrap';
				wrap.style.display = 'inline';
				document.getElementById('NTUHWeb1_udpSystemLinkButton').parentNode.appendChild(wrap);
			}
			if (['progress', 'offservice', 'onservice', 'weekly', 'blank'].indexOf($SelectedNote.NoteType) != -1) {
				console.log('create copy btn');
				idPrefix = document.querySelector('input[value="' + $SelectedNote.NoteType + '"][name]').id.replace('_hidNoteType', '');
				btn = document.createElement('input');
				btn.className = btn.type = 'button';
				btn.setAttribute('value', $SelectedNote.NoteType + ' ' + $SelectedNote.ExecutionDateTime.slice(0, 10));
				
				btn.PAP = [];
				document.querySelectorAll('#' + idPrefix + '_ucPAP_example textarea').forEach(function(ta) {
					btn.PAP.push({
						id: ta.id.replace(idPrefix, ''),
						value: ta.value
					});
				});
				
				btn.onclick = function() {
					idPrefix = document.querySelector('input[value="' + $SelectedNote.NoteType + '"][name]').id.replace('_hidNoteType', '');
					this.PAP.forEach(function(ta) {
						document.getElementById(idPrefix + ta.id).value = ta.value;
					});
				};
				wrap.appendChild(btn);
			}
		},
		funcStr: "javascript: if(window.NodeList&&!NodeList.prototype.forEach){NodeList.prototype.forEach=Array.prototype.forEach;}var wrap=document.getElementById('btnWrap'),btn,idPrefix;if(!wrap){wrap=document.createElement('div');wrap.id='btnWrap';wrap.style.display='inline';document.getElementById('NTUHWeb1_udpSystemLinkButton').parentNode.appendChild(wrap);}if(['progress','offservice','onservice','weekly','blank'].indexOf($SelectedNote.NoteType)!=-1){console.log('create copy btn');idPrefix=document.querySelector('input[value=\"'+$SelectedNote.NoteType+'\"][name]').id.replace('_hidNoteType','');btn=document.createElement('input');btn.className=btn.type='button';btn.setAttribute('value',$SelectedNote.NoteType+' '+$SelectedNote.ExecutionDateTime.slice(0,10));btn.PAP=[];document.querySelectorAll('#'+idPrefix+'_ucPAP_example textarea').forEach(function(ta){btn.PAP.push({id:ta.id.replace(idPrefix,''),value:ta.value});});btn.onclick=function(){idPrefix=document.querySelector('input[value=\"'+$SelectedNote.NoteType+'\"][name]').id.replace('_hidNoteType','');this.PAP.forEach(function(ta){document.getElementById(idPrefix+ta.id).value=ta.value;});};wrap.appendChild(btn);}",
	}, ],
};

function bookmarkletify(s) {
	return 'javascript: ' + s + ' undefined;';
}

function simpleStringify(f) {
	if (typeof f == 'function') f = f.toString();
	return f.replace(/\s+/g, ' ').match(/\{(.+)\}/)[1].trim().replace(/;?$/, ';');
}

/*
"function() {\r\n\t\topen('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/ConfirmDiagnosisOrder.aspx' + location.search, 'ConfirmDiagnosisOrder');\r\n\t}"
*/

/*
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
}
*/

/*
// OpenWard 
if (location.pathname == '/WebApplication/InPatient/Ward/OpenWard.aspx') {
	document.querySelectorAll('.tableText, .tableText2').forEach(function(tr) {
		// oNewWin = window.open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/ConfirmDiagnosisOrder.aspx?SESSION=47DBEB209A2FDB427BB32C2BD763E3277C&PatClass=I&AccountIDSE=21T07039221&PersonID=Q101961864&Hosp=T0&Seed=095307&EMRPop=Y','LinkConfirmDiagnosisOrder47DBEB209A2FDB427BB32C2BD763E3277C','width=1024,height=768,top=0,left=0,toolbar=no,resizable=yes,scrollbars=yes,status=yes'); oNewWin.focus(); return false;
		// Regex: '...(?...)'
		tr.cells[7].searchParams = tr.cells[8].firstElementChild.firstElementChild.getAttribute('onclick').match(/'.+?(\?.+?)'/)[1];
		tr.cells[7].onclick = function() {
	
		};
		// console.log(tr.cells[7]); 
	});
}

function OpenWardLink() {
	chyhObject.forEach(function(o) {
		// console.log(this); 
		o.openWin == 1 && o.func(this.searchParams);
	}, this);
}
*/

console.log('The bookmarklets.js was imported!');