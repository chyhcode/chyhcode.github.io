function foo() {
	// javascript:
	var wrap = document.getElementById('btnWrap'),
		btn, idPrefix;

	if (!wrap) {
		wrap = document.createElement('div');
		wrap.id = 'btnWrap';
		wrap.style.display = 'inline';
		document.getElementById('NTUHWeb1_udpSystemLinkButton').parentNode.appendChild(wrap);
	}

	if (['progress', 'offservice', 'onservice', 'weekly', 'blank'].indexOf($SelectedNote.NoteType) != -1) {
		console.log('create copy btn');
		idPrefix = document.querySelector('input[value=\"' + $SelectedNote.NoteType + '\"][name]').id.replace('_hidNoteType', '');

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
			idPrefix = document.querySelector('input[value=\"' + $SelectedNote.NoteType + '\"][name]').id.replace('_hidNoteType', '');
			this.PAP.forEach(function(ta) {
				document.getElementById(idPrefix + ta.id).value = ta.value;
			});
		};

		wrap.appendChild(btn);
	}
	// undefined;
}