/** 
 *  Correct base inputs:
 * ['kg','hg','dag','g','dg','cg','mg']
 * */ 
 const capacity = (value: number, base: string, convertedBase: string) => {
  const valuedConvertedTypes = ['kg','hg','dag','g','dg','cg','mg'];

  if (
    !valuedConvertedTypes.includes(base) ||
    !valuedConvertedTypes.includes(convertedBase)
  ) {
    return null
  }

  const posBase = valuedConvertedTypes.findIndex((convBase) => convBase === base);
  const posConverted = valuedConvertedTypes.findIndex((convBase) => convBase === convertedBase);

  const diff = posBase > posConverted ? posBase - posConverted : posConverted - posBase;

  
  return posBase < posConverted ? value * (10 ** diff) : value / (10 ** diff)
}

export default capacity;