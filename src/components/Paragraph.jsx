export default function Paragraph({ data }) {
  return (
    <div className="container max-w-screen-sm p-5">
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </div>
  )
}
