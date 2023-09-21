import backgroundImg from '../images/reactjs-icon 2.png'

export default function Content() {
  return (
    <div className='content'>
      <h1>Fun facts about React</h1>
      <ol>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
      <img className='bg-image' src={backgroundImg} />
    </div>
  )
}