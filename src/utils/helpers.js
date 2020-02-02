/* eslint-disable no-nested-ternary */

// eslint-disable-next-line import/prefer-default-export
export const getLocaleCopy = (copy, lang) =>
  lang === 'en' ? copy.en : lang === 'de' ? copy.de : null;
