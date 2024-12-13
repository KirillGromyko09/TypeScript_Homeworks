import baseModel from "./BaseModel";
import {IUser, UserParams} from "./interface.ts";
import {PasswordStrength, UserTypes} from "./enums.ts";


class User extends baseModel implements IUser{
    private static currentId: number = 1;

    createdAt: number = Date.now();

    static passwordValidations = {
        [PasswordStrength.WEAK]: (value: string) : boolean => {
            return value.length >= 6;
        },
        [PasswordStrength.MEDIUM]: (value: string) : boolean => {
            return value.length >= 8 && /[A-Za-z]/.test(value);
        },
        [PasswordStrength.STRONG]: (value: string) : boolean => {
            return value.length >= 12 && /[A-Za-z]/.test(value) && /[!@#$%^&*(),.?":{}|<>]/.test(value);
        },
    }

    private readonly userId: number = 0;
    private pass : string | null = null;
    private userEmail : string | null = null;
    private readonly userType : UserTypes | string = UserTypes.DEFAULT;

    name: string = '';

    constructor({name, email , type} : UserParams)  {
        super()
        this.name = name;
        this.userEmail = email;
        this.userId = User.currentId;

        if (Object.values(UserTypes).includes(type as UserTypes)) {
            this.userType = type as UserTypes;
        } else {
            this.userType = UserTypes.DEFAULT
        }
        User.currentId += 1;
    }

    set email(value : string)  {
        if (value.includes('@')) {
            this.userEmail = value;
        } else {
            throw new Error('Email is invalid')
        }
    }
    get email (): string {
        return this.userEmail ?? '';
    }
    get type() : string {
        return this.userType;
    }
    get id (): number {
        return this.userId;
    }

    get info () : string {
        return JSON.stringify({
            name : this.name,
            email: this.email,
            id : this.id,
        })
    }
    set password (newPassword : string)  {
        this.pass = atob(newPassword);
    }
    get password(): string | null {
        return this.pass;
    }
    changePassword(newPassword : string , strength : PasswordStrength = PasswordStrength.WEAK) : void | never  {
        const strengthKey: PasswordStrength = strength;
        if (!Object.values(PasswordStrength).includes(strengthKey)) {
            throw new Error('Pass strength is wrong');
        }

        if (!User.passwordValidations[strengthKey](newPassword)) {
            throw new Error('Password is too weak for ' + strength);
        }

        this.password = newPassword;
    }
    validate(): boolean {
        return (this.name.trim() !== '' && this.email.trim() !== '' && this.pass !== '');
    }
}

export default User;
