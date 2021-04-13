/* https://cdn.jsdelivr.net/gh/chyhcode/chyhcode.github.io@main/lib/tools.js */

loadjQuery();

function loadjQuery()
{
	if ( typeof jQuery == "undefined" )
	{
		var s = document.createElement('SCRIPT');
		s.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
		s.id = "loadjQuery";
		document.head.appendChild(s);
		console.log("jQuery was loaded by loadjQuery().");
	}
}

function showCode(selector)
{
	/* show HTML code */
	
	/* add class=".showCode" to tag */
	/* add <script> showCode(".showCode"); </script> */
	
	/* createCodeField */
	document.querySelectorAll(selector).forEach(
		function(e)
		{
			var preDiv = document.createElement('PRE');
			var code = e.outerHTML.replace(/\t/g, "");
			preDiv.classList.add("w3-code", "htmlHigh", "notranslate");
			preDiv.innerText = code;
			e.insertAdjacentElement('afterend', preDiv);
		}
	);
	
	/* load w3codecolor.js*/
	load('https://www.w3schools.com/lib/w3codecolor.js').onload = function(){ w3CodeColor(); };
}

function load(fileSrc, fileId)
{
	fileSrc = fileSrc.trim();
	if ( fileSrc.endsWith('.js') )
	{
		var s = document.createElement('SCRIPT');
		s.src = fileSrc;
		if (fileId !== undefined) s.id = fileId;
		document.body.appendChild(s);
		return s;
		/* <script src="https://www.w3schools.com/js/myScript1.js"></script> */
	}
	else if ( fileSrc.endsWith('.css') )
	{
		var c = document.createElement('LINK');
		c.rel = "stylesheet";
		c.href = fileSrc;
		if (fileId !== undefined) c.id = fileId;
		document.head.appendChild(c);
		return c;
		/* <link rel="stylesheet" href="https://www.w3schools.com/html/styles.css"> */
	}
	else console.log( fileSrc + " can not be loaded" );
}

function GitHubToIO( href )
{
	var h = href.replace(/^https:\/\/github\.com\/([^\/]+)\/([^\/]+)\.github\.io\/blob\/main\/(.*)$/,'https://$2.github.io/$3'); 
	if ( h != href ) return h; // open(h); 
	else return undefined; // alert('cannot redirect to github.io');
}

function IOToGitHub( href )
{
	var h = href.replace(/^https:\/\/([^\/]+).github.io\/(.*)$/,"https://github.com/$1/$1.github.io/blob/main/$2");
	if ( h != href )
	{
		if ( href.search(/\.([^\/]+)$/) == -1 ) h += "index.html";
		return h; // open(h); 
	}
	else return undefined; // alert('cannot redirect to github.com');
}

/* https://raw.github.com/myusername/myrepo/master/style.css */
/* https://cdn.jsdelivr.net/gh/myusername/myrepo/style.css */

/* https://raw.githubusercontent.com/chyhcode/chyhcode.github.io/main/lib/tools.js */
/* https://cdn.jsdelivr.net/gh/chyhcode/chyhcode.github.io@main/lib/tools.js */

/* https://github.com/chyhcode/chyhcode.github.io/blob/main/lib/tools.css */
/* https://cdn.jsdelivr.net/gh/chyhcode/chyhcode.github.io@main/lib/tools.css */


function GitHubToCDN()
{
	
}

function CDNToGitHub()
{
	
}																	