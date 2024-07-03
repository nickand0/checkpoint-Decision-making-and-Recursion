function weatherClothing(temperature, pluie) {
    let vetements = '';
  
    // Conseils vetements basé sur la température
    if (temperature < 0) {
        vetements = "Portez un manteau épais, une écharpe et des gants."
    } else if (temperature >= 0 && temperature <= 10) {
        vetements = "Portez un manteau chaud et des gants."
    } else if (temperature > 10 && temperature <= 20) {
        vetements = "Portez une veste légère."
    } else if (temperature > 20 && temperature <= 30) {
        vetements = "Portez des vêtements légers.";
    } else {
        vetements = "Portez des vêtements très légers et buvez beaucoup d'eau.";
    }
  
    // Conseils parapluie en cas de pluie
    switch(pluie) {
      case true:
        vetements += " N'oubliez pas de prendre un parapluie."
        break;
      case false:
        vetements += " Pas besoin de parapluie aujourd'hui.";
        break;
    }
  
    return vetements;
  }
  
  console.log(weatherClothing(20,true))