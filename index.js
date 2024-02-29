export class Validator {
    validateUsername(username) {
        const regex = /^(?!.*\d{4,})[a-zA-Z](?!.*[_-]$)[a-zA-Z0-9_-]{2,}(?<![_-])$/;
        return regex.test(username);
    } 
}