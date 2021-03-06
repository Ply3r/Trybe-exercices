

enum Bases {
  km = 'km',
  hm = 'hm',
  dam = 'dam',
  m = 'm',
  dm = 'dm',
  cm = 'cm',
  mm = 'mm'
}

/** 
 *  Correct base inputs:
 * ['km','hm','dam','m','dm','cm','mm']
 * */
const mass = (value: number, base: Bases, convertedBase: Bases) => {
  const valuedConvertedTypes = ['km','hm','dam','m','dm','cm','mm'];

  if (
    !valuedConvertedTypes.includes(base) ||
    !valuedConvertedTypes.includes(convertedBase)
  ) {
    return null
  }

  const posBase = valuedConvertedTypes.findIndex((convBase) => convBase === base);
  const posConverted = valuedConvertedTypes.findIndex((convBase) => convBase === convertedBase);

  const diff = posBase > posConverted ? posBase - posConverted : posConverted - posBase;

  const result = posBase < posConverted ? value * (10 ** diff) : value / (10 ** diff)
  
  return `${value}${base} é igual a  ${result}${convertedBase}`
}

mass(100, Bases['km'], Bases['m'])

export default mass;
