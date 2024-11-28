import Student from "./Student.js";

class Course {
    static isCourse(obj) {
        return obj instanceof Course;
    }
    static #currentId = 1;

    constructor(name, teacher) {
        this.id = Course.#currentId++;
        this.name = name;
        this.teacher = teacher;
        this.#students = [];
    }

    #students
    addStudent(student) {
        if (!student instanceof Student) {
            throw new Error('Argument should be an instance of class Student');
        }
        this.#students.push(student);
    }
    removeStudent(studentId) {
        this.#students = this.#students.filter(student => student.id !== studentId);
    }

    listStudents() {
        return this.#students.map(student => student.info);
    }

    set students(value) {
        if (!Array.isArray(value) || !value.every(student => student instanceof Student)) {
            throw new Error('All students must be instances of Student');
        }
        this.#students = value;
    }

    get students() {
        return Object.freeze(this.#students);
    }


}

export default Course;
