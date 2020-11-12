import React, {Component, useEffect} from 'react';
import * as typeformEmbed from "@typeform/embed";
import {Redirect} from "react-router";
  
export default function SignupForm() {
  useEffect(() => {
    const popup = typeformEmbed.makePopup(
      'https://architech-inc.typeform.com/to/XSuMzBbe',
      {
        mode: 'drawer_left',
        drawerWidth: 9999,
        hideScrollbars: true,
        autoOpen: true
      }
    );
    return () => popup.close();
  })
  return (
    <div className="typeform">

    </div>
  )
}
