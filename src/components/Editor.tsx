'use client'

import { Editor } from '@tinymce/tinymce-react'

type TinyEditorProps = {
  value: string
  onChange: (content: string) => void
}

export default function TinyEditor({ value, onChange }: TinyEditorProps) {
  return (
    <Editor
      apiKey="g9oexp3u02ylrvsq2cmekrxwqlu0vbiya70duppdfwhm9tef"
      id="editor"
      value={value}
      onEditorChange={onChange}
      tinymceScriptSrc="https://cdn.tiny.cloud/1/g9oexp3u02ylrvsq2cmekrxwqlu0vbiya70duppdfwhm9tef/tinymce/6/tinymce.min.js"
      init={{
        height: 300,
        menubar: true,
        plugins: [],
        toolbar:
          'undo redo | formatselect | bold italic underline | ' +
          'alignleft aligncenter alignright alignjustify | ' +
          'bullist numlist outdent indent | removeformat | help',
      }}
    />
  )
}
