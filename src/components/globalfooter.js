import React, {Component, useState, useCallback, useEffect } from 'react';
import {Col, Container, Row} from "reactstrap";

import {FaSnapchatGhost, FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaSnapchat, FaEnvelope, FaHeart} from 'react-icons/fa'
import Media from "react-media"

export default function GlobalFooter() {
  // let index = 1;
  const [index, setIndex] = useState(1)
  
  
  const advanceColor = useCallback(() => {
    const heart = document.getElementById("footer-heart");
    const colours = [
      "#E12727",
      "#00c8ff",
      "#41B649",
      "#1B459C",
    ]
    heart.style.color = colours[index % colours.length]
    setIndex(index + 1)
  }, [index])

  useEffect(() => {
    const interval = setInterval(() => {
      advanceColor()
    }, 1000)
    return () => clearInterval(interval)
  }, [advanceColor])

  return (
    <Media query="(max-width: 762px)">
      {matches =>
        <footer style={{position: "relative", marginTop: "50", bottom: 0, left: 0, width: "100%", textAlign: "center"}} class="container">
          <div style={{ display: `${(matches ? "block" : "flex")}`, flexDirection: `${(matches ? "row" : "col")}`, alignItems: "center" }}>
            <p class="pull-left col-md-8 col-sm-12">
              © {new Date().getFullYear()} Asterisk. Made with <span id="footer-heart"><FaHeart size="18" /></span> in Dallas.
              {" "}
              {" "}<a href="https://astr.sk/code" target="_blank" rel="noopener noreferrer">Terms</a>{" "}
              <b>|</b>
              {" "}<a href="https://astr.sk/code" target="_blank" rel="noopener noreferrer">Privacy</a>{" "}
              <b>|</b>
              {" "}<a href="https://astr.sk/co1de" target="_blank" rel="noopener noreferrer">Sales</a>{" "}
              <b>|</b>
              {" "}<a href="https://astr.sk/code" target="_blank" rel="noopener noreferrer">Ethics</a>
            </p>
            
              {matches =>
                matches && <br />
              }
            <p id="social" class="pull-right col-md-4 col-xs-12" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
              <li><a href="mailto:hello@weareasterisk.com"><FaEnvelope size="18" /></a> </li>
              <li><a href="https://instagram.com/HelloAsterisk"><FaInstagram size="18" /></a> </li>
              <li><a href="https://twitter.com/HelloAsterisk"><FaTwitter size="18" /></a> </li>
              <li><a href="https://facebook.com/AsteriskEvents"><FaFacebook size="18" /></a> </li>
            </p>
          </div>
        </footer>
      }
    </Media>
  )
}
