export const firstLetterUppercase = (str: string): string => {
  const valueString = str.toLowerCase();
  return valueString
    .split("")
    .map(
      (char: string) =>
        `${char.charAt(0).toUpperCase()}${char.slice(1).toLowerCase()}`
    )
    .join("");
};

export const lowerCase = (str: string): string => {
  return str.toLowerCase();
};

export const upperCase = (str: string): string => {
  return str.toUpperCase();
};

export const isEmail = (email: string): boolean => {
  const regexExp =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return regexExp.test(email);
};

export const isDataUrl = (value: string): boolean => {
  const dataUrlRegex =
    /^\s*data:([a-z]+\/[a-z0-9\-\.+]+(;[a-z\-]+=[a-z0-9\-]+)?)(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)$/i;
  return dataUrlRegex.test(value);
};
