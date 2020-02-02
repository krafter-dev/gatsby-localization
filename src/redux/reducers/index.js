import { combineReducers } from "redux"
import locale from "./locale"
import pathname from "./pathname"
import pageName from "./pageName"

export default combineReducers({
  locale,
  pathname,
  pageName,
})
