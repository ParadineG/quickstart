"use strict";
// object literal module pattern
(function(){
    var minuMoodul = {
        nimi: 'Juku',
        vanus: 34,
        ytleNimi: function(){
            console.log(this.nimi);
        },
        muudaNimi: function(uusNimi){
            this.nimi = uusNimi;
        }
    };

    minuMoodul.ytleNimi();
    minuMoodul.muudaNimi('Kalle');
    minuMoodul.ytleNimi();
})();

/**********/

(function(){
    var loomad = {
        loomad: ['Kass', 'Koer'],
        loo: function(){
            this.salvestaDOM();
            this.seoSyndmused();
            this.kuva();
        },
        salvestaDOM: function() {
            this.$el = $('#moodulLoomad');
            this.$sisend = this.$el.find('#sisend');
            this.$nupp = this.$el.find('#nupp');
            this.$nimekiri = this.$el.find('#nimekiri');
            this.$muster = this.$el.find('#loomadeMuster').html();  
        },
        seoSyndmused: function() {
            this.$nupp.on('click', this.lisaLoom.bind(this));
            this.$nimekiri.on('click', 'li button', this.eemaldaLoom.bind(this));
        },
        kustutaSyndmused: function() {
            this.$nimekiri.off('click', 'li button', this.eemaldaLoom);
            this.$nupp.off('click', this.lisaLoom);
        },
        kuva: function() {
            var andmed = {
                loomad: this.loomad
            };
            this.$nimekiri.html(Mustache.render(this.$muster, andmed));
        },
        kustutamine: function() {
            this.kustutaSyndmused();
            this.loomad = [];
            this.$el.html('');
        },
        lisaLoom: function(uusLoom) {
            //tingimus ? tõene : väär
            var loom = (typeof uusLoom === "string") ? uusLoom : this.$sisend.val();
            loom = loom.substr(0,1).toUpperCase() + loom.substr(1,loom.length);
            this.loomad.push(loom);
            this.kuva();
            this.$sisend.val('');
        },
        eemaldaLoom: function(syndmus){
            var mitmes = 0;
            if (typeof syndmus === "number") {
                mitmes = syndmus;
            } else {
                var $eemaldatav = $(syndmus.target).closest('li');
                mitmes = this.$nimekiri.find('li').index($eemaldatav);
            }
            this.loomad.splice(mitmes, 1);
            this.kuva();
        }
    };
    loomad.loo();
    loomad.lisaLoom('Karu');
    //'' == 0
    loomad.eemaldaLoom(1);
})();