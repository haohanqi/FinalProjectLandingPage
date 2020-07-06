import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Mining World</h1>
        <p style={{fontWeight:'bold'}}>
          <span style={{display:'block',width:'100%',marginBottom:'10px',fontSize:17}}>Mineral Trading Platform.</span>
         <span style={{display:'block',width:'100%'}}> Providing most recent industry News, Resources. </span> 
         <span style={{display:'block',width:'100%',marginBottom:'10px'}}> Providing most secure transcation for clients. </span>
         <span style={{fontSize:17}}>Start Your Trading Today</span>
         <button style={{display:"block",width:'100%',marginTop:'10px',fontSize:17,borderWidth:2,borderColor:'red'}}>DownLoad App</button>
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Problem We Solve
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work We Did
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About Our Company
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
