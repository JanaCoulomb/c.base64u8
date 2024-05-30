function toStringBase64(u8,padding=true) {
    if(padding)
        return btoa(toString(u8)).replaceAll("=","")
    else
        return btoa(toString(u8)).replaceAll("=","")
  }
  
function fromStringBase64(str) {
    return fromString(atob(str))
}

function toString(u8) {
    return String.fromCharCode.apply(null, u8)
  }
  
function fromString(str) {
    return new Uint8Array((str).split('').map(c => c.charCodeAt(0)))
}

module.exports = {toStringBase64,fromStringBase64,toString,fromString }