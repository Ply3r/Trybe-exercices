/** 
 *  Correct base inputs:
 * ['kl','hl','dal','l','dl','cl','ml']
 * */ 
 const area = (value: number, base: string, convertedBase: string) => {
  const valuedConvertedTypes = ['kl','hl','dal','l','dl','cl','ml'];

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

export default area;