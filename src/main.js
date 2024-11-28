import User from './User.js';
import Student from './Student.js';
import Teacher from './Teacher.js';
import Course from './Course.js';
import CourseManager from './CourseManager.js';

const student1 = new Student({ name: 'Alice', email: 'alice@example.com' });
const student2 = new Student({ name: 'Bob', email: 'bob@example.com' });
const teacher1 = new Teacher({ name: 'Mr. Vova', email: 'vova@example.com' });

const course1 = new Course('Math', teacher1);
const course2 = new Course('Science', teacher1);

const manager = new CourseManager();
manager.addUser(student1);
manager.addUser(student2);
manager.addUser(teacher1);
manager.addCourse(course1);
manager.addCourse(course2);

manager.enrollStudentToCourse(course1.id, student1.id);
manager.enrollStudentToCourse(course1.id, student2.id);
manager.enrollStudentToCourse(course2.id, student1.id);

const report = CourseManager.generateReport(manager);
console.log(report);
