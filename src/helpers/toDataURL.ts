const toDataURL = (
  url: string,
  // eslint-disable-next-line no-unused-vars
  callback: (arg0: string | ArrayBuffer | null) => void,
): void => {
  const xhr = new XMLHttpRequest()
  xhr.onload = () => {
    const reader = new FileReader()
    reader.onloadend = () => {
      callback(reader.result)
    }
    reader.readAsDataURL(xhr.response)
  }
  xhr.open('GET', url)
  xhr.responseType = 'blob'
  xhr.send()
}

export default toDataURL
