import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useRecoilState } from 'recoil'
import { headerInputTextState } from 'state'
import styles from './index.module.scss'

const Header = () => (
  <header className={`${styles.parent} bg-purple-800 p-2`}>
    <div className={`flex`}>
      <h1 className={`flex-1`}>
        <Link to="/" className={`text-white`}>Gatsby Default Starter</Link>
      </h1>
      <TextInput className={`flex-4`} />
    </div>
  </header>
)

function TextInput({className}) {
  const [text, setText] = useRecoilState(headerInputTextState)
  const onChange = event => {
    setText(event.target.value)
  }
  return (
    <input
      type="text"
      value={text}
      aria-label="Username"
      onChange={onChange}
      className={`${className} bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/6 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`}
    />
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
