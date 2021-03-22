function GetDatebyString(str, HHMM)
{
	str = str.slice(0, 16).match(/^([0-9]{4}).([0-9]{2}).([0-9]{2}) ([0-9]{2}):([0-9]{2})/);
	if (HHMM) return '民國'+(str[1]-1911)+'年'+str[2]+'月'+str[3]+'日'+str[4]+'時'+str[5]+'分';
	else return '民國'+(str[1]-1911)+'年'+str[2]+'月'+str[3]+'日';
}

function ERtoWard()
{
	console.log('ERtoWard() was called.');
	__doPostBack('NTUHWeb1$gvwEmgHistory$ctl02$lblChartNo','');	
	var t = '病患因上述疾病，於';
	t += GetDatebyString(document.getElementById('NTUHWeb1_gvwStatusHistory_ctl02_EndDateStr').innerText, true);
	t += '至本院急診就診並留觀待床，於';
	t += GetDatebyString(document.getElementById('NTUHWeb1_gvwStatusHistory_ctl0'+document.getElementById('NTUHWeb1_gvwStatusHistory').rows.length+'_EndDateStr').innerText, false);
	t += '轉入普通病房接續治療，';
	
	console.log('txt = '+ t);
	console.log('ERtoWard() was returned.');
	return t;
}

function NotERtoWard()
{
	console.log('NotERtoWard() was called.');
	var accountIDSE = location.search.match(/AccountIDSE=([a-zA-Z0-9]{11})/i);
	if (accountIDSE) accountIDSE = accountIDSE[1];
	else accountIDSE = document.documentElement.innerHTML.match(/AccountIDSE=([a-zA-Z0-9]{11})/i)[1];
	
	var wards = document.getElementById('NTUHWeb1_dgLogPatTransferBed').rows;
	var adm = '9';
	
	for (var ward of wards)
	{
		if ( ward.cells[0].innerText == accountIDSE && ward.cells[2].innerText < adm ) adm = ward.cells[2].innerText;
	}
	var t = '病患因上述疾病，於';
	t += GetDatebyString(adm, false);
	t += '至本院一般病房住院，';
	
	console.log('txt = '+ t);
	console.log('NotERtoWard() was returned.');
	return t;
}

function Discharge()
{
	console.log('Discharge() was called.');
	var d = new Date(); 
	d.setDate(d.getDate() + 1);
	var t = '於民國'+(d.getFullYear()-1911)+'年'+d.getMonth().toString().padStart(2,'0')+'月'+d.getDate().toString().padStart(2,'0')+'日出院，出院後宜持續門診追蹤。';
	
	console.log('txt = '+ t);
	console.log('Discharge() was returned.');
	return t;
}

function OpenHistories()
{
	console.log('OpenHistories() was called.');
	if ( !document.getElementById('NTUHWeb1_divEmgHistoryInfo') ) document.getElementById('NTUHWeb1_btnEmgHistoryShowHide').click();
	if ( !document.getElementById('NTUHWeb1_divLogPatTransferBedInfo') ) document.getElementById('NTUHWeb1_btnLogPatTransferBedShowHide').click();
	console.log('OpenHistories() was returned.');
}

function WriteCertification() 
{
	console.log('WriteCertification() was called.');
	OpenHistories();
	var txt = document.getElementById('NTUHWeb1_gvwEmgHistory_ctl02_lblDischargeStatus');
	if ( txt!=NULL && txt.innerText == '住院' ) txt = ERtoWard();
	else txt = NotERtoWard();
	txt += Discharge();
	document.getElementById('NTUHWeb1_InstructionSetItem').value = txt; 
	console.log('WriteCertification() was returned.');
}
