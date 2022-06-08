window.onload = function(){
    getExperiences()
}

//We get an array of experiencias
function getExperiences(){
    try{
    fetch('http://localhost:1337/api/experiencias?populate=*')
      .then(response => response.json())
      .then(data =>
      data.data.forEach(writeExperiences))
    }
    catch{
        var exp_div = document.getElementById("experiences-list")
        exp_div.innerHTML = ` NO HEMOS PODIDO CARGAR LOS DATOS`
    }
}

function writeExperiences(element){
        var api_url = 'http://localhost:1337'
        var exp_div = document.getElementById("experiences-list")
        var exp = element.attributes
        var exp_empresa = exp.Empresa
        var exp_descripcion = exp.Descripcion_del_puesto
        var exp_fecha = exp.Fecha
        var exp_ubicacion = exp.Ubicacion
        var img_url = exp.logo.data.attributes.url
        img_url = api_url  + img_url
        exp_div.innerHTML +=
        `
        <div class="experiencias">
                <div class="container">
                    <div class="row">
                      <div class="col-md-1 d-flex justify-content-right text-right col-sm-1 d-flex justify-content-right text-right col-xs-1 d-flex justify-content-right text-right">
                           <i class="fa fa-caret-right"></i>
                      </div>
                      <div class="col-md-2 d-flex justify-content-right text-right col-sm-11 d-flex justify-content-left text-left col-xs-11 d-flex justify-content-left text-left">
                           <h2>${exp_fecha}</h2>
                           <p>${exp_ubicacion.toUpperCase()}</p>
                           <img src=${img_url}>
                      </div>                        
                      
                      <div class="col-md-9 d-flex justify-content-center text-justify col-sm-12 d-flex justify-content-center text-center col-xs-12 d-flex justify-content-center text-center">
                        <div class="right-col">  
                           <h3>${exp_empresa}</h3>
                           <p>${exp_descripcion}</p>
                        </div>
                      </div>
                    </div>
                </div>
        </div>
        
        `
}