'use client';

import { motion } from 'framer-motion';
import { FaFacebookMessenger, FaInstagramSquare } from 'react-icons/fa';
import { MdAdd, MdEmail, MdPhone } from 'react-icons/md'; // Import phone icon
import { Action, Fab } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { useWindowSize } from '../blocks/MainNav/MainNav';

export default function FloatingMenu() {
  const { width } = useWindowSize();

  const isMobile = width < 768;
  const event = isMobile ? 'click' : 'hover';

  // Email action
  function handleEmailClick() {
    window.location.href = 'mailto:enquiries@supernovadental.co.uk'; // Use window.location.href instead of window.open for mailto
  }

  // Messenger action (native app deep link for mobile)
  function handleMessengerClick() {
    window.location.href = 'fb-messenger://user-thread/61567279201971'; // Use window.location.href for deep links
  }

  // Instagram action (native app deep link for mobile)
  function handleInstagramClick() {
    window.location.href = 'instagram://user?username=supernova.dental'; // Use window.location.href for deep links
  }

  // Phone action (native dialer on mobile)
  function handlePhoneClick() {
    window.location.href = 'tel:+441278228665'; // Use window.location.href for tel: protocol
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial state for the animation
      animate={{ opacity: 1, y: 0 }} // Animate in
      transition={{ duration: 1.5 }} // Duration of the animation
    >
      <Fab
        mainButtonStyles={{ backgroundColor: '#0f172a' }}
        // Adjust position based on screen size
        style={{
          bottom: isMobile ? -8.5 : 10, // Change bottom position for mobile and desktop
          right: isMobile ? -8.5 : 10, // Change right position for mobile and desktop
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
