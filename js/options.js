document.getElementById("soyArt").onmouseover= focusArtistas

function focusArtistas () {
    $("#btnArt").show(); 
    document.getElementById("soyArt").style.height="59vh"
    document.getElementById("hero").style.height="23vh"
    document.getElementById("cardW").style.flexDirection="row"
    document.getElementById("cardW").style.justifyContent="start"
    document.getElementById("cardW").style.alignItems="center"
    document.getElementById("cardW").style.paddingBottom="0rem"
    document.getElementById("cardW").style.paddingTop="0rem"
    document.getElementById("bym").style.marginLeft="1.5rem"
    document.getElementById("cisum").style.fontSize="3rem"
    document.getElementById("bym").style.fontSize="1.5rem"
    document.getElementById("cardW").style.marginTop="3rem"
    document.getElementById("soyCont").style.height="9vh"
    document.getElementById("soyFan").style.height="9vh"
    document.getElementById("soyArtTx").style.fontSize="3.5rem"
    document.getElementById("soyContTx").style.fontSize="2.5rem"
    document.getElementById("soyFanTx").style.fontSize="2.5rem"
    document.getElementById("soyArt").style.backgroundColor="none"
    document.getElementById("btnArt").style.fontSize="3rem"
    document.getElementById("soyContTx").style.marginTop="0rem"
    document.getElementById("soyArtTx").style.marginTop="4.5rem"
    document.getElementById("soyFanTx").style.marginTop="0rem"
    $("#btnCont").hide(); 
    $("#btnFan").hide(); 
}

document.getElementById("hero").onmouseover= focusHero
function focusHero () {
    document.getElementById("soyArt").style.height="9vh"
    document.getElementById("hero").style.height="73vh"
    document.getElementById("cardW").style.flexDirection="column"
    document.getElementById("cardW").style.justifyContent="center"
    document.getElementById("cardW").style.alignItems="start"
    document.getElementById("cardW").style.paddingBottom="1rem"
    document.getElementById("cardW").style.paddingTop="1rem"
    document.getElementById("bym").style.marginLeft="0rem"
    document.getElementById("cisum").style.fontSize="5rem"
    document.getElementById("bym").style.fontSize="3rem"
    document.getElementById("soyCont").style.height="9vh"
    document.getElementById("soyFan").style.height="9vh"
    document.getElementById("soyArt").style.height="9vh"
    document.getElementById("soyArtTx").style.fontSize="2.5rem"
    document.getElementById("soyContTx").style.fontSize="2.5rem"
    document.getElementById("soyFanTx").style.fontSize="2.5rem"
    document.getElementById("btnArt").style.display="none"
    document.getElementById("soyContTx").style.marginTop="0rem"
    document.getElementById("soyArtTx").style.marginTop="0rem"
    document.getElementById("soyFanTx").style.marginTop="0rem"
    $("#btnCont").hide(); 
    $("#btnFan").hide(); 
}
document.getElementById("soyCont").onmouseover= focusEmpresa

function focusEmpresa () {
    $("#btnCont").fadeIn();
    document.getElementById("soyCont").style.height="59vh"
    document.getElementById("hero").style.height="23vh"
    document.getElementById("cardW").style.flexDirection="row"
    document.getElementById("cardW").style.justifyContent="start"
    document.getElementById("cardW").style.alignItems="center"
    document.getElementById("cardW").style.paddingBottom="0rem"
    document.getElementById("cardW").style.paddingTop="0rem"
    document.getElementById("bym").style.marginLeft="1.5rem"
    document.getElementById("cisum").style.fontSize="3rem"
    document.getElementById("bym").style.fontSize="1.5rem"
    document.getElementById("cardW").style.marginTop="3rem"
    document.getElementById("soyArt").style.height="9vh"
    document.getElementById("soyFan").style.height="9vh"
    document.getElementById("soyArtTx").style.fontSize="2.5rem"
    document.getElementById("soyContTx").style.fontSize="3.5rem"
    document.getElementById("soyFanTx").style.fontSize="2.5rem"
    document.getElementById("btnArt").style.display="none"
    document.getElementById("soyContTx").style.marginTop="4.5rem"
    document.getElementById("soyArtTx").style.marginTop="0rem"
    document.getElementById("soyFanTx").style.marginTop="0rem"
    $("#btnFan").hide(); 
}

document.getElementById("soyFan").onmouseover= focusFan

function focusFan () {
    document.getElementById("soyFan").style.height="59vh"
    document.getElementById("hero").style.height="23vh"
    document.getElementById("cardW").style.flexDirection="row"
    document.getElementById("cardW").style.justifyContent="start"
    document.getElementById("cardW").style.alignItems="center"
    document.getElementById("cardW").style.paddingBottom="0rem"
    document.getElementById("cardW").style.paddingTop="0rem"
    document.getElementById("bym").style.marginLeft="1.5rem"
    document.getElementById("cisum").style.fontSize="3rem"
    document.getElementById("bym").style.fontSize="1.5rem"
    document.getElementById("cardW").style.marginTop="3rem"
    document.getElementById("soyArt").style.height="9vh"
    document.getElementById("soyCont").style.height="9vh"
    document.getElementById("soyArtTx").style.fontSize="2.5rem"
    document.getElementById("soyContTx").style.fontSize="2.5rem"
    document.getElementById("soyFanTx").style.fontSize="3.5rem"
    document.getElementById("btnArt").style.display="none"
    document.getElementById("btnFan").style.fontSize="3rem"
    document.getElementById("soyContTx").style.marginTop="0rem"
    document.getElementById("soyArtTx").style.marginTop="0rem"
    document.getElementById("soyFanTx").style.marginTop="4.5rem"
    $("#btnCont").hide(); 
    $("#btnFan").fadeIn(); 
}

