"use strict";

//PubSub pattern
var syndmused = {
    syndmused: {},
    sees: function(syndmuseNimi, funktsioon) {
        this.syndmused[syndmuseNimi] = this.syndmused[syndmuseNimi] || [];
        this.syndmused[syndmuseNimi].push(funktsioon);
    },
    v2ljas: function(syndmuseNimi, funktsioon) {
        if (this.syndmused[syndmuseNimi]){
            for (var i = 0; i < this.syndmused[syndmuseNimi].length; ++i) {
                if (this.syndmused[syndmuseNimi][i] === funktsioon) {
                    this.syndmused[syndmuseNimi].splice(i, 1);
                    break;
                }
            }
        }
    },
    kiirga: function(syndmuseNimi, andmed) {
        if (this.syndmused[syndmuseNimi]) {
            this.syndmused[syndmuseNimi].forEach(
                function(funktsioon) {
                    funktsioon(andmed);
                }
            );
        }
    }
};