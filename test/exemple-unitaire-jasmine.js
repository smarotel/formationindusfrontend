function bonjour(prenom){
    return 'Bonjour ' + prenom;
}
describe('Test de la fonction bonjour', function() {
    it("bonjour(Seb) devrait r�pondre Bonjour Seb", function() {
        var result = bonjour('Seb');
        expect(result).toEqual('Bonjour Seb');
    });
})
