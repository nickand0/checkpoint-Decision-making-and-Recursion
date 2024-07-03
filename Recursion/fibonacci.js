
const fibonacci = (n, sequence = [0, 1]) => 
// Si n est inférieur ou égal à 1, retourner le début de la séquence jusqu'à n termes
    n <= 1 ? sequence.slice(0, n) : 
// si la longueur de la séquence est égale à n, retourner la séquence
    (sequence.length === n ? sequence :
// Sinon, appele recursif du fibonacci en ajoutant le prochain terme de Fibonacci à la séquence   
    fibonacci(n, [...sequence, sequence[sequence.length - 1] + sequence[sequence.length - 2]]));
  
    console.log(fibonacci(10));