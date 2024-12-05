import User from "./User.ts";
import {TeacherOrStudentParams} from "./interface.ts";
import Course from "./Course.ts";

class Teacher extends User {
    static isTeacher(obj:object):boolean {
        if (typeof obj !== 'object') {
            return false;
        }
        return obj instanceof Teacher;
    }

    constructor({name, email}: TeacherOrStudentParams) {
        super({
            name,
            email,
            type:User.userTypes.TEACHER
        });
    }
    #subjects: string[] = [];
    get subjects(): readonly string[] {
        return Object.freeze(this.#subjects)
    }

    addSubject(subject:object & string):void {
        if(!Course.isCourse(subject)) {
            throw new Error(`${subject} is not valid`);
        }
        this.#subjects.push(subject);
    }



}

export default Teacher;
