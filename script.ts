const toogleButton = document.getElementById('togle-skills') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLButtonElement
toogleButton.addEventListener('click' ,()=>{
    if(skills.style.display === 'none'){
        skills.style.display ='block'
    }else{
        skills.style.display ='none'
    }
}) ;