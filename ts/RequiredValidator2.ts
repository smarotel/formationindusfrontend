class RequiredValidator {
    form: HTMLFormElement;
    fieldList: Array<String>;
    constructor(form: HTMLFormElement, fieldList?: Array<String>) {
        this.form = form;
        this.fieldList = fieldList || [];
    }
    validate(): boolean {
        var valid = true;
        var that = this;
        this.fieldList.forEach(function(field: string) {
            if (that.form[field].value === '') {
                valid = false;
            }
        })
        return valid;
    }
}
export = RequiredValidator;
