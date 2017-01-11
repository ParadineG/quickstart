"use strict";
(function(){
    var loomadeHulk = 0;

    //salvestame DOM
    var $statistika = $('#moodulStatistika');
    var $muster = $statistika.find('#statistikaMuster').html();

    //seome syndmused
    syndmused.sees('loomadeHulkMuutus', seaLoomadeHulk);

    function _kuva() {
        $statistika.html(Mustache.render($muster, {statistika: loomadeHulk}));
    };

    _kuva();

    function seaLoomadeHulk(uusLoomadeHulk) {
        loomadeHulk = uusLoomadeHulk;
        _kuva();
    };
})();  