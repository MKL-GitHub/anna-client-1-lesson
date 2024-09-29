const createElement = (
  tagName: keyof HTMLElementTagNameMap,
  props: Partial<HTMLElement> = {},
  ...children: (Node | string)[]
) => {
  const element = document.createElement(tagName);

  Object.entries(props).forEach(([param, value]) => {
    (element as any)[param] = value;
  });

  element.append(...children);

  return element;
};

export default createElement;
