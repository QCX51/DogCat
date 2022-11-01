const toggleMenuOpen = () => document.body.classList.toggle("open");
// ######## OAuth API
hello.init({
    facebook: "605612360973350",
    google: "679313092033-2j8qabl5e3dt2agp8c1aso4a736ghsos.apps.googleusercontent.com"
},
{
    redirect_uri: "https://dog-cat-7b3a6.web.app/"
});

hello.on("auth.login", function(auth)
{
    // Call user information, for the given network
    hello(auth.network).api("me").then(function(p)
    {
        alert("Hola" + p.first_name);
        // p.first_name,
        // p.last_name,
        // p.email,
        // p.thumbnail
    });
});

// Logout button
const logout = function()
{
    hello("google").logout().then(function()
    {
        window.location.href = "/";
    }, function(e)
    {
        console.log("logout error: " + e.error.message);
    });
}
// sign in usin Google button
//initOAuth("google");
// sign in usin Facebook button
//initOAuth("facebook");

function initOAuth(network, force = false) {
    // Make a login call and handle the response using promises
    var hi = hello(network);
    hi.login({display: "popup", scope: "email", force: force}).then(function()
    {
        console.log("fullfilled", "making api call");
        // Reurn another promise to get the users profile.
        return 	hi.api("me");
    }).then(function(p)
    {
        // Print it to console.
        console.log("hello.api(me) was fullfilled", p);
        return p;
    }).then(function(p)
    {
        // p.first_name
        // p.last_name
        // p.email
        // p.name
        // p.thumbnail
        // p.id
    }).then(null, function(e)
    {
        // Uh oh
        console.error(e);
    });
}

// ######## Google Maps API

let map, marker;
async function initMap()
{
let data =
{
latitud: parseFloat("20.485193215567346"),
longitud: parseFloat("-99.21841097091944"),
nombre: "Ubicacion"
}
// Asigna las coordenadas: longitud, latitud a la constante coords
// Mustra el mapa con las coordenadas asignadas
map = new google.maps.Map(document.getElementById("map"),
{
center: { lat: data.latitud, lng: data.longitud }, // centra el mapa en las coordenadas asignadas a la constante
zoom: 17,
});

// Especifica un marcador personalizado con el tamano determinado
const icon = {
    url: "../images/dog-cat.gif", // url
    scaledSize: new google.maps.Size(60, 60), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};

// Agrega un marcador al mapa
marker = new google.maps.Marker({
draggable: true,
animation: google.maps.Animation.DROP,
position: { lat: data.latitud, lng: data.longitud }, // centra el marcador en las coordenadas asignadas a la constante
map,
icon: icon,
title: data.nombre, // Agrega un titulo la marcador
});
}

// ########## Email / Password validations
function validateEmail(email)
{
  if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
    alert("Please enter a valid email address")
    return false;
} else {
    alert("login");
    return true;
}
}

function select(kind) {
    console.log(kind);
}