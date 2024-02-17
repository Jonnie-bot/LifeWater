
interface ContainerProps{
    children: React.ReactNode
}

function Container({children}: ContainerProps) {
  return <div className="max-w-[1980px] mx-auto xl:px-20 md:px-2 px-4">{children}</div>;
}
export default Container;
