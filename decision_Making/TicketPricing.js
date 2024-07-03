function PriceAge (age){
    //initialisation de prix 
  let price = 0
    switch(true){
        //si c'est un enfant
        case (age > 1 && age <= 12) :
            price = 10 
            break;
        //si c'est un adolescent
        case (age > 12 && age<18) :
            price = 15 
            break;
        //si c'est un adult
        case age >=18 :
            price = 20
            break;
    }

    return `le prix de votre billet est $ ${price}`
}

console.log(PriceAge(25))

