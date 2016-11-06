var req = new XMLHttpRequest();  
req.open('GET', 'http://www.aboutruben.com/termlist.txt', false);   
req.send(null);  

let terms; 

if(!terms) {
	terms = "";
}

if(req.status == 200)  
  terms = req.responseText;

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
					node.textContent = node.textContent.replace(word, dictionary[word]);
				}
			}
        } else if(node.nodeType == Element.ELEMENT_NODE){
            //  Check this node's child nodes for text nodes to act on
            replaceTextInNode(node);
        }
    }
};

replaceTextInNode(document.body);