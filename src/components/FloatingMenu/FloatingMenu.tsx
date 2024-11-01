'use client';

import { MdAdd, MdEmail } from 'react-icons/md';
import { FaFacebookMessenger, FaInstagramSquare } from 'react-icons/fa';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

export default function FloatingMenu() {
  function handleEmailClick() {
    window.open('mailto:info@supernovadentalclinic.com');
  }

  function handleMessengerClick() {
    window.open('https://m.me/61567279201971');
  }

  function handleInstagramClick() {
    window.open('https://ig.me/m/supernova.dental');
  }

  return (
    <Fab
      // mainButtonStyles={mainButtonStyles}
      // actionButtonStyles={actionButtonStyles}
      // style={style}
      icon={<MdAdd />}
      event='hover'
      alwaysShowTitle={true}
      onClick={() => console.log('Main button clicked')}
    >
      <Action text='Email' onClick={handleEmailClick}>
        <MdEmail />
      </Action>
      <Action text='Messenger' onClick={handleMessengerClick}>
        <FaFacebookMessenger />
      </Action>
      <Action text='Instagram' onClick={handleInstagramClick}>
        <FaInstagramSquare />
      </Action>
    </Fab>
  );
}
