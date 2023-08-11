(function(){
    const sliders = [...document.querySelectorAll('.testimony__person')];
    const buttonBefore = document.querySelector('#before');
    const buttonNext = document.querySelector('#next');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currenTestimony = document.querySelector('.testimony__person--show').dataset.id;
        value = Number(currenTestimony);
        value += add;
        if(value === sliders.length+1 || value === 0 ){
            value = value === 0? sliders.length : 1;
        }
    }
})();