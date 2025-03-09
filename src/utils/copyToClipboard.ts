import toast from "react-hot-toast"

export const copyToClipboard = (text:string, message:string) => {
  navigator.clipboard.writeText(text)
  toast(message, {
    style: {
      color: 'white',
      backgroundColor: 'green'
    },
    ariaProps: {
      role: 'status',
      'aria-live': 'assertive'
    }
  })
}