setInterval(breath, 3000);

function breath(){
    $("body").fadeTo(1500, 10, function(){
        $("body").fadeTo(1500, 100);
    });
}