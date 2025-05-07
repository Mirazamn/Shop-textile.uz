import './style.css'

function Header() {
  return (
 <>
          <header className="header">
      <div className="logo">
      <img src="./salom.png" alt="" />
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search entire store here..."
        />
      </div>

      <div className="header-icons">
        <a href="#" className="icon-link">❤️ Wish List</a>
        <a href="#" className="icon-link">🛒 My Cart</a>
      </div>
            <div className="div">
            <select name="" id="">
        <option value="">🌫</option>
        <option value="">🛒</option>
        <option value="">👨🏾‍🚒</option>
        <option value="">🔍</option>
        <option value="">👁</option>
        <option value="">💬</option>
      </select>
            </div>
    </header>
     </>
  )
}

export default Header;