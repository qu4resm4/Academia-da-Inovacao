export function userAge(dateOfBirth: Date) {
  const today = new Date();

  // Diferença entre os anos
  let age = today.getFullYear() - dateOfBirth.getFullYear();

  // Diferença entre os meses
  const monthDiff = today.getMonth() - dateOfBirth.getMonth();

  // Verificando se o aniversário já passou este ano
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
    age--; // Caso o aniversário não tenha ocorrido ainda neste ano, subtrai 1
  }

  return age;
}