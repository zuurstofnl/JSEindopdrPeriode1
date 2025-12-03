/// begroting.js

function berekenBegroting() {
    let outputdiv = document.getElementById("outputdiv");
    outputdiv.innerHTML = "";

    let begrotingtotaal = 330000000000;
    let ministerie1 = parseInt(document.getElementById("algemenezaken").value);
    let ministerie2 = parseInt(document.getElementById("asielenmigratie").value);
    let ministerie3 = parseInt(document.getElementById("binnenlandsezaken").value);
    let ministerie4 = parseInt(document.getElementById("buitenlandsezaken").value);
    let ministerie5 = parseInt(document.getElementById("defensie").value);
    let ministerie6 = parseInt(document.getElementById("economischezaken").value);
    let ministerie7 = parseInt(document.getElementById("financien").value);
    let ministerie8 = parseInt(document.getElementById("infraenws").value);
    let ministerie9 = parseInt(document.getElementById("justitienv").value);
    let ministerie10 = parseInt(document.getElementById("klimaat").value);
    let ministerie11 = parseInt(document.getElementById("landbouw").value);
    let ministerie12 = parseInt(document.getElementById("onderwijs").value);
    let ministerie13 = parseInt(document.getElementById("socialezaken").value);
    let ministerie14 = parseInt(document.getElementById("volksgezondheid").value);
    let ministerie15 = parseInt(document.getElementById("volkshuisvesting").value);

    let totaal = ministerie1 + ministerie2 + ministerie3 + ministerie4 + ministerie5 + ministerie6 + ministerie7 + ministerie8 + ministerie9 + ministerie10 + ministerie11 + ministerie12 + ministerie13 + ministerie14 + ministerie15;
    let verschil = begrotingtotaal - totaal;
    
    let formatTotaal = totaal.toLocaleString('nl-NL');
    let formatVerschil = verschil.toLocaleString('nl-NL');


    if (verschil < 0) {
        let tekort = (verschil * -1).toLocaleString('nl-NL');
        outputdiv.innerHTML = `
        <h1>Resultaat</h1>
        <p>Totaal uitgegeven: €${formatTotaal}</p><br>
        <p id="tekort"><strong>Tekort: €${tekort}</strong></p>`
    } else {
        outputdiv.innerHTML = `
        <h1>Resultaat</h1>
        <p>Totaal uitgegeven: €${formatTotaal}</p><br>
        <p><strong>Restrerend bedrag: €${formatVerschil}</strong></p>`
    }

    outputdiv.style.display = "block";
    
}