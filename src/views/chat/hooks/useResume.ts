import { fetchResumeParser } from '@/api'
import { getFile, getHTMLInputElement } from '@/utils/common'

export function useResume() {
  async function resumeUpload(event: Event) {
    const file = getFile(event)
    if (!file)
      return
    await fetchResumeParser(file, getHTMLInputElement(event).value)
  }
  return {
    resumeUpload,
  }
}
