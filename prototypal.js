'use strict';
//prototypal
(function(){
    var objekt = {
        klass: 'objekt 2',
        create: function(v22rtused) {
            var instant = Object.create(this);
            Object.keys(v22rtused).forEach(
                function(v6ti){
                    instant[v6ti] = v22rtused[v6ti]
                }
            );
            return instant;
        }
    };
    var loom = objekt.create({
        klass: 'loom 2',
        klassifitseeri: function(){
            console.log(this.klass);
        },
        nimeta: function(){
            console.log(this.nimetus);
        }
    });
    var lind = loom.create({
        klass: 'lind 2',
        lenda: function(){
            if(this.kasLendab)
                console.log('Ma lendan 2');
            else
                console.log('Ära õrrita 2');
        }
    });
    var sinuKana = lind.create({
        nimetus: 'kana 2',
        kasLendab: false
    });
    sinuKana.klassifitseeri();
    sinuKana.nimeta();
    sinuKana.lenda();

})();

//es6 supported by current browsers
(function(){
    //Ei saa muuta hilisemalt
    const PI = 3.14;
    //Saab muuta
    let massiiv = ['Tere', 'Hei'];
    //let toimib nii if kui ka for loobis
    {
        const i = 0;
        let element = massiiv[i];
        var muutuja2 = massiiv[i];
    }
    muutuja2 = 5; //vana viis lubas läbi
    //element = 5; //viga kui strict
    //const > let > var
})();