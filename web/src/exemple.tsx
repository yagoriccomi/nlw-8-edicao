interface ButtonProps {
  text?: string
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-[#00FFFF] transition-colors hover:text-black">{props.text ?? 'OK'}</button>
  
}

function App() {
  return (
    <div className="buttons">
      <Button text="1 " />
      <Button text="2" />
      <Button></Button>
    </div>
  )
}

export default App
