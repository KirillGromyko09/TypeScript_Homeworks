import {PasswordStrength, UserTypes} from "./enums.ts";
import Teacher from "./Teacher.ts";
import Student from "./Student.ts";
import User from "./User.ts";
import Course from "./Course.ts";

export interface TeacherOrStudentParams {
    name: string;
    email: string;
}
export interface UserParams {
    name: string;
    email: string;
    type: string;
}
export interface IBaseModel {
    createdAt: number;
    validate(): boolean;
}
export interface IUser extends IBaseModel {
   id: number;
   name: string;
   email: string;
   type: UserTypes | string;
   password: string | null;
   info: string;
   changePassword(newPassword: string, strength?: PasswordStrength): void;
}
export interface ICourse extends IBaseModel {
    name: string;
    teacher: Teacher | null;
    id: number;
    students: Student[];

    addStudent(studentInstance: Student): number;

    removeStudent(studentInstance: Student): Student | undefined;
}
export interface ICourseManager {
    users: User[];
    courses: Course[];

    addUser(user: User): boolean;

    addCourse(course: ICourse): boolean;

    assignTeacherToCourse(courseId: number, teacherId: number): void;

    enrollStudentToCourse(courseId: number, studentId: number): void;

}
export interface IStudent extends IUser {
    courses: readonly Course[];
    enroll(course: Course): void | never
}
export interface ITeacher extends IUser {
    subjects: readonly string[];
    addSubject(subject:object & string): void | never
}
