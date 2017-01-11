"use strict";
//Revaling module pattern
(function(){
    var minuMoodul = (function(){
        var nimi = 'Juku';
        var vanus = 34;
        function ytleNimi(){
            console.log(nimi);
        };
        function muudaNime(uusNimi){
            nimi = uusNimi.toLowerCase();
        };
        return{
            ytleNimi: ytleNimi,
            muudaNimi: muudaNime
        };
    })();
    minuMoodul.muudaNimi('aKTO');
    minuMoodul.ytleNimi();
})();

/**********/

(function (){
    var loomad = (function(){
        var loomad = ['Kass', 'Koer'];
        
        //salvestaDOM
        var $el = $('#moodulLoomad');
        var $sisend = $el.find('#sisend');
        var $nupp = $el.find('#nupp');
        var $nimekiri = $el.find('#nimekiri');
        var $muster = $el.find('#loomadeMuster').html();  

        //lood syndmused
        $nupp.on('click', lisaLoom);
        $sisend.keyup(function(syndmus){
            if(syndmus.keyCode === 13)
                $nupp.click();
        });
        $nimekiri.on('click', 'li button', eemaldaLoom);

        function _kustutaSyndmused() {
            $nimekiri.off('click', 'li button', eemaldaLoom);
            $nupp.off('click', lisaLoom);
        };
        function _kuva() {
            $nimekiri.html(Mustache.render($muster, {loomad: loomad}));
            syndmused.kiirga('loomadeHulkMuutus', loomad.length);
        };
        _kuva();
        function kustutamine() {
            _kustutaSyndmused();
            loomad = [];
            $el.html('');
        };
        function lisaLoom(uusLoom) {
            //if($sisend.val() === '')
            //tingimus ? tõene : väär
            var loom = (typeof uusLoom === "string") ? uusLoom : $sisend.val();
            loom = loom.substr(0,1).toUpperCase() + loom.substr(1,loom.length);
            loomad.push(loom);
            _kuva();
            $sisend.val('');
        };
        function eemaldaLoom(syndmus){
            var mitmes = 0;
            if (typeof syndmus === "number") {
                mitmes = syndmus;
            } else {
                var $eemaldatav = $(syndmus.target).closest('li');
                mitmes = $nimekiri.find('li').index($eemaldatav);
            }
            loomad.splice(mitmes, 1);
            _kuva();
        };
        return{
            lisaLoom: lisaLoom,
            eemaldaLoom: eemaldaLoom,
            kustuta: kustutamine
        };
    })();
    loomad.lisaLoom('Karu');
    //'' == 0
    loomad.eemaldaLoom(1);
    //loomad.kustuta();
 })();   