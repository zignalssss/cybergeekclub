import bcrypt from "bcrypt"
import { v4} from 'uuid';

export async function POST(req: Request) {
    const { 
        email,
        password,
        prefix_TH,
        prefix_EN,
        name_TH,
        name_EN,
        surname_TH,
        surname_EN,
        nickname_TH,
        nickname_EN,
        phone_number,
        birth_date,
        student_id,
        faculty_TH,
        faculty_EN,
        major_TH,
        major_EN,
        tag,
    } = await req.json()
    const hashPassword = bcrypt.hashSync(password,10)
    const id = v4()
    return Response.json({ 
        id,
        email,
        hashPassword,
        prefix_TH,
        prefix_EN,
        name_TH,
        name_EN,
        surname_TH,
        surname_EN,
        nickname_TH,
        nickname_EN,
        phone_number,
        birth_date,
        student_id,
        faculty_TH,
        faculty_EN,
        major_TH,
        major_EN,
        tag,
})
}