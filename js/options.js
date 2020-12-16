document.getElementById("soyArt").onmouseover= focusArtistas

function focusArtistas () {
    //$("#soyArt").html("<h2 id='soyArtTx'>Soy artista</h2> <a href='artistas.html'><button id='btnArt'>Ingresar</button></a>"); 
    debugger
    $("#btnArt").show(); 
    document.getElementById("soyArt").style.height="59vh"
    document.getElementById("hero").style.height="30vh"
    document.getElementById("cardW").style.flexDirection="row"
    document.getElementById("cardW").style.justifyContent="start"
    document.getElementById("cardW").style.alignItems="center"
    document.getElementById("cardW").style.paddingBottom="0rem"
    document.getElementById("cardW").style.paddingTop="0rem"
    document.getElementById("bym").style.marginLeft="1.5rem"
    document.getElementById("cisum").style.fontSize="3rem"
    document.getElementById("bym").style.fontSize="1.5rem"
    document.getElementById("cardW").style.marginTop="3rem"
    document.getElementById("soyCont").style.height="auto"
    document.getElementById("soyFan").style.height="auto"
    document.getElementById("soyArtTx").style.fontSize="4rem"
    // document.getElementById("btnArt").style.display="contents"
    document.getElementById("soyContTx").style.fontSize="2.5rem"
    document.getElementById("soyFanTx").style.fontSize="2.5rem"
    document.getElementById("soyArt").style.backgroundColor="none"
    document.getElementById("btnArt").style.fontSize="3rem"
    document.getElementById("btnArt").style.backgroundColor="rgba(134, 103, 166, 0.5)"
    $("#btnCont").hide(); 
    $("#btnFan").hide(); 
}

document.getElementById("hero").onmouseover= focusHero
function focusHero () {
    document.getElementById("soyArt").style.height="auto"
    document.getElementById("hero").style.height="79vh"
    document.getElementById("cardW").style.flexDirection="column"
    document.getElementById("cardW").style.justifyContent="center"
    document.getElementById("cardW").style.alignItems="start"
    document.getElementById("cardW").style.paddingBottom="1rem"
    document.getElementById("cardW").style.paddingTop="1rem"
    document.getElementById("bym").style.marginLeft="0rem"
    document.getElementById("cisum").style.fontSize="5rem"
    document.getElementById("bym").style.fontSize="3rem"
    document.getElementById("soyCont").style.height="auto"
    document.getElementById("soyFan").style.height="auto"
    document.getElementById("soyArt").style.height="auto"
    document.getElementById("soyArtTx").style.fontSize="2.5rem"
    document.getElementById("soyContTx").style.fontSize="2.5rem"
    document.getElementById("soyFanTx").style.fontSize="2.5rem"
    document.getElementById("btnArt").style.display="none"
    $("#btnCont").hide(); 
    $("#btnFan").hide(); 
}
document.getElementById("soyCont").onmouseover= focusEmpresa

function focusEmpresa () {
    $("#btnCont").show();
    document.getElementById("soyCont").style.height="59vh"
    document.getElementById("hero").style.height="30vh"
    document.getElementById("cardW").style.flexDirection="row"
    document.getElementById("cardW").style.justifyContent="start"
    document.getElementById("cardW").style.alignItems="center"
    document.getElementById("cardW").style.paddingBottom="0rem"
    document.getElementById("cardW").style.paddingTop="0rem"
    document.getElementById("bym").style.marginLeft="1.5rem"
    document.getElementById("cisum").style.fontSize="3rem"
    document.getElementById("bym").style.fontSize="1.5rem"
    document.getElementById("cardW").style.marginTop="3rem"
    document.getElementById("soyArt").style.height="auto"
    document.getElementById("soyFan").style.height="auto"
    document.getElementById("soyArtTx").style.fontSize="2.5rem"
    document.getElementById("soyContTx").style.fontSize="4rem"
    document.getElementById("soyFanTx").style.fontSize="2.5rem"
    document.getElementById("btnArt").style.display="none"
    $("#btnFan").hide(); 
}

document.getElementById("soyFan").onmouseover= focusFan

function focusFan () {
    document.getElementById("soyFan").style.height="59vh"
    document.getElementById("hero").style.height="30vh"
    document.getElementById("cardW").style.flexDirection="row"
    document.getElementById("cardW").style.justifyContent="start"
    document.getElementById("cardW").style.alignItems="center"
    document.getElementById("cardW").style.paddingBottom="0rem"
    document.getElementById("cardW").style.paddingTop="0rem"
    document.getElementById("bym").style.marginLeft="1.5rem"
    document.getElementById("cisum").style.fontSize="3rem"
    document.getElementById("bym").style.fontSize="1.5rem"
    document.getElementById("cardW").style.marginTop="3rem"
    document.getElementById("soyArt").style.height="auto"
    document.getElementById("soyCont").style.height="auto"
    document.getElementById("soyArtTx").style.fontSize="2.5rem"
    document.getElementById("soyContTx").style.fontSize="2.5rem"
    document.getElementById("soyFanTx").style.fontSize="4rem"
    document.getElementById("btnArt").style.display="none"
    $("#btnCont").hide(); 
    $("#btnFan").show(); 
}

