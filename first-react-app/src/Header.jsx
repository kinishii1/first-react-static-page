import reactLogo from '../images/reactjs-icon.svg'

export default function Header() {
  return (
    <header>
      <div className='left-side'>
        <img src={reactLogo} alt="" />
        <h1>ReactFacts</h1>
      </div>
      <h2>
        React Course - Project 1
      </h2>
    </header>
  )
}