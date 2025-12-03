/// index.js

function readSymptomen() {
    let outputdiv = document.getElementById("outputdiv");
    outputdiv.innerHTML = "";

    let naam = document.getElementById("naam").value.toUpperCase();
    let leeftijd = document.getElementById("leeftijd").value.toUpperCase();
    let symptoom1 = document.getElementById("symptoom1").value.toUpperCase();
    let symptoom2 = document.getElementById("symptoom2").value.toUpperCase();
    let symptoom3 = document.getElementById("symptoom3").value.toUpperCase();

    if (!naam || !leeftijd) {
        outputdiv.innerHTML = `<p><strong>Vul alstublieft uw naam en leeftijd in.</strong></p>`;
    }

    else if (leeftijd >= 18 && symptoom1 != 0 && symptoom2 || symptoom3 != 0){
        outputdiv.innerHTML = `<h1>Waarschuwing</h1>
        <p>Beste ${naam}. U heeft ${symptoom1} en ${symptoom2}. Wij adviseren u dringend om (direct) naar het ziekenhuis te gaan.</p>`
    }

    else if (leeftijd < 18 && symptoom1 != 0 && symptoom2 && symptoom3 != 0){
        outputdiv.innerHTML = `<h1>Waarschuwing</h1>
        <p>Beste ${naam}. U heeft ${symptoom1}, ${symptoom2} en ${symptoom3}. Wij adviseren u dringend om (direct) naar het ziekenhuis te gaan.</p>`
    }


    outputdiv.style.display = "block";
}