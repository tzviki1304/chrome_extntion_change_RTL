if (Object.values(document.childNodes[1].classList).includes('translated-rtl')) {
    let tags = ['h1','h2','h3','h4','h5','h6','p','ul','ol','dl','font'] ;
    tags.forEach(tag =>{
        let useTag = document.querySelectorAll(`${tag}`) ;
        useTag.forEach(e => { 
            if(tag === 'font'){e.parentNode.style.direction = 'rtl' ;}
            else{ e.style.direction = 'rtl' ;}
        });
    })
}else{
    let tags = ['h1','h2','h3','h4','h5','h6','p','ul','ol','dl','font'] ;
    tags.forEach(tag =>{
        let useTag = document.querySelectorAll(`${tag}`) ;
        useTag.forEach(e => {
            if(tag === 'font'){e.parentNode.style.direction = 'ltr' ;}
            else{ e.style.direction = 'ltr' ;}
        });
    })
}
