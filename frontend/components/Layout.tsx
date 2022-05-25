import Content from "./Content";
import Header from "./Header";

interface LayoutProps {
  children?: any
}

export default function Layout(props: LayoutProps) {

  return (
    <div className="flex flex-col justify-start items-center
    h-screen w-screen">
      <Header title="Tasks"/>
      <Content></Content>
    </div>
  )

}