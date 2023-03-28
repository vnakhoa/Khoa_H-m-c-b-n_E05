import {question} from "readline-sync";

function nhapA() : number {
    const A:  number = Number(question('Nhap a: '));
    return A;
}

function nhapB() : number {
    const B:  number = Number(question('Nhap b: '));
    return B;
}

function soSanh(a: number, b: number): string {
    let result: string = " ";
    if(a>b) {
        let result: string = "Lon";
        return result;
    }
    else if(a == b) {
        result = "Bang";
        return result;
    }
    else {
        result = " Nho";
        return result;
    }
}

function funct_soSanh() {
    const a: number = nhapA();
    const b: number = nhapB();

    let t: string = soSanh(a,b);
    console.log(t);
}

funct_soSanh();