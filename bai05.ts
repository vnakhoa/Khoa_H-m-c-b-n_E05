import {question} from "readline-sync";

/**
 * Nhập tên
 * @returns Tên 
 */
function nhapTen(): string {
    let Ten: string = ' ';
    do{
        Ten = String(question('Nhap ten: '));
    }while(Ten == ' ');
    return Ten;
}
/**
 * Nhập năm sinh
 * @returns năm sinh hợp lệ
 */
function nhapnamSinh(): number {
    let namSinh: number;
    do{
        namSinh = Number(question('Nam sinh: '));
    } while(namSinh < 1900);
    return namSinh;
}
/**
 * Hàm ra thông tin cua người dùng và trả về tuổi
 * @param a tên của người dùng
 * @param b năm sinh của người dùng
 * @returns tuổi cua người dùng                 
 */
function Xinchao(a: string, b: number): number {
    console.log('Minh ten la', a);
    console.log(`Nam sinh ${b}`);
    let tuoi: number = 2023 -b;
    return tuoi;
}
// Chạy hàm trả về thông tin người dùng
function cnXinchao() {
    let ten: string = nhapTen();
    let namSinh: number = nhapnamSinh();

    let t: number = Xinchao(ten, namSinh);
    console.log(t)
}
cnXinchao();