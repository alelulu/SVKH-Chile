import { viewContact } from "./viewcontact.js";
import { viewAbout } from "./viewabout.js";
import { viewSpecialists } from "./viewspecialists.js"
import { viewInfo } from "./viewinfo.js"
import { viewSymtoms } from "./viewsymtoms.js"

export const viewHome = () => {
	document.getElementById('root').innerHTML = `


 
        
       <div class="row">
         <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
             <img src="./assets/img/home_1.png" class="home_1"alt="home_1" >
         </div>
         <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 align-self-center">
            <p class="txt-def">Somos Sindrome-Vogt-Koyanagi Harada Chile.
             Nuestra agrupación iniciada el 2017, busca hacer visible el sindrome en Chile y el mundo.
              Hoy estamos en proceso de convertirnos en fundación, para eso nocesitamos llegar a mas personas que nos reconozcan.
        <br>
            Conoce un poco mas de SVKH Chile.
             <p/>
            <button id="btn-to-about" class="btn blue-btn">Ver más</button>
        </div>
         
     
      </div>
   
  <br>
           <div class="row">
                  <h1>Informate sobre el VKH </h1>
           </div>
        <br>
          
                  <div class="row">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 colInfo">
                       <img src="./assets/img/home_2.png" class="home_2"alt="home_2" >
                        <h3> Sintomas</h3>
                         <p>Conoce los principales síntomas del Sindrome Vogt Koyanagi Harada. </p>
                         <button id="btn-to-symtoms" class="btn blue-btn">Ver más</button>
                    </div> 
                       <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 colInfo">
                          <img src="./assets/img/home_3.png" class="home_3"alt="ojo" >
                           <h3>Medicos en Chile</h3>
                            <p>Lista de médicos tratantes en Chile. </p>
                            <button id="btn-to-especialist" class="btn blue-btn">Ver más</button>
                       </div>   
                
                       <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 colInfo">
                            <img src="./assets/img/home_4.png" class="home_4"alt="tratamiento" >
                             <h3>Tratamientos</h3>
                             <p>Guia para conocer los pricipales tratamientos, guiado por médicos especialistas. </p>
                             <button id="btn-to-tratment" class="btn blue-btn">Ver más</button>
                       </div>     
                  </div>  
             
          
            <br>
            
                  <div class="row">
                       <h3>Agrupaciones Amigas </h3>
                  </div>
                  <br>
               <div class="row">
                 
                     
                        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                           <img src="./assets/img/home_5.png" class="home_5"alt="uveitis Argentina" >
                            <div class="txt-center">
                             <p class="friend">    Grupo Argentina de Uveitis </p>
                             </div>
                        </div> 
                           <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                              <img src="./assets/img/home_6.png" class="home_6"alt="mexico ayuda svkh" >
                               
                                <p class="friend">Mexico ayuda Sindrome Vogt-Koyanagi Harada </p>
                                
                           </div>   
                    
                           <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <img src="./assets/img/home_7.png" class="home_7"alt="Epistemonikos" >
                                 
                                 <p class="friend">Epistemonikos </p>
                             
                           </div>   
                       
                   </div>     
                </div>
           
  
       
    
       
	`
  document.getElementById('btn-to-about').addEventListener('click', () => {
    viewAbout();
    window.location.hash = '#/nosotros';
})
document.getElementById('btn-to-symtoms').addEventListener('click', () => {
  viewSymtoms();
  window.location.hash = '#/sintomas';
})
document.getElementById('btn-to-especialist').addEventListener('click', () => {
  viewSpecialists();
  window.location.hash = '#/especialistas';
})
document.getElementById('btn-to-tratment').addEventListener('click', () => {
  viewSpecialists();
  window.location.hash = '#/tratamientos';
})
}