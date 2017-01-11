"use strict";
//classical
function p2randab(laps, vanem) {
    laps.vanem_ = vanem;
    laps.prototype = Object.create(
        vanem.prototype,
        {
            constructor: {
                value: laps,
                enumerable: false,
                writable: true,
                configurable: true
            }
        }
    );
};

(function(){
    var Loom = function(nimetus, h22litsus) {
        this.nimetus = nimetus;
        this.h22litsus = h22litsus;
    };
    Loom.prototype.nimeta = function(){
        console.log('See loom on ' + this.nimetus);
    };
    Loom.prototype.h22litse = function(){
        console.log(this.h22litsus);
    };

    //instantsid
    var minuKass = new Loom('kass', 'mjau');
    var temaKoer = new Loom('koer', 'vuff');

    minuKass.h22litse();
    temaKoer.nimeta();

    //pärandamine
    var Lind = function(nimetus, h22litsus, kasLendab) {
        Lind.vanem_.call(this, nimetus, h22litsus);
        this.kasLendab = kasLendab;
    };
    p2randab(Lind, Loom);
    Lind.prototype.lenda = function() {
        if(this.kasLendab)
            console.log('Ma lendan');
        else
            console.log('Ära õrrita!');
    };
    Lind.prototype.nimeta = function() {
        console.log('See lind on ' + this.nimetus);
    };

    var sinuKana = new Lind('kana', 'pak-pak', false);
    sinuKana.nimeta();
    sinuKana.lenda();
})();   