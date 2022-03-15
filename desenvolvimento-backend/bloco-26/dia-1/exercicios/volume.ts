/** 
 *  Correct base inputs:
 * ['km3','hm3','dam3','m3','dm3','cm3','mm3']
 * */ 
 const volume = (value: number, base: string, convertedBase: string) => {
  const valuedConvertedTypes = ['km3','hm3','dam3','m3','dm3','cm3','mm3'];

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

export default volume;
