import User from "./User.ts";
import {TeacherOrStudentParams} from "./interface.ts";
import Course from "./Course.ts";

class Student extends User {
    static isStudent(obj : object): boolean {
        if(typeof obj !== 'object') {
            return false;
        }
        return obj instanceof Student;
    }

    #courses: Course[] =[];

    constructor({name,email} : TeacherOrStudentParams) {
        super({
            name,
            email,
            type:User.userTypes.STUDENT
        });
    }
    get courses(): readonly Course[] {
        return Object.freeze(this.#courses)
    }
    enroll(course: Course): void{
        if(!Course.isCourse(course)) {
            throw new Error('arg should be an instance of class Course');
        }

        this.#courses.push(course)
    }

}
export default Student;
