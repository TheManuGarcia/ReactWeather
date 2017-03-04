// ARROW FUNCTIONS

// ANONYMOUS FUNCTIONS

function add(a,b){
    return a + b;
}

// addStatement. This arrow function allows multiple lines
var addStatement = (a, b) => {
    return a + b;
}
console.log(addStatement(4,7));

// addExpression. This arrow function allows one expression
var addExpression = (a,b) => a + b;
console.log(addExpression(3,-2));
