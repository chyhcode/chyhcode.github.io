function showCode(alwaysUnfold, indentSpace, selector)
{
	// <link rel="stylesheet" href="C:\Users\CHYH\Documents\GitHub\chyhcode.github.io\lib\show-code.css">
	// <script src="C:\Users\CHYH\Documents\GitHub\chyhcode.github.io\lib\show-code.js"></script>
	// add class="showCode" to tag
	// add <script> showCode(); </script>
	
	/* createCodeField */
	alwaysUnfold = alwaysUnfold || false;
	indentSpace = indentSpace || '\t';
	selector = selector || '.show-code';
	const voidElements = [ '#comment', '#text', 'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
	
	document.querySelectorAll(selector).forEach(createPre);
	
	function createPre(e)
	{
		var pre = document.createElement('PRE');
		pre.classList.add('code-panel');
		pre.innerHTML = formateHTML(e, alwaysUnfold, '  ');
		e.insertAdjacentElement('afterend', pre);
	}
	
	function formateHTML(e)
	{
		e.normalize();
		let root = parseTree(e, 0);
		let code = formateTree(root);
		return code.replace(/[\r\n]+(\s)+[\r\n]+/g,'\r\n');;
	}
	
	function parseTree(pNode, indentLevel)
	{
		let p = new DOM(pNode, indentLevel); // parent		
		
		// console.log(p);
		for (let cNode of pNode.childNodes)
		{
			let c = parseTree(cNode, indentLevel+1); // child
			p.childs.push(c);
			p.allChildrenInline &&= c.inline;
		}
		if (!p.allChildrenInline)
		{
			for (let c of p.childs) c.inline = false;
			p.inline = false;
		}
		return p;
	}
	
	function formateTree(p)
	{
		let code = '';
		if ( alwaysUnfold || !p.inline && !p.allChildrenInline )
		{
			// <...>
			//   <tag>
			//     <...></...>
			//   </tag>
			// </...>
			code += indentSpace.repeat(p.indentLevel) + p.value + '\r\n';
			for (let c of p.childs) code += formateTree(c);
			if ( !voidElements.includes(p.nodeName) ) code += indentSpace.repeat(p.indentLevel) + formateClosingTag(p.nodeName) + '\r\n';
			else code += '\r\n';
		}
		else if ( !p.inline && p.allChildrenInline )
		{
			// <...>
			//   <tag><...></...></tag>
			// </...>
			code += indentSpace.repeat(p.indentLevel) + p.value;
			for (let c of p.childs) code += formateTree(c);
			if ( !voidElements.includes(p.nodeName) ) code += formateClosingTag(p.nodeName) + '\r\n';
			else code += '\r\n';
		}
		else if ( p.inline && p.allChildrenInline )
		{
			// <...><tag><...></...></tag></...>
			code += p.value;
			for (let c of p.childs) code += formateTree(c);
			if ( !voidElements.includes(p.nodeName) ) code += formateClosingTag(p.nodeName);
		}
		else
		{
			code += '\r\n' + p.value + ' formate ERROR\r\n';
		}
		return code;
	}
	
	function DOM(e, indentLevel)
	{
		// this.indentLevel = 1, 2, 3, 4...;
		// this.nodeName = #comment, #text, p, span, a
		// this.value    = text|<!-- comment value -->|<tag attributes>
		// this.inline = true|false
		// this.allChildrenInline = true|false
		// this.presentInLine = true|false
		// this.childs = [];
		
		this.indentLevel = indentLevel;
		this.nodeName = e.nodeName.toLowerCase();
		this.inline = true;
		this.allChildrenInline = true;
		// this.presentInLine = true;
		this.childs = [];
		
		if (this.nodeName == '#text')
		{
			// if ( e.parentElement.nodeName == 'PRE' ) this.value = e.nodeValue;
			// else 
			this.value = e.nodeValue.replace(/[\s]+/g,' ');
		}
		else if (this.nodeName == '#comment')
		{
			this.value = brush('command', '&lt;!-- ' + e.nodeValue.trim() + ' --&gt;');
		}
		else /* this.nodeName == '#tag' */
		{
			this.value = brush('tag', '&lt;' + brush('tagName', this.nodeName) + formateAttr(e) + '&gt;' );
			if ( !window.getComputedStyle(e).display.includes('inline') ) this.inline = false;
		}
	}
	
	function formateAttr(e)
	{
		let attr = '';
		for (let a of e.attributes)
		{
			attr += ' ' + brush('attrName', a.name) + '=';
			if ( a.name.toLowerCase()=='class' || a.name.toLowerCase()=='style') attr += '"' + brush('attrValue', a.value.trim().replace(/\s+/g,' ') ) + '"';	
			else attr += '"' + brush('attrValue', a.value.trim() ) + '"';
		}
		return attr;
	}
	
	function formateClosingTag( tag )
	{
		// </div>
		return brush('tag', '&lt;'+ brush('tagName', '/' + tag ) +'&gt;');
	}
}

function showHTMLCode(indentSpace, selector, showOuterHTML)
{
	indentSpace = indentSpace || '\t';
	selector = selector || '.show-innerHTML'; // '.show-outerHTML'
	showOuterHTML = showOuterHTML || false;
	
	document.querySelectorAll(selector).forEach(createPre);
	
	function createPre(e)
	{
		var pre = document.createElement('PRE');
		pre.classList.add('code-panel');
		if (showOuterHTML) pre.innerHTML = formateByHTML(e.outerHTML);
		else pre.innerHTML = formateByHTML(e.innerHTML);
		e.insertAdjacentElement('afterend', pre);
	}
	
	/* 
		\n\t\t<button type=\"button\" class=\"btn btn-primary\">Primary</button>
		\n\t\t<button type=\"button\" class=\"btn btn-secondary\">Secondary</button>
		\n\t\t<button type=\"button\" class=\"btn btn-success\">Success</button>
		\n\t\t<button type=\"button\" class=\"btn btn-danger\">Danger</button>
		\n\t\t<button type=\"button\" class=\"btn btn-warning\">Warning</button>
		\n\t\t<button type=\"button\" class=\"btn btn-info\">Info</button>
		\n\t\t<button type=\"button\" class=\"btn btn-light\">Light</button>
		\n\t\t<button type=\"button\" class=\"btn btn-dark\">Dark</button>
		\n\t\t<button type=\"button\" class=\"btn btn-link\">Link</button>"
	*/
	function formateByHTML(txt)
	{
		let code = '';
		txt = simplifyText(txt).split(/[\r\n]+/g);
	}
	function simplifyText(txt)
	{
		txt = txt.replace(/[ \t]+/g,' '); // 簡化空格
		txt = txt.replace(/(^ )|( $)/mg,''); // 移除行初行尾空格
		txt = txt.replace(/[\r\n]+/g,'\r\n').replace(/^\r\n/g,'').replace(/\r\n$/g,''); // 移除多餘換行
		return txt
	}
}

function brush(style, string)
{
	return '<span class="hightlight-' + style + '">' + string + '</span>';
	/* 
		style
		#a894a6 brush('tag', )
		#881280 brush('tagName', )
		#994500 brush('attrName', )
		#1a1aa6 brush('attrValue', )
		#222222 brush('text', )
		#236e25 brush('command', )
	*/
}