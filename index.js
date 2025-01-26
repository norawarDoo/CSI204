let doodee = document.getElementById("dooBigTu"); 
let Gab = '';        // ตัวเลขที่ 1
let operator = '';   // ตัวดำเนินการ
let Numbertwo = '';  // ตัวเลขที่ 2

function showOrder() {
    console.log(`Operand 1: ${Gab}, Operator: ${operator}, Operand 2: ${Numbertwo}`);
}

function Numberone(num) {
    if (operator === '' && doodee.textContent !== '0') {
        Gab += num;
        doodee.textContent = Gab;
    } else if (operator === '') {
        Gab = num.toString();
        doodee.textContent = Gab;
    } else {
        Numbertwo += num;
        doodee.textContent = Numbertwo;
    }
    showOrder(); // แสดงลำดับของข้อมูลเมื่อมีการเปลี่ยนแปลง
}

function Boglob() {
    if (operator === '') {
        Gab = Gab.substring(0, Gab.length - 1);
        doodee.textContent = Gab;
    } if (Numbertwo === '' && operator !== '') {
        operator = '';
        doodee.textContent = Gab;
    }
    if ( Gab !== '' && operator !== '') {
        Numbertwo = Numbertwo.substring(0, Numbertwo.length - 1);
        doodee.textContent = Numbertwo;
    }
    showOrder(); // แสดงลำดับของข้อมูลเมื่อมีการแก้ไข
}

function delAll() {
    Gab = ''; 
    Numbertwo = ''; 
    operator = ''; 
    doodee.textContent = '0'; 
    showOrder(); // รีเซ็ตและแสดงข้อมูลใหม่
}

function Bigbom(op) {
    if (Gab === '') return; 
    operator = op; 
    showOrder(); // แสดงข้อมูลเมื่อมีการเลือกตัวดำเนินการ
}

function equal() {
    if (Gab === '' || Numbertwo === '' || operator === '') return; 

    let result;
    const num1 = parseFloat(Gab);
    const num2 = parseFloat(Numbertwo);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    doodee.textContent = result; 
    Gab = result.toString(); 
    Numbertwo = ''; 
    showOrder(); // แสดงผลลัพธ์และข้อมูล
}

const checkKey = (e) => {
    console.log(e.key); // เพื่อดูว่าผู้ใช้กดปุ่มอะไรบ้าง
    if (e.key === 'Enter') {
        equal();
    } else if (e.key === 'Escape') {
        delAll();
    } else if (e.key === '+') {
        Bigbom('+');
    } else if (e.key === '-') {
        Bigbom('-');
    } else if (e.key === '*') {
        Bigbom('*');
    } else if (e.key === '/') {
        Bigbom('/');
    } else if (e.key >= '0' && e.key <= '9') {
        Numberone(e.key);
    } else if (e.key === '.') {
        Numberone('.');
    }
};

document.addEventListener('keydown', checkKey);
