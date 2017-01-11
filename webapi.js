'use strict';
//web apis
    //websocket
    let wsURI = "ws://echo.websocket.org";
    let socket = new WebSocket(wsURI);
    socket.onopen = function(){ 
        console.log('avatud');
        socket.send('Tere Tulemast');
    };
    socket.onmessage = function(event){ 
        console.log(event.data);
        //socket.close();
    };
    //ajax
    let $tekstiV2li = $('#minuTekstid');
    let $valija = $('#tekstiValija');
    //leia bug
    //$valija.on('change', n2itaTekst($valija.value));
    function n2itaTekst(s6ne) {
        //s6ne = 'tekst1';
        if(s6ne === 'undefined' || s6ne === ''){
            $tekstiV2li.html('');
            return;
        } else { 
            socket.send(s6ne);
            let xhttp = new XMLHttpRequest();
            //xhttp.responseType = "document";

            xhttp.open('GET', ('http://localhost:3000/'+s6ne+'.html'), true);
            
            xhttp.onreadystatechange = function(){
                
                if(this.readyState === 4 && this.status === 200){
                    console.log(this.responseText);
                    $('#minuTekstid').html(this.responseText);
                }
            };
            
            xhttp.send();
        }
    }

    //Drag and drop
    function lubaAsetada(event) {
        event.preventDefault();
    };
    function t6mba(event) {
        event.dataTransfer.setData('tekst', event.target.id);
    };
    function aseta(event){
        event.preventDefault();
        var andmed = event.dataTransfer.getData('tekst');
        event.target.appendChild(document.getElementById(andmed));
    };
