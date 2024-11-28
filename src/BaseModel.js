class BaseModel {
    constructor() {
        if (new.target === BaseModel) {
            throw new Error('Cannot instantiate abstract class');
        }
        this.createdAt = new Date();
    }

    validate() {
        throw new Error('Abstract method must be implemented');
    }
}


export default BaseModel;
