function bonjour(prenom){
    return 'Bonjour ' + prenom;
}
QUnit.test('Test de la fonction bonjour', function() {
    var result = bonjour('Seb');
    QUnit.assert.equal(result,'Bonjour Seb', 'Bonjour Seb : OK');
    QUnit.assert.notEqual(result,'Bonjour Toto','Bonjour Toto : OK');
})