'use client';

import { MdAdd, MdEmail } from 'react-icons/md';
import { FaFacebookMessenger, FaInstagramSquare } from 'react-icons/fa';
import { Fab, Action } from 'react-tiny-fab';
import { useWindowSize } from '../blocks/MainNav/MainNav';
import 'react-tiny-fab/dist/styles.css';

export default function FloatingMenu() {
  const { width } = useWindowSize();

  const isMobile = width < 768;
  const event = isMobile ? 'click' : 'hover';

  function handleEmailClick() {
    window.open('mailto:info@supernovadentalclinic.com', '_blank');
  }

  function handleMessengerClick() {
    window.open('https://m.me/61567279201971', '_blank');
  }

  function handleInstagramClick() {
    window.open('https://ig.me/m/supernova.dental', '_blank');
  }

  return (
    <Fab
      mainButtonStyles={{ backgroundColor: '#0f172a' }}
      style={{ bottom: 0, right: 0 }}
      icon={<MdAdd size={26} />}
      event={event}
      alwaysShowTitle={isMobile}
    >
      <Action style={{ backgroundColor: '#0f172a' }} text='Email' onClick={handleEmailClick}>
        <MdEmail size={25} />
      </Action>
      <Action style={{ backgroundColor: '#0f172a' }} text='Messenger' onClick={handleMessengerClick}>
        <FaFacebookMessenger size={25} />
      </Action>
      <Action style={{ backgroundColor: '#0f172a' }} text='Instagram' onClick={handleInstagramClick}>
        <FaInstagramSquare size={25} />
      </Action>
    </Fab>
  );
}
