export { getFile, getHTMLInputElement }
function getHTMLInputElement(event: Event) {
  return event.target as HTMLInputElement
}
function getFile(event: Event): File | void {
  const target = getHTMLInputElement(event)
  if (!target || !target.files)
    return

  return target.files[0]
}
