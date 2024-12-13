import Course from "./Course.ts";
import User from "./User.ts";
import Teacher from "./Teacher.ts";
import Student from "./Student.ts";
import {ICourseManager} from "./interface.ts";


class CourseManager implements ICourseManager {
    users: User[] = [];
    courses: Course[] = [];

    addUser(user: User): boolean {
        if (!Teacher.isTeacher(user) && !Student.isStudent(user)) {
            return false;
        }
        this.users.push(user);
        return true;
    }

    addCourse(course: Course): boolean {
        if (!Course.isCourse(course)) {
            return false;
        }
        this.courses.push(course);
        return true;
    }

    getById<T>(stack: "users" | "courses", id: number): T | never {
        const stackElement = this[stack].find((stack) => stack.id === id);
        if (!stackElement) {
            throw new Error(`${stack.slice(0, -1)} not found, 404`);
        }
        return stackElement as T;
    }

    assignTeacherToCourse(courseId: number, teacherId: number): void {
        const selectedCourse: Course = this.getById<Course>("courses", courseId);
        const selectedTeacher: Teacher = this.getById<Teacher>("users", teacherId);

        selectedCourse.changeTeacher(selectedTeacher);
    }

    enrollStudentToCourse(courseId: number, studentId: number): void {
        const selectedCourse: Course = this.getById<Course>("courses", courseId);
        const selectedStudent: Student = this.getById<Student>("users", studentId);

        selectedCourse.addStudent(selectedStudent);
    }

    generateReport() : {users: string, courses: string} {
        return {
            users: JSON.stringify(this.users),
            courses: JSON.stringify(this.courses),
        };
    }
}

export default CourseManager;
