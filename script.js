let operation;
let next;
let result;
let array = [];
let a;

function sum(one, two) {
    return one + two;
}

function diff(one, two) {
    return one - two;
}

function mult(one, two) {
    return one * two;
}

function div(one, two) {
    return one / two;
}

function cos(one) {
    return Math.cos(one);
}

function sin(one) {
    return Math.sin(one);
}

function pow(one, two) {
    return Math.pow(one, two);
}

function validateNamber () {
    do {
        a = prompt('Введіть число');
        namberA = +a;
    } while (+a !== namberA || a === null || a === '');
    return a;
}

function number() {
    do {
        operation = prompt(`Вкажіть математичну дію:
        додавання введіть - sum, 
        віднімання введіть - diff, 
        множення введіть - mult, 
        ділення введіть - div,
        Косинус числа в радіанах введіть - cos,
        Синус числа в радіанах введіть - sin,
        Перше число в ступені другого числа введіть - pow,
        Історія операцій введіть - history`);
    
        } while (operation !== 'sum' && operation !== 'diff' && operation !== 'mult' && operation !== 'div' && operation !== 'pow' && operation !== 'cos' && operation !== 'sin' && operation !== 'history');
    return operation;
}

function main() {
    do {
        operation = number();
    
        if (operation == 'sum' || operation == 'diff' || operation == 'mult' || operation == 'div' || operation == 'pow') {
            let namberA = validateNamber();
            let namberB = validateNamber();
        
            if (operation == 'sum') {
                result = `Сума числа ${namberA} та числа ${namberB} = ${sum(namberA, namberB)}`;
                alert(result);
            } else if (operation == 'diff') {
                result = `Різниця числа ${namberA} та числа ${namberB} = ${diff(namberA, namberB)}`;
                alert(result);
            } else if (operation == 'mult') {
                result = `Множення числа ${namberA} на число ${namberB} = ${mult(namberA, namberB)}`;
                alert(result);
            } else if (operation == 'div') {
                result = `Ділення числа ${namberA} на число ${namberB} = ${div(namberA, namberB)}`;
                alert(result);
            } else if (operation == 'pow') {
                result = `Число ${namberA} в ступені числа ${namberB} = ${pow(namberA, namberB)}`;
                alert(result);
            }
        } else if (operation == 'cos' || operation == 'sin') {
            let namberC = validateNamber();
            if (operation == 'cos') {
                result = `Косинус ${namberC}рад = ${cos(namberC)}`;
                alert(result);
            } else if (operation == 'sin') {
                result = `Синус ${namberC}рад = ${sin(namberC)}`;
                alert(result);
            }
        } else if (operation == 'history') {
        
            if (array == '') {
                result = 'Історія операцій порожня';
                alert(result);
            } else {
                alert(`Історія ваших математичних операцій наступна "${array}"`);
            }
        }
        if (result !== 'Історія операцій порожня') {
            array[array.length] = result;
        }
    
        next = confirm('Бажаєте виконати нові розрахунки?');
    } while (next === true);
}

main();


