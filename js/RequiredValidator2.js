(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports"], function (require, exports) {
    var RequiredValidator = (function () {
        function RequiredValidator(form, fieldList) {
            this.form = form;
            this.fieldList = fieldList || [];
        }
        RequiredValidator.prototype.validate = function () {
            var valid = true;
            var that = this;
            this.fieldList.forEach(function (field) {
                if (that.form[field].value === '') {
                    valid = false;
                }
            });
            return valid;
        };
        return RequiredValidator;
    })();
    return RequiredValidator;
});
//# sourceMappingURL=RequiredValidator2.js.map