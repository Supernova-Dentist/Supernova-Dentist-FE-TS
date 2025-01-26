'use client';

import { motion } from 'framer-motion';
import { FaFacebookMessenger, FaInstagramSquare } from 'react-icons/fa';
import { MdAdd, MdEmail, MdPhone } from 'react-icons/md';
import { Action, Fab } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { useWindowSize } from '../blocks/MainNav/MainNav';

export default function FloatingMenu() {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const event = isMobile ? 'click' : 'hover';

  // Email action
  function handleEmailClick() {
    window.location.href = 'mailto:enquiries@supernovadental.co.uk';
  }

  // Messenger action with proper fallback
  function handleMessengerClick() {
    // const messengerDeepLink = 'fb-messenger://user-thread/61567279201971';
    const messengerWebLink = 'https://www.messenger.com/t/61567279201971';

    // Always use the web link for desktop
    window.open(messengerWebLink, '_blank');
  }

  // Instagram action with proper fallback
  function handleInstagramClick() {
    // const instagramDeepLink = 'instagram://user?username=supernova.dental';
    const instagramWebLink = 'https://www.instagram.com/supernova.dental/';

    // Always use the web link for desktop
    window.open(instagramWebLink, '_blank');
  }

  // Phone action
  function handlePhoneClick() {
    window.location.href = 'tel:+441278228665';
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
      <Fab
        mainButtonStyles={{ backgroundColor: '#0f172a' }}
        style={{
          bottom: isMobile ? -8.5 : 10,
          right: isMobile ? -8.5 : 10,
        }}
        icon={<MdAdd size={26} />}
        event={event}
        alwaysShowTitle={isMobile}
      >
        {/* Email Action */}
        <Action style={{ backgroundColor: '#0f172a' }} text='Email' onClick={handleEmailClick}>
          <MdEmail size={25} />
        </Action>

        {/* Messenger Action */}
        <Action style={{ backgroundColor: '#0f172a' }} text='Messenger' onClick={handleMessengerClick}>
          <FaFacebookMessenger size={25} />
        </Action>

        {/* Instagram Action */}
        <Action style={{ backgroundColor: '#0f172a' }} text='Instagram' onClick={handleInstagramClick}>
          <FaInstagramSquare size={25} />
        </Action>

        {/* Call Action */}
        <Action style={{ backgroundColor: '#0f172a' }} text='Call' onClick={handlePhoneClick}>
          <MdPhone size={25} />
        </Action>
      </Fab>
    </motion.div>
  );
}
