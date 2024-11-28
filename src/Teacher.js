import User from "./User.js";
import Course from "./Course";

class Teacher extends User {
    #subjects = [];

    get subjects() {
        return Object.freeze(this.#subjects);
    }

    addSubject(subject) {
        if(!Course.isCourse(subject)) {
            throw new Error('Subject is not valid');
        }

        this.#subjects.push(subject)
    }
}

export default Teacher;
