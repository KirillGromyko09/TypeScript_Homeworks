import Student from "./Student.ts";
import Teacher from "./Teacher.ts";
import Course from "./Course.ts";
import CourseManager from "./CourseManager.ts";

const s1 = new Student({name: 'Alice', email: 'alice@gmail.com'})
const s2 = new Student({name: 'John', email: 'john@gmail.com'})

const t1 = new Teacher( {name: 'Vova', email: 'vova@gmail.com'})
const t2 = new Teacher( {name: 'Alex', email: 'alex@gmail.com'})

const c1 = new Course("React.js", t1);
const c2 = new Course("Vue.js", t2);

const cm = new CourseManager()

cm.addCourse(c1)
cm.addCourse(c2)

cm.addUser(s1)
cm.addUser(s2)
cm.addUser(t1)
cm.addUser(t2)

console.log(cm)

cm.assignTeacherToCourse(1, 4)
cm.assignTeacherToCourse(2, 3)

cm.enrollStudentToCourse(1, 1)
cm.enrollStudentToCourse(1, 2)

cm.enrollStudentToCourse(2, 1)
cm.enrollStudentToCourse(2, 2)
