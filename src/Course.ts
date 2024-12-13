import BaseModel from "./BaseModel.ts";
import Student from "./Student.ts";
import Teacher from "./Teacher.ts";
import {ICourse} from "./interface.ts";

class Course extends BaseModel implements ICourse {
    private static currentId: number = 1;
    static isCourse(obj: object): boolean {
        return obj instanceof Course;
    }
    createdAt: number = Date.now();

    private readonly _id: number = 0;
    private _students: Student[] = [];
    private _teacher : Teacher | null = null;
    name: string = '';

    constructor(name : string, teacher : Teacher) {
        super();
        if (name.trim() !== '') {
            this.name = name;
        }
        this.changeTeacher(teacher);
        this._id = Course.currentId++;
    }
    get students() : Student[] {
        return [...this._students];
    }
    get id() : number {
        return this._id;
    }

    get teacher() : Teacher | null {
        return this._teacher ;
    }
    private validateStudent(student: Student): boolean | never {
        if(Student.isStudent(student)) return true;
        throw new Error('you must pass a Student class instance');
    }
    addStudent(studentInstance: Student): number{
        this.validateStudent(studentInstance);
        return this.students.push(studentInstance);
    }
    removeStudent(studentInstance: Student): Student | undefined {
        this.validateStudent(studentInstance)

        const {id: studentId} = studentInstance;
        const studentIndex = this.students.findIndex(student => student.id === studentId);
        const [removedStudent] = this.students.splice(studentIndex, 1);

        return removedStudent;
    }
    changeTeacher(teacher: Teacher ) : void | never {
        if(Teacher.isTeacher(teacher)) {
            this._teacher = teacher;
        } else {
            throw new Error('you must pass a Teacher class instance');
        }
    }
    validate(): boolean | never {
        if (!this.name.trim()) {
            throw new Error('Course name is required');
        }
        if (!this._teacher) {
            throw new Error('Course must have a teacher assigned');
        }
        return true;
    }





}
export default Course;
