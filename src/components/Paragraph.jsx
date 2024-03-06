export default function Paragraph({ data }) {
  return (
    <div className="container max-w-screen-sm">
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </div>
  )
}
