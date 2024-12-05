import Course from "./Course.ts";
import User from "./User.ts";
import Teacher from "./Teacher.ts";
import Student from "./Student.ts";
import {boolOrUndefOrVoid} from "./types.ts";

class CourseManager {
    users: User[] = [];
    courses: Course[] = [];

    addUser(user: User): boolOrUndefOrVoid{
        if (!Teacher.isTeacher(user) && !Student.isStudent(user)) {
            return false;
        }
        this.users.push(user);
    }

    addCourse(course: Course): boolOrUndefOrVoid {
        if (!Course.isCourse(course)) {
            return false;
        }
        this.courses.push(course);
    }

    getCourseById(courseId: number): Course | undefined {
        return this.courses.find((course: Course) => course.id === courseId);
    }

    getUserById(userId: number): User | undefined {
        return this.users.find((user: User) => user.id === userId);
    }

    assignTeacherToCourse(courseId: number, teacherId: number): void {
        const selectedCourse: Course | undefined = this.getCourseById(courseId);
        const selectedTeacher: User | undefined = this.getUserById(teacherId);

        if (!selectedCourse) {
            throw new Error(`Course with ID ${courseId} not found`);
        }
        if (!selectedTeacher || !Teacher.isTeacher(selectedTeacher)) {
            throw new Error(`Teacher with ID ${teacherId} not found or is not a valid Teacher`);
        }

        selectedCourse.changeTeacher(selectedTeacher as Teacher);
    }

    enrollStudentToCourse(courseId: number, studentId: number): void {
        const selectedCourse : Course | undefined = this.getCourseById(courseId);
        const selectedStudent: User | undefined = this.getUserById(studentId);

        if (!selectedCourse) {
            throw new Error(`Course with ID ${courseId} not found`);
        }
        if (!selectedStudent || !Student.isStudent(selectedStudent)) {
            throw new Error(`Student with ID ${studentId} not found or is not a valid Student`);
        }

        selectedCourse.addStudent(selectedStudent as Student);
    }

    generateReport() {
        return {
            users: JSON.stringify(this.users),
            courses: JSON.stringify(this.courses),
        };
    }
}

export default CourseManager;
