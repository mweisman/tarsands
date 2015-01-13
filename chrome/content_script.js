walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bOil Sands\b/g, "Tar Sands");
	v = v.replace(/\bOil sands\b/g, "Tar sands");
	v = v.replace(/\boil Sands\b/g, "tar Sands");
	v = v.replace(/\boil sands\b/g, "tar sands");
	
	textNode.nodeValue = v;
}

