function power(base, exposant) {
    // la base à la puissance 0 est egal à 1
    if (exposant === 0) {
      return 1;
    }
    // Si l'exposant est négatif, convertir pour utiliser l'exposant positif
    if (exposant < 0) {
      return 1 / power(base, -exposant);
    }
    // si aucun des deux cas alors
    return base * power(base, exposant - 1);
  }
  
  console.log(power(2, 3))
  
  