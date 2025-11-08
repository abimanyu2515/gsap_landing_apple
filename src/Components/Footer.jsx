import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>More ways to buy: Find a near by Apple Store</p>
        <img src="/logo.svg" alt="logo" />
      </div>
      
      <hr />

      <div className="links">
        <p>Copyright © 2024 Apple Inc. All rights reserved.</p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li>
              <a href={link}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer