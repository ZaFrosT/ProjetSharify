const form = $('#my-form');

function handleSubmit(event){
    const name = $('input[name=firstname]'.val());
    const age = $('input[name=age]'.val());
    const nameValid = name===name[0].toUpperCase() && name.length <= 30;
    const ageValid = 0 < age && age < 110;
    const sex = $('input[name=sexe]:checked').val();
    
    event.preventDefault();
}
form.submit(handleSubmit);


// POUR NE PAS ENVOYER LA REQUETE SI PAS BON

$("#my-form").submit(function(stopSubmit){
    stopSubmit.preventDefault();
});

// Pour confirmer avec ENTER

jQuery(document).on("keypress", function (e) { 
    if (e.keyCode == 13) {
    e.preventDefault();
    VOTRE _FONCTION_QUI_CREER_LES_LI();
    }
    });
