import User from "./User.ts";
import {ITeacher, TeacherOrStudentParams} from "./interface.ts";
import Course from "./Course.ts";
import {UserTypes} from "./enums.ts";

class Teacher extends User implements ITeacher {
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
            type:UserTypes.TEACHER
        });
    }

    private _subjects: string[] = [];

    get subjects(): readonly string[] {
        return Object.freeze(this._subjects)
    }

    addSubject(subject:object & string): void | never {
        if(!Course.isCourse(subject)) {
            throw new Error(`${subject} is not valid`);
        }
        this._subjects.push(subject);
    }



}

export default Teacher;
