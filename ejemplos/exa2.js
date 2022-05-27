//EJEMPLO 2 DEL DIA VIERNES 27/05


var actionList = [];

function actionSum(a, b) {
	return a+b;
}

function actionExp(a, b) {
	return a**b;
}

actionList.push(actionSum);
actionList.push(actionSum);
actionList.push(actionExp);
actionList.push(actionSum);

console.info(actionList);


var result = 0;

for(var x = 0; x < actionList.length; x ++) {
	result = result + actionList[x](result,1);
}

console.info(result);
