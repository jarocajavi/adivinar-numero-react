import './style.css'
function Header() {
  return (
    <header>
      <h1>Guess My Number!</h1>
      <p class="between">(Between 1 and 20)</p>
      <div class="number">?</div>
    </header>
  )
}

export default Header
