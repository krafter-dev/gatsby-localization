import { SET_LOCALE, SET_PATHNAME, SET_PAGENAME } from "./types"

// actions
export const setLocale = locale => ({
  type: SET_LOCALE,
  locale,
})

export const setPathname = pathname => ({
  type: SET_PATHNAME,
  pathname,
})

export const setPageName = pageName => ({
  type: SET_PAGENAME,
  pageName,
})
