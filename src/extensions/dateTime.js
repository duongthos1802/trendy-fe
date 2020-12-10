import moment from 'moment'
export default {
  formatTimeStampToUtcTime(dateTime, format) {
    return dateTime ? moment.utc(dateTime).
      local().
      format(format ? format : 'LL') : null
  }
}