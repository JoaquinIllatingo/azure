$(document).ready(function() {
    $.ajax({
        url: "http://52.154.167.94/api/customers/api/customers",
        headers: { 'Ocp-Apim-Subscription-Key': 'cdb4cfbcc5904698a85e3e7ffcaf21e8;product=unlimited' }
    }).then(function(data) {
       $('.clientes').append(data[Math.floor(Math.random()*3)]);
    });
});

/* $(document).ready(function() {
    $.ajax({
        url: "http://52.141.219.120/products/api/products",
        headers: { 'Ocp-Apim-Subscription-Key': '9db32e4fed844af0aac4537ed2f784c8;product=unlimited' }
    }).then(function(data) {
       $('.productos').append(data[Math.floor(Math.random()*3)]);
    });
}); */ 