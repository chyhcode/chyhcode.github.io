function WriteProgressNote()
{	
	javascript:
	var ids = ['txbSubject', 'txbObject', 'txbBSIBundle', 'tabBrifSummaryOfYesterday', 'ucPAP_txbProblem1', 'ucPAP_txbAssessment1', 'ucPAP_txbPlan1'];
	var txt = ['xxx','xxx','xxx','xxx','xxx','xxx','xxx'];
	var replaceMode = [true, false, true, true, true, true, true];
	function WriteProgressNote(index) 
	{ 
		if (replaceMode[index]) document.getElementById('NTUHWeb1_ProgressNoteMainTab_' + ids[index]).value = txt[index]; 
		else document.getElementById('NTUHWeb1_ProgressNoteMainTab_' + ids[index]).value += txt[index];
	} 
	for (var i=0; i<7; ++i) WriteProgressNote(i);
}


function CreateScript()
{
	var ids = ['txbSubject', 'txbObject', 'txbBSIBundle', 'tabBrifSummaryOfYesterday', 'ucPAP_txbProblem1', 'ucPAP_txbAssessment1', 'ucPAP_txbPlan1'];
	var txt = ['','','','','','',''];
	var replaceMode = [false,false,false,false,false,false,false];
	for (var i=0; i<7; ++i)
	{
		replaceMode[i] = document.getElementById(ids[i]+"_Replace").checked;
		txt[i] = "\'" + document.getElementById(ids[i]).value.replace(/(\r\n)|(\n)/g,"\\n") + "\'";
		ids[i] = "\'" + ids[i] + "\'";
	}
	
	var scriptIds = "javascript: var ids = [" + ids.toString() + "]; ";
	console.log(ids);
	console.log(scriptIds);
	
	var scriptTxt = "var txt = [" + txt.toString() + "]; ";
	console.log(txt);
	console.log(scriptTxt);
	
	var scriptMode = "var replaceMode = [" + replaceMode.toString() + "]; ";
	console.log(replaceMode);
	console.log(scriptMode);
	
	var scriptWrite = "function WriteProgressNote(index) { if (replaceMode[index]) document.getElementById('NTUHWeb1_ProgressNoteMainTab_' + ids[index]).value = txt[index]; else document.getElementById('NTUHWeb1_ProgressNoteMainTab_' + ids[index]).value += txt[index];} for (var i=0; i<7; ++i) WriteProgressNote(i);";
	
	document.getElementById('link').href  = scriptIds + scriptTxt + scriptMode + scriptWrite;
	document.getElementById('link').innerText = document.getElementById('noteTitle').value;
	console.log(document.getElementById('link').href);
}

/* 
	javascript: WriteTestNote();
	function WriteTestNote()
	{
	document.getElementById('output').value = 'abcdefg\r\n1234';
	}
*/
function StringToEscapedCharacter( t )
{
	return t.replace(/(\r\n)|(\n)/g,"\\n");
}

function CreateTestScript()
{
	var script1 = "javascript: WriteTestNote(); function WriteTestNote(){document.getElementById('output').value = '";
	var script2 = document.getElementById('input').value.replace(/(\r\n)|(\n)/g,"\\n");
	var script3 = "';}";
	console.log(script1 + script2 + script3);
	document.getElementById('a').href = script1 + script2 + script3;
}

function copyTextArea()
{
	document.getElementById('output').value = document.getElementById('input').value.replace(/(\r\n)|(\n)/g,"\\n");
}

/* let str = htmlStr.replace(/(\r\n)|(\n)/g,'<br>')
*/

function LoopForTextArea()
{
	document.getElementById('output').value = '4';
}
