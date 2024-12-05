import baseModel from "./BaseModel";
import {UserParams} from "./interface.ts";
import {PasswordStrength} from "./types.ts";

class User extends baseModel{
    private static currentId: number = 1;
    static userTypes = {
        STUDENT: 'student',
        TEACHER: 'teacher',
        DEFAULT: 'user'
    }

    static passwordStrength = Object.freeze({
        WEAK: 'weak',
        MEDIUM: 'medium',
        STRONG: 'strong',
    });

    static passwordValidations = {
        [User.passwordStrength.WEAK]: (value: string) : boolean => {
            return value.length >= 6;
        },
        [User.passwordStrength.MEDIUM]: (value: string) : boolean => {
            return value.length >= 8 && /[A-Za-z]/.test(value);
        },
        [User.passwordStrength.STRONG]: (value: string) : boolean => {
            return value.length >= 12 && /[A-Za-z]/.test(value) && /[!@#$%^&*(),.?":{}|<>]/.test(value);
        },
    }

    #id: number = 0;
    #pass : string | null = null;
    #email : string | null = null;
    #type : string = User.userTypes.DEFAULT;

    name : string | null = null;

    constructor({name, email , type} : UserParams)  {
        super()
        this.name = name;
        this.email = email;
        this.#id = User.currentId;

        if (Object.values(User.userTypes).includes(type)) {
            this.#type = type;
        }
        User.currentId += 1;
    }

    set email(value : string)  {
        if (value.includes('@') ) {
            this.#email = value;
        } else {
            throw new Error('Email is invalid')
        }
    }
    get email (): string | null {
        return this.#email;
    }
    get type() : string {
        return this.#type;
    }
    get id (): number {
        return this.#id;
    }

    get info () : string {
        return JSON.stringify({
            name : this.name,
            email: this.email,
            id : this.id,
        })
    }

    set #password (newPassword : string)  {
        this.#pass = atob(newPassword);
    }
    get password(): string | null {
        return this.#pass;
    }
    changePassword(newPassword : string , strength : PasswordStrength = 'WEAK') : void  {
        const strengthKey = User.passwordStrength[strength];
        if (!Object.values(User.passwordStrength).includes(strengthKey)) {
            throw new Error('Pass strength is wrong');
        }

        if (!User.passwordValidations[strengthKey](newPassword)) {
            throw new Error('Password is too weak for ' + strength);
        }

        this.#password = newPassword;
    }
}

export default User;
