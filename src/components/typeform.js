import React, {useEffect, useState} from 'react';
import * as typeformEmbed from "@typeform/embed";
import {Redirect} from "react-router-dom";
  
export default function SignupForm() {
  const [redirect, setRedirect] = useState(false)
  useEffect(() => {
    const popup = typeformEmbed.makePopup(
      'https://architech-inc.typeform.com/to/XSuMzBbe',
      {
        mode: 'drawer_left',
        drawerWidth: 9999,
        hideScrollbars: true,
        autoOpen: true,
        onClose: () => setRedirect(true)
      }
    );
    return () => popup.close();
  })
  return (
    <React.Fragment>
      {redirect &&
        <Redirect to="/" />
      }
      <div className="typeform">

      </div>
    </React.Fragment>
  )
}
