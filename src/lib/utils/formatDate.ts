// utils/formatDate.ts
import moment from 'moment';
import 'moment/locale/th';

const shortDayNames = ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."];
const shortMonthNames = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];

export function formatThaiDateTimeShort(isoDate: string): string {
    moment.locale('th');
    const date = moment(isoDate).utcOffset('+07:00'); // ตั้งค่าโซนเวลาให้เป็นเวลาในประเทศไทย
    const dayName = shortDayNames[date.day()];
    const day = date.date();
    const month = shortMonthNames[date.month()];
    const year = (date.year() + 543).toString();
    const time = date.format('HH:mm');

    return `${dayName} ${day} ${month} ${year} เวลา ${time} น.`;
}

export function formatThaiDateOnly(isoDate: string): string {
    moment.locale('th');
    const date = moment(isoDate).utcOffset('+07:00'); // ตั้งค่าโซนเวลาให้เป็นเวลาในประเทศไทย
    const day = date.date();
    const month = shortMonthNames[date.month()];
    const year = (date.year() + 543).toString();
    const time = date.format('HH:mm');
    return `${day} ${month} ${year}  ${time}`;
}

export function formatThaiDateTime(isoDate: string): string {
    moment.locale('th');
    const date = moment(isoDate).utcOffset('+07:00'); // ตั้งค่าโซนเวลาให้เป็นเวลาในประเทศไทย
    const thaiDate = date.format('ddddที่ D MMMM ปี YYYY เวลา HH:mm น.');
    return thaiDate.replace('YYYY', (date.year() + 543).toString());
}
// เช็คว่าเวลาที่ส่งเข้ามาน้อยกว่าเวลาปัจจุบันหรือไม่ (หรือผ่านมาแล้ว) ถ้าใช่จะคืนค่า true ถ้าไม่ใช่จะคืนค่า false 
export function isPastTime(isoDate: string): boolean {
    const date = moment(isoDate);
    const now = moment();
    return now.isAfter(date);
}

export function formatEnglishDateTime(isoDate: string): string {
    moment.locale('en');
    const date = moment(isoDate).utcOffset('+07:00');
    const englishDate = date.format('dddd, MMMM D, YYYY');
    const time = date.format('h:mm A');
    return `${englishDate} at ${time}`;
}