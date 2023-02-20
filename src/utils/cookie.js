/**
 * Set Cookies
 * @param cname - Cookie Name
 * @param cvalue - Cookie Value
 */
export function setCookie(cname, cvalue) {
  const d = new Date(1708250528000)
  let expires = 'expires=' + d.toGMTString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

/**
 * Get Cookie value by Cookie Name
 * @param cname - Cookie Name
 */
export function getCookie(cname) {
  let name = cname + '='
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

/**
 * check Cookie is available or not
 * @param cname - Cookie Name
 * @return {boolean} avaliability of cookie
 */
export function checkCookie(cname) {
  let cookieExist = getCookie(cname)
  if (cookieExist != '') {
    return cookieExist
  }
  return false
}
