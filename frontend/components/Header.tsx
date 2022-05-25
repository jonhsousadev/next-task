interface HeaderProps {
  title: string
}

export default function Header(props: HeaderProps) {
  return (
    <div className="w-full flex justify-between items-center
    p-4 bg-gradient-to-r from-cyan-900 to-cyan-500
    text-white text-4xl  h-20">
      <h1>{props.title}</h1>
    </div>
  )
}