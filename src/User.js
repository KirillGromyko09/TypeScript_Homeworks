class User {
    static #currentId = 1;

    static passwordStrength = Object.freeze({
        WEAK: 'weak',
        MEDIUM: 'medium',
        STRONG: 'strong',
    })

    static passwordValidations = {
        [User.passwordStrength.WEAK]: (value) => true,
        [User.passwordStrength.MEDIUM]: (value) => true,
        [User.passwordStrength.STRONG]: (value) => true,
    };

    constructor({name, email}) {
        this.name = name;
        this.email = email;
        this.#id = User.#currentId;
        User.#currentId += 1;
    }

    #id = 0;
    #pass = null;

    name = null;
    email = null;

    get id() {
        return this.#id
    }

    get info() {
        return JSON.stringify({
            name: this.name,
            id: this.id,
            email: this.email
        })
    }
    set #password(newPassword) {
        this.#pass = atob(newPassword);
    }

    changePassword(
        newPassword,
        strength = User.passwordStrength.WEAK
    ) {
        if(typeof newPassword !== 'string') return;

        if(!Object.values(User.passwordStrength).includes(strength)) {
            throw new Error('Pass strength in wrong')
        }

        if(!User.passwordValidations[strength](newPassword)) {
            throw new Error('Password is too weak for ' + strength);
        }

        this.#password = newPassword;
    }
}
export default User;
