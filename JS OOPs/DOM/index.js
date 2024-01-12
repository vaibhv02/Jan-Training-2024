// //DOM traversing
// //understanding DOM Tree, Root Node, Element Node, Sibling Node and Text Node(white-space);

// const rootNode = document.getRootNode();
// console.log(rootNode);

// const rootChild = rootNode.childNodes;
// console.log(rootChild);

// console.log(rootChild[0]);
// //html chid node length
// // console.log("HTML Child Length: ",document.body.children.length)
// const html = rootNode.childNodes;

// const headBody = html[0].childNodes;
// console.log(headBody);

// console.log(html);


//==================================================================================

// dom traversing
// understanding DOM tree,root node,element node and sibling node,text nodes(white space)
//take root node


// const rootNode = document.getRootNode();
// console.log(rootNode);
// // take  root child
// const rootChild = rootNode.childNodes;
// console.log(rootChild);
// // take html child
// console.log(rootChild[1]);
// const htmlChild = rootChild[1].childNodes;
// console.log(htmlChild);
// // take head child
// const headChild = htmlChild[0].childNodes;
// console.log(headChild);
// // take body child
// const bodyChild = htmlChild[2].childNodes;
// console.log(bodyChild);
// // take text child
// const textChild = htmlChild[1].childNodes;
// console.log(textChild);
// // take div child
// const divChild = bodyChild[1].childNodes;
// console.log(divChild);