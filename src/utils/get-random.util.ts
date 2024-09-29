const getRandom = (min: number, max: number, isInteger?: boolean) => {
  const value = Math.random() * (max - min) + min;

  return isInteger ? Math.round(value) : value;
};

export default getRandom;
