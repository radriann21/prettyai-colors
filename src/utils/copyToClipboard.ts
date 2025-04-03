import { toast } from "sonner"

export const copyToClipboard = (text:string, message:string) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      toast(message)
    })
}