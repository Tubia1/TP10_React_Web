const countriesByMake = {
  ACURA: 'Japón', 'ALFA ROMEO': 'Italia', 'AM GENERAL': 'Estados Unidos',
  'AMERICAN MOTORS': 'Estados Unidos', 'ASTON MARTIN': 'Reino Unido', AUDI: 'Alemania',
  BENTLEY: 'Reino Unido', BMW: 'Alemania', BUGATTI: 'Francia', BUICK: 'Estados Unidos',
  BYD: 'China', CADILLAC: 'Estados Unidos', CHEVROLET: 'Estados Unidos',
  CHRYSLER: 'Estados Unidos', DAEWOO: 'Corea del Sur', DAIHATSU: 'Japón',
  DATSUN: 'Japón', DELOREAN: 'Reino Unido', DODGE: 'Estados Unidos', DONGFENG: 'China',
  FERRARI: 'Italia', FIAT: 'Italia', FISKER: 'Estados Unidos', FORD: 'Estados Unidos',
  GENESIS: 'Corea del Sur', GEO: 'Estados Unidos', GMC: 'Estados Unidos',
  HOLDEN: 'Australia', HONDA: 'Japón', HYUNDAI: 'Corea del Sur', INFINITI: 'Japón',
  ISUZU: 'Japón', JAGUAR: 'Reino Unido', KIA: 'Corea del Sur', KOENIGSEGG: 'Suecia',
  LAMBORGHINI: 'Italia', LANCIA: 'Italia', LEXUS: 'Japón', LINCOLN: 'Estados Unidos',
  LOTUS: 'Reino Unido', LUCID: 'Estados Unidos', MASERATI: 'Italia', MAYBACH: 'Alemania',
  MAZDA: 'Japón', MCLAREN: 'Reino Unido', 'MERCEDES-BENZ': 'Alemania', MERCURY: 'Estados Unidos',
  MINI: 'Reino Unido', MITSUBISHI: 'Japón', NISSAN: 'Japón', OLDSMOBILE: 'Estados Unidos',
  OPEL: 'Alemania', PAGANI: 'Italia', PEUGEOT: 'Francia', PLYMOUTH: 'Estados Unidos',
  POLESTAR: 'Suecia', PONTIAC: 'Estados Unidos', PORSCHE: 'Alemania', RENAULT: 'Francia',
  RIMAC: 'Croacia', 'ROLLS-ROYCE': 'Reino Unido', SAAB: 'Suecia', SATURN: 'Estados Unidos',
  SMART: 'Alemania', SUBARU: 'Japón', SUZUKI: 'Japón', TESLA: 'Estados Unidos',
  TOYOTA: 'Japón', TRIUMPH: 'Reino Unido', VOLKSWAGEN: 'Alemania', VOLVO: 'Suecia', ZEEKR: 'China',
}

export function getMakeCountry(makeName) {
  return countriesByMake[makeName.toUpperCase()] || 'Otros'
}
