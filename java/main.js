
        const clavier = [...document.querySelectorAll('.btn')] ;
        //console.log (clavier)
        const listekeycode = clavier.map(clavier => clavier.dataset.key );
        //console.log(listekeyCode)
        const ecran = document.querySelector('.ecran');


        document.addEventListener('Keydown', (e) => {
            const valeur = e.keycode.toString(); 
            console.log(valeur, typeof valeur)
            calculer(valeur)
        }  )

        document.addEventListener('click', (e) => {
            //console.log(e)
            const valeur = e.target.dataset.key;
            //console.log(valeur, typeof valeur)
            calculer(valeur)
        })

        const calculer = (valeur) => {
            if (listekeycode.includes(valeur)) {
            //console.log(listekeyCode)
            switch (valeur) {
                case '8':
                ecran.textContent = "";
                break;
                case '13':
                    const calcul = eval(ecran.textContent);
                    ecran.textContent = calcul;
                    break;
                    default:
                        const indexkeycode = listekeycode.indexOf(valeur);
                        const clavier = clavier[indexkeycode];
                        ecran.textContent += clavier.innerHTML;
            }
            }
        }

        window.addEventListener('error', (e) => {
            alert ('Une erreur est survenu dans votre calcul : ' + e.message )
        })
