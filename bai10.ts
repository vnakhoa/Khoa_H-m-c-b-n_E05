import {question} from "readline-sync";

// Biến g để liệt kê kết quả
let empty: string = " ";
let g: string = " ";

// Biến đếm để xác định số nguyên tố
let count: number = 0;

// Hàm lấy số nguyên m và n từ bàn phím
function nhapM(): number {
    let M: number = Number(question('Nhap so nguyen duong m: '));
    return M;
}

function nhapN(): number {
    let N: number = Number(question('Nhap so nguyen duong n: '));
    return N;
}
// Biến chạy i và k 
let i: number
let k:number;

function kiemtraSNT(): void {
    if(i ==2) {
        g = "";
        g += (empty + i);
    }
    else if(i > 2) {
        count = 0;
        for( k=2; k<=i-1 ; k++) {
            if(i%k == 0)
                count = 1; 
        }
    
        if(count == 0) {
            g += (empty +i);
        }
        else if(count == 1) {
            g = g;
        }
    }
    else {
        g = "Khong co SNT";
    }
}

// Hàm kiểm tra số nguyên tố để cho vào danh sách các số nguyên tố trong khoảng m đến n.
function lietkeSNT(m: number, n: number): string {
    for( i = m; i<=n ; i++) {
        kiemtraSNT();
    }
    return g;
}

//Chạy hàm liệt kê các số nguyên tố.
function run_lietkeSNT(): void {
    let m: number = nhapM();
    let n: number = nhapN();
    let result: string = lietkeSNT(m, n);
    console.log(result);
}

run_lietkeSNT();