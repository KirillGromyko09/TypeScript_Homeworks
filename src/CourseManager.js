import Course from "./Course.js";
import User from "./User.js";
import Student from "./Student.js";
import Teacher from "./Teacher.js";

class CourseManager {
    constructor() {
        this.users = [];
        this.courses = [];

    }

    addUser(user) {
        if (!(user instanceof User)) {
            throw new Error('Argument should be an instance of class User')
        }
        this.users.push(user);
    }

    addCourse(course) {
        if (!(course instanceof Course)) {
            throw new Error('Argument should be an instance of class Course')
        }
        this.courses.push(course);
    }

    assignTeacherToCourse(courseId, teacherId) {
        const course = this.courses.find(course => course.id === courseId);
        const teacher = this.users.find(user => user.id === teacherId && user instanceof Teacher);
        if (!course || !teacher) {
            throw new Error('Course or teacher not found');
        }
        course.teacher = teacher;
    }

    enrollStudentToCourse(courseId, studentId) {
        const course = this.courses.find(course => course.id === courseId);
        const student = this.users.find(user => user.id === studentId && user instanceof Student);
        if (!course || !student) {
            throw new Error('Course or student not found');
        }
        course.addStudent(student);
    }

    static generateReport(manager) {
        return manager.courses.map(course => ({
            course: course.name,
            teacher: course.teacher ? course.teacher.name : 'Not assigned',
            students: course.listStudents()
        }));
    }

}
export default CourseManager;
