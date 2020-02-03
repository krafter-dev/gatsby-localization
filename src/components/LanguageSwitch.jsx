/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { setLocale } from '~src/redux/actions';
import { getLocale, getPageName } from '~src/redux/selectors';
import i18n from '~config/i18n';

const LanguageSwitch = ({ setLocaleConnect, currentLocale, name }) => {
  const locales = Object.keys(i18n);

  return (
    <div
      style={{
        display: `flex`,
      }}
    >
      {locales.map(lang => {
        const path = name
          ? `${i18n[lang].startUrl}${i18n[lang].slugs[name]}`
          : `${i18n[lang].startUrl}`;

        return (
          <Link
            key={lang}
            title={i18n[lang].languageName}
            hrefLang={i18n[lang].htmlLang}
            to={path}
            onClick={() => setLocaleConnect(lang)}
            style={{
              color: currentLocale === lang ? `yellow` : `black`,
              margin: 10,
              textDecoration: `none`,
              cursor: `pointer`,
            }}
          >
            {i18n[lang].languageName}
          </Link>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  currentLocale: getLocale(state),
  name: getPageName(state),
});

export default connect(mapStateToProps, { setLocaleConnect: setLocale })(
  LanguageSwitch
);
