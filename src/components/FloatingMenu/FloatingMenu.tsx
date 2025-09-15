'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Fab } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { useWindowSize } from '../blocks/MainNav/MainNav';

export default function FloatingMenu() {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  // WhatsApp action - only opens a chat, no calls or pre-filled messages
  function handleWhatsAppClick() {
    window.open('https://wa.me/447863338815', '_blank');
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
      <Fab
        mainButtonStyles={{ backgroundColor: '#25D366' }} // WhatsApp green
        style={{
          bottom: isMobile ? -8.5 : 10,
          right: isMobile ? -8.5 : 10,
        }}
        icon={<FaWhatsapp size={36} />}
        event='click'
        onClick={handleWhatsAppClick}
      />
    </motion.div>
  );
}
