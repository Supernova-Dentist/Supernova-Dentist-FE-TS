'use client';

import { motion } from 'framer-motion';
import { FaFacebookMessenger, FaInstagramSquare } from 'react-icons/fa';
import { MdAdd, MdEmail } from 'react-icons/md';
import { Action, Fab } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { useWindowSize } from '../blocks/MainNav/MainNav';

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
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial state for the animation
      animate={{ opacity: 1, y: 0 }} // Animate in
      transition={{ duration: 1.5 }} // Duration of the animation
    >
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
    </motion.div>
  );
}
