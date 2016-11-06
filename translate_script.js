//document.body.innerHTML = document.body.innerHTML.replace(new RegExp("the", "g"), "Ruben");

var req = new XMLHttpRequest();  
req.open('GET', 'http://www.aboutruben.com/termlist.txt', false);   
req.send(null);  

let terms = "";

if(req.status == 200)  
  terms = req.responseText;

const termLines = terms.split('\n');

let dictionary = {};

for(let i = 0; i < termLines.length; ++i) {
	const line = termLines[i];
	const termParts = line.split('–');
	dictionary[termParts[0]] = termParts[1];
}

alert(dictionary);

var replaceTextInNode = function(parentNode){
    for(var i = parentNode.childNodes.length-1; i >= 0; i--){
        var node = parentNode.childNodes[i];

        //  Make sure this is a text node

        if(node.nodeType == Element.TEXT_NODE){
			const regex = /(the)\b/gi;
            node.textContent = node.textContent.replace(regex, "Ruben!");
        } else if(node.nodeType == Element.ELEMENT_NODE){
            //  Check this node's child nodes for text nodes to act on
            replaceTextInNode(node);
        }
    }
};

replaceTextInNode(document.body);