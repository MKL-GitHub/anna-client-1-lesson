const omit = <T extends object, K extends keyof T>(
  obj: T,
  ...keys: K[]
): Omit<T, K> => {
  const entries = Object.entries(obj) as [K, any];

  return entries.reduce((acc, [key, value]) => {
    if (!keys.includes(key)) acc[key] = value;
    return acc;
  }, {} as Omit<T, K>);
};

export default omit;
