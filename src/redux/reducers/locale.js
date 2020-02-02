import { SET_LOCALE } from '../actions/types';
import i18n from '~config/i18n';

// Set defaultLocale to correct locale string
const arrLocale = Object.values(i18n);
let defaultLocale = null;
arrLocale.forEach(el => {
  if (el.default) defaultLocale = el.locale;
});

const initialState = defaultLocale;

const locale = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCALE:
      return action.locale;
    default:
      return state;
  }
};

export default locale;
