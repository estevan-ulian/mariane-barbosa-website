export default function Section (props) {
  
  return (
    <section className={`
    flex flex-col min-h-screen bg-pink-100 items-center
    `}>
      {props.child}
    </section>
  )
}
