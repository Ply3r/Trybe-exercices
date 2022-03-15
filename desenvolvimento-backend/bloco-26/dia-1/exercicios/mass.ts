/** 
 *  Correct base inputs:
 * ['km','hm','dam','m','dm','cm','mm']
 * */ 
const mass = (value: number, base: string, convertedBase: string) => {
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

export default mass;
