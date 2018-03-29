const cyParcel = require('cypress-parcel-preprocessor')
module.exports = (on) => {
  on('file:preprocessor', cyParcel)
}
