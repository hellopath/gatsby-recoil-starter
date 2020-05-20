import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import { useRecoilState } from 'recoil'
import styles from './index.module.scss'

const Header = ({ siteTitle }) => (
  <header className={`${styles.parent} bg-purple-800`}>
    <div>
      <h1>
        <Link to="/" className={`text-white`}>
          {siteTitle}
        </Link>
      </h1>
      {/* <TextInput /> */}
    </div>
  </header>
)

// function TextInput() {
//   const [text, setText] = useRecoilState(textState)
//   const onChange = event => {
//     setText(event.target.value)
//   };
//   return (
//     <div>
//       <input type="text" value={text} onChange={onChange} />
//       <br />
//       Echo: {text}
//     </div>
//   )
// }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
