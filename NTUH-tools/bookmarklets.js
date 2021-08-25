// https://cdn.jsdelivr.net/gh/chyhcode/chyhcode.github.io@main/NTUH-tools/bookmarklets.js
var chyhObject = [{
	name: 'ConfirmDiagnosisOrder',
	title: '主',
	description: '',
	CommonUsed: 0,
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
	CommonUsed: 0,
	func: function() {
		open('http://ihisaw.ntuh.gov.tw/WebApplication/OtherIndependentProj/PatientBasicInfoEdit/PatientMedicalRecordListQuery.aspx' + location.search, 'PatientMedicalRecordListQuery');
	},
}, {
	name: 'MedicationHistory',
	title: '藥史',
	description: '',
	CommonUsed: 0,
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
	CommonUsed: 1,
	func: function() {
		open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Nursing/VitalSign_TPR.aspx' + location.search, 'VitalSign_TPR');
	},
}, {
	name: 'DrugGivenNote',
	title: '給藥紀錄',
	description: '',
	CommonUsed: 0,
	func: function() {
		open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/DrugGivenNote.aspx' + location.search, 'DrugGivenNote');
	},
}, {
	name: 'CatheterCare',
	title: '管路',
	description: '',
	CommonUsed: 0,
	func: function() {
		open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Nursing/CatheterCare.aspx' + location.search, 'CatheterCare');
	},
}, {
	name: 'Estimate_IO_Summery',
	title: 'IO',
	description: '',
	CommonUsed: 0,
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
	CommonUsed: 0,
	func: function() {
		open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Nursing/NursingProgressNote.aspx' + location.search, 'NursingProgressNote');
	},
}, {
	name: 'OffDutyNurV2',
	title: '護交',
	description: '',
	CommonUsed: 1,
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
	CommonUsed: 1,
	func: function() {
		open('http://ihisaw.ntuh.gov.tw/WebApplication/ElectronicMedicalReportViewer/MedicalReportContent.aspx' + location.search, 'MedicalReportContent');
	},
}, {
	name: 'PACSImageShowList2',
	title: 'PACS',
	description: '',
	CommonUsed: 1,
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
	CommonUsed: 1,
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
	CommonUsed: 1,
	func: function() {
		open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/DoctorEnterOrder.aspx' + location.search, 'DoctorEnterOrder');
	},
}, {
	name: 'MedicationV2',
	title: '處',
	description: '',
	CommonUsed: 1,
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
	CommonUsed: 0,
	func: function() {
		open('http://ihisaw.ntuh.gov.tw/WebApplication/InPatient/Ward/NotifyOtherDoctor.aspx' + location.search, 'NotifyOtherDoctor');
	},
}, {
	name: 'BloodStockCreateOrder',
	title: '血',
	description: '',
	CommonUsed: 0,
	func: function() {
		open('http://ihisaw.ntuh.gov.tw/WebApplication/BloodStock/Pages/His/CreateOrder.aspx' + location.search, 'BloodStockCreateOrder');
	},
}, {
	name: 'SimpleShowiframePage',
	title: 'EMR',
	description: '',
	CommonUsed: 0,
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
	CommonUsed: 0,
	func: function() {
		open('http://ihisaw.ntuh.gov.tw/WebApplication/EBoard/EBoardMainPage.aspx' + location.search, 'EBoardMainPage');
	},
}, ];
var chyhOtherObject = {};

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