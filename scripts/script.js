        document.addEventListener('DOMContentLoaded', function() {
          const packs = document.querySelectorAll('.pack'); 
          packs.forEach(pack => {
            const contenidoExtra = pack.querySelector('.contenidoExtra'); 

            contenidoExtra.classList.remove('show'); 

            
            pack.addEventListener('click', () => {
              contenidoExtra.classList.toggle('show'); 
            });
          });
        });
     