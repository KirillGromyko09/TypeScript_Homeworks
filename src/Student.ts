import User from "./User.ts";
import {TeacherOrStudentParams} from "./interface.ts";
import Course from "./Course.ts";
import {UserTypes} from "./enums.ts";

class Student extends User {
    static isStudent(obj : object): boolean {
        if(typeof obj !== 'object') {
            return false;
        }
        return obj instanceof Student;
    }

    private _courses: Course[] =[];

    constructor({name,email} : TeacherOrStudentParams) {
        super({
            name,
            email,
            type:UserTypes.STUDENT
        });
    }
    get courses(): readonly Course[] {
        return Object.freeze(this._courses)
    }
    enroll(course: Course): void{
        if(!Course.isCourse(course)) {
            throw new Error('arg should be an instance of class Course');
        }

        this._courses.push(course)
    }

}
export default Student;
