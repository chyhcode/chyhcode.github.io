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
	
	/* add class=".shoWcode" to tag */
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
		<link rel="stylesheet" href="https://www.w3schools.com/html/styles.css">
	}
	else console.log( fileSrc + " can not be loaded" );
}


function setAttributes()
{
	
}
