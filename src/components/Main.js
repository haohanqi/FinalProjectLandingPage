import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Problem We Solve</h2>
          <span className="image main">
            <img height='250px'src={'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'} alt="" />
          </span>
          <p>
           <b>The Problem we found</b> is that In North American, people in the mining industry feel that it is very hard to find mining resources and potential buyers.
           The reasons for this phenomenon are : Firstly, there does not exist agent companies between the mine owners and resources buyers. 
           Secondly, most of the time mine owners and buyers are not in the same country, language barrier and trust issues are biggest concerns for trading. 
           Thirdly, complex import and export documents in different countries
          </p>
          <p>
          Therefore based on those problems, 
          we decided to develop an online trading app for the mining industry.
          App will serve as the connection or intermediary between the mine owners and potential buyers. 
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work We Did</h2>
          <span className="image main">
            <img src={'https://www.apple.com/ac/structured-data/images/open_graph_logo.png?202006221416'} alt="" height='200px'/>
            <img src={'https://zdnet3.cbsistatic.com/hub/i/2019/03/16/e118b0c5-cf3c-4bdb-be71-103228677b25/android-logo.png'} alt="" height='200px'/>
          </span>
          <p>
          <span style={{width:'100%',display:'block',marginBottom:'10px',fontSize:'20px'}}> <b>Key Functionality:</b> </span>
          
          <span style={{width:'100%',display:'block',marginBottom:'10px'}}><b>1.</b> &nbsp; &nbsp; Trading process should be the most important key functionality for Mining World. Unlike purchasing a normal product from a website, the only thing a user has to do is to pay for it. But for mineral products, it requires more steps before paying. Such as testing products with the lab, verify documentation.</span> 
          
          <span style={{width:'100%',display:'block',marginBottom:'10px'}}><b>2.</b> &nbsp; &nbsp; Posting also is a key functionality for Mining World. Which encourages users to exchange industry information. Make social contact with each other.</span>
          
          <span style={{width:'100%',display:'block',marginBottom:'10px'}}><b>3.</b> &nbsp; &nbsp; Push Notification is also considered as an important functionality for Mining World. It will keep updating and pushing the current mineral price or news for users.</span>
          
          </p>
          <p>
          <span style={{width:'100%',display:'block',marginBottom:'10px',fontSize:'20px'}}> <b> Features:</b> </span>
          <span style={{width:'100%',display:'block',marginBottom:'10px'}}><b>1.</b> &nbsp; &nbsp; Keep updating and push the most recent industry news for users.</span>
          <span style={{width:'100%',display:'block',marginBottom:'10px'}}><b>2.</b> &nbsp; &nbsp; Help to build connections between buyer and seller. </span>
          <span style={{width:'100%',display:'block',marginBottom:'10px'}}><b>3.</b> &nbsp; &nbsp; Set up a standard mechanism for buyer and seller to check documentation and product.</span>
          <span style={{width:'100%',display:'block',marginBottom:'10px'}}><b>4.</b> &nbsp; &nbsp; Help buyers and sellers to finish transactions.</span>
          <span style={{width:'100%',display:'block',marginBottom:'10px'}}><b>5.</b> &nbsp; &nbsp; Create a social environment for users to exchange information.</span>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Our Company</h2>
          <span className="image main">
            <img src={'https://images.unsplash.com/photo-1542822038-3a1810a5fb69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'} alt="" />
          </span>
          <p>
         <span style={{width:'100%',display:'block',marginBottom:'10px'}}> We are a new start-up company which focuses on <b> trading mineral resources.</b> </span>

         <span style={{width:'100%',display:'block',marginBottom:'10px'}}> Our Story begins in<b> 2020 </b>, the company is located in Toronto. Our employees come from all over the world.</span>
          
         <span style={{width:'100%',display:'block',marginBottom:'10px'}}> <b>We help people</b> in the mining industry to trade and connect with potential buyers and sellers.</span>  
          
         <span style={{width:'100%',display:'block',marginBottom:'10px'}}> <b>We provide</b> the Most Secure Transaction technology.</span>
          
         <span style={{width:'100%',display:'block',marginBottom:'10px'}}> <b>Our Goal</b> is to build  a “Mining World” for the mining industry.</span>
          
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
