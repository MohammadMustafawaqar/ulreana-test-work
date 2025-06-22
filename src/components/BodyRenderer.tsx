import DOMPurify from 'dompurify'
import parse from 'html-react-parser'

export  default function BodyRenderer({ body }: { body: string }) {
  const clean = DOMPurify.sanitize(body)
  return <div>{parse(clean)}</div>
}