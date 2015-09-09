require.config({
    shim : {
        bootstrap : { deps :['jquery'] }
    },
    paths: {
        jquery: 'bower_components/jquery/dist/jquery',
        bootstrap : 'bower_components/bootstrap/dist/js/bootstrap'
    }
});

require([
    'js/show-contact',
    'js/scrollspy-menu',
    'js/RequiredValidator2'
], function(afficherContact, scrollspyMenu, RequiredValidator) {
    afficherContact();
    scrollspyMenu();

    document.forms.contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var validator = new RequiredValidator(this, ['email','message']);
        if (validator.validate()) {
            alert('Le form est valide');
        } else {
            alert('Erreur de form');
        }
    });
});
