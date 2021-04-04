function GoalFunction(){
	/* this is the goal of CreateScript() want to create */
	/* javascript: */
	WriteProgress();
	function WriteProgress()
	{
		document.getElementById('NTUHWeb1_ProgressNoteMainTab_txbSubject').value = 'sss';
		document.getElementById('NTUHWeb1_ProgressNoteMainTab_txbObject').value += 'ooo';
		document.getElementById('NTUHWeb1_ProgressNoteMainTab_txbBSIBundle').value = 'Foley';	}
}

function CreateScript(){
	var noteDivs = document.getElementsByClassName('noteDiv');
	var script = 'javascript: WriteProgress(); function WriteProgress(){ ';
	for (var i=0; i<noteDivs.length; ++i) script += NoteToScript(noteDivs[i]);
	script += '}';
	document.getElementById('linkScript').value = script;
}

function NoteToScript(noteDiv){
	
	/* document.getElementById('NTUHWeb1_ProgressNoteMainTab_txbSubject').value = 'sss'; */
	var id = noteDiv.id;
	var txt = document.getElementById(id+'_Text').value.replace(/(\r\n)|(\n)/g,"\\n").trim();
	
	if( txt=='' ) return '';
	if( document.getElementById(id+'_Replace').checked ) 
		txt = "document.getElementById('" + id + "').value = '" + txt + "'; ";
	else
		txt = "document.getElementById('" + id + "').value += '" + txt + "'; ";
	
	console.log(txt);
	return txt;
}

function AlertCreateScript()
{
	CreateScript();
	ScriptToLink();
	document.getElementById('alertCleanScript').setAttribute('hidden','');
	document.getElementById('alertCreateScript').removeAttribute('hidden');
}

function ScriptToLink()
{
	document.getElementById('link').href = document.getElementById('linkScript').value;
	document.getElementById('link').innerText = document.getElementById('noteTitle').value;
	console.log(document.getElementById('link').href);
}

function AlertCleanScript()
{
	document.getElementById('alertCreateScript').setAttribute('hidden','');
	document.getElementById('alertCleanScript').removeAttribute('hidden');
}

function ClearScript()
{
	var textareas = document.getElementsByTagName('TEXTAREA');
	for (var i=textareas.length-1; i>=0; --i)
	{
		textareas[i].value = '';
	}
	document.getElementById('alertCleanScript').setAttribute('hidden','');
}

function CancelClearScript()
{
	document.getElementById('alertCleanScript').setAttribute('hidden','');
}

function StringToEscapedCharacter( t )
{
	return t.replace(/(\r\n)|(\n)/g,"\\n");
}

