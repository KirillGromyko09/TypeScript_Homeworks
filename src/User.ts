import baseModel from "./BaseModel";

interface UserParams {
    name: string;
    email: string;
    type: string;
}

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
        [User.passwordStrength.WEAK]: (value : string) : boolean => true,
        [User.passwordStrength.MEDIUM]: (value : string) : boolean => true,
        [User.passwordStrength.STRONG]: (value : string) : boolean => true,
    }

    private id : number = 0;
    private pass : string | null = null;
    private email : string | null = null;
    private type : string = User.userTypes.DEFAULT;

    name : string | null = null;

    constructor({name,email , type} : UserParams)  {
        super()
        this.name = name;
        this.email = email;
        this.id = User.currentId;

        if (Object.values(User.userTypes).includes(type)) {
            this.type = type;
        }
        User.currentId += 1;
    }

    set email(value : string)  {
        if (value.includes('@') ) {
            this.email = value;
        } else {
            throw new Error('Email is invalid')
        }
    }
    get email (): string | null {
        return this.email;
    }
    get type() : string {
        return this.type;
    }
    get id (): number {
        return this.id;
    }

    get info () : string {
        return JSON.stringify({
            name : this.name,
            email: this.email,
            id : this.id,
        })
    }

    private set password (newPassword : string)  {
        this.pass = atob(newPassword);
    }

    changePassword(newPassword : string , strength : string = User.passwordStrength.WEAK) : void  {

        if (!Object.values(User.passwordStrength).includes(strength)) {
            throw new Error('Pass strength is wrong');
        }

        if (!User.passwordValidations[strength](newPassword)) {
            throw new Error('Password is too weak for ' + strength);
        }

        this.password = newPassword;
    }
}

export default User;
