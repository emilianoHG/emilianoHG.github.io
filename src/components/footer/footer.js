import React from "react"
import FooterWaves from './footer-waves.svg';
import HeartIcon from '../../assets/images/heart.svg';

import './footer.css'

export default function Footer() {
  return (
    <div className="content-footer">
      <FooterWaves/>
      <footer className="footer">
        <div className="footer-powered">
          <span>
            Powered by
          </span>
          <HeartIcon className="heart"/>
        </div>
      </footer>
    </div>
  )
}
