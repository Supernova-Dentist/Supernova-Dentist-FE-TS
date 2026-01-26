'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { Fab } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { useWindowSize } from '../blocks/MainNav/MainNav';
import { DentallyPortal } from '@/lib/constants';

const ACTION_BAR_HEIGHT = 64;

export default function FloatingMenu() {
  const { width } = useWindowSize();
  const isMobile = width < 768;

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
          className='bg-gold'
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            height: ACTION_BAR_HEIGHT,
            paddingBottom: 'env(safe-area-inset-bottom)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            boxShadow: '0 -4px 16px rgba(0,0,0,0.15)',
            zIndex: 998,
          }}
        >
          <ActionButton
            index={0}
            icon={<FaCalendarAlt />}
            label='Book online'
            onClick={() => window.open(`${DentallyPortal}`, '_blank')}
          />
          <ActionButton
            index={1}
            icon={<FaMapMarkerAlt />}
            label='Find us'
            onClick={() => window.open('https://maps.google.com/?q=Supernova+Dental+Bridgwater', '_blank')}
          />
          <ActionButton
            index={2}
            icon={<FaPhoneAlt />}
            label='Call reception'
            onClick={() => (window.location.href = 'tel:+447863338815')}
          />
        </motion.div>
      )}

      {/* WhatsApp FAB */}
      <Fab
        style={{
          bottom: isMobile ? ACTION_BAR_HEIGHT : 20,
          right: 16,
        }}
        mainButtonStyles={{ backgroundColor: '#25D366' }}
        icon={<FaWhatsapp size={34} />}
        event='click'
        onClick={handleWhatsAppClick}
        aria-label='Chat with us on WhatsApp'
      />
    </>
  );
}

function ActionButton({
  icon,
  label,
  onClick,
  index,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  index: number;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        background: 'transparent',
        color: '#fff',
        border: 'none',
        borderRight: index < 2 ? '1px solid rgba(0,0,0,0.6)' : 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        fontSize: 15,
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
