'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { Fab } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { useWindowSize } from '../blocks/MainNav/MainNav';

const ACTION_BAR_HEIGHT = 64;

export default function FloatingMenu() {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('whatsappHintSeen')) {
        setShowHint(true);

        setTimeout(() => {
          setShowHint(false);
          sessionStorage.setItem('whatsappHintSeen', 'true');
        }, 3500);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  function handleWhatsAppClick() {
    window.open('https://wa.me/447863338815', '_blank');
  }

  return (
    <>
      {/* Full-width Action Bar */}
      {isMobile && (
        <motion.div
          initial={{ y: ACTION_BAR_HEIGHT }}
          animate={{ y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            height: ACTION_BAR_HEIGHT,
            paddingBottom: 'env(safe-area-inset-bottom)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            backgroundColor: '#C7B08A',
            boxShadow: '0 -4px 16px rgba(0,0,0,0.15)',
            zIndex: 998,
          }}
        >
          <ActionButton icon={<FaCalendarAlt />} label='Book online' onClick={() => window.open('/book', '_self')} />
          <ActionButton
            icon={<FaMapMarkerAlt />}
            label='Get directions'
            onClick={() => window.open('https://maps.google.com/?q=Supernova+Dental+Bridgwater', '_blank')}
          />
          <ActionButton
            icon={<FaPhoneAlt />}
            label='Call reception'
            onClick={() => (window.location.href = 'tel:+447863338815')}
          />
        </motion.div>
      )}

      {/* WhatsApp FAB + Hint */}
      <div
        style={{
          position: 'fixed',
          bottom: isMobile ? ACTION_BAR_HEIGHT + 60 : 20,
          right: 16,
          zIndex: 1001,
          touchAction: 'manipulation',
        }}
      >
        <AnimatePresence>
        
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              style={{
                marginBottom: 8,
                background: '#ffffff',
                color: '#333',
                padding: '6px 10px',
                borderRadius: 8,
                fontSize: 12,
                boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                whiteSpace: 'nowrap',
              }}
            >
              Questions? 
              #Chat with us
            </motion.div>
          
        </AnimatePresence>

        <Fab
          mainButtonStyles={{ backgroundColor: '#25D366' }}
          icon={<FaWhatsapp size={34} />}
          event='click'
          onClick={handleWhatsAppClick}
          aria-label='Chat with us on WhatsApp'
        />
      </div>
    </>
  );
}

function ActionButton({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        background: 'transparent',
        color: '#fff',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        fontSize: 12,
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'transform 0.1s ease',
      }}
      onTouchStart={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
      onTouchEnd={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
