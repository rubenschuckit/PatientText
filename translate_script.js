/*
var req = new XMLHttpRequest();  
req.open('GET', 'http://www.aboutruben.com/termlist.txt', false);   
req.send(null);
if(req.status == 200)  
  terms = req.responseText;  
*/ 

let terms; 

if(!terms) {
	terms = "";
}

readTextFile("termlist.txt"); 

function readTextFile(fileName) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', chrome.extension.getURL(fileName), true);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
		{
			const terms = xhr.responseText;
			//... The content has been read in xhr.responseText
			const termLines = terms.split('\n');

			let dictionary = {};

			for(let i = 0; i < termLines.length; ++i) {
				const line = termLines[i];
				const termParts = line.split('&');
				dictionary[termParts[0].trim()] = termParts[1];
			}
			
			var replaceTextInNode = function(parentNode){
				for(var i = parentNode.childNodes.length-1; i >= 0; i--){
					var node = parentNode.childNodes[i];

					//  Make sure this is a text node

					if(node.nodeType == Element.TEXT_NODE){
						let line = node.textContent; 
						line = line.replace(/\n/g, " ");
						const lineParts = line.split(' ');
						
						for(let i = 0; i < lineParts.length; ++i) {
							const word = lineParts[i];
							const find = dictionary[word];
							if (find) {
								node.textContent = node.textContent.replace(word, "[" + dictionary[word] + "]");
							}
						}
					} else if(node.nodeType == Element.ELEMENT_NODE){
						//  Check this node's child nodes for text nodes to act on
						replaceTextInNode(node);
					}
				}
			};
			
			replaceTextInNode(document.body);
		}
	};
	xhr.send();
}
