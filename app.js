const sections = document.querySelectorAll('.section');
const sectBtns =document.querySelectorAll('.controlls');
const sectBtn =document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content');

function PageTransition(){
    //button click active class
    for(let i=0; i< sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className =currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //section active class

    allsections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //remove selective from the others  button
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other section
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
 
    //toggle theme
    const themebtn=document.querySelector('.theme-btn');
    themebtn.addEventListener('click', ()=> {
        let element= document.body;
        element.classList.toggle('light-mode')
    })

}

PageTransition(); 