/**
 * block , element, modifier
 */
const bem = (b: string) => {
  const cn = (e?: string, m?: string | null): string => {
    if (!e && !m) return b;
    if (e) {
      const element = b + "__" + e;
      return m ? element + "_" + m : element;
    }

    return b + "_" + m;
  };

  return cn;
};

export default bem;
