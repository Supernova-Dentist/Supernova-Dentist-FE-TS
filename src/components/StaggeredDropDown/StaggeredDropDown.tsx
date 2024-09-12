import { motion } from 'framer-motion';
import { type Dispatch, type SetStateAction, useState } from 'react';
import { type IconType } from 'react-icons';
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaRedditAlien, FaTwitter } from 'react-icons/fa';
import { FiChevronDown, FiEdit, FiPlusSquare, FiShare, FiTrash } from 'react-icons/fi';

// Define share links
const shareLinks = [
  {
    Icon: FaTwitter,
    text: 'Share on Twitter',
    url: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fsupernova-dentist-fe-ts.vercel.app%2Fgallery&text=Check%20out%20Supernova%20Dental%27s%20amazing%20gallery!',
  },
  {
    Icon: FaFacebookF,
    text: 'Share on Facebook',
    url: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsupernova-dentist-fe-ts.vercel.app%2Fgallery',
  },
  {
    Icon: FaPinterestP,
    text: 'Share on Pinterest',
    url: 'http://pinterest.com/pin/create/button/?url=https%3A%2F%2Fsupernova-dentist-fe-ts.vercel.app%2Fgallery&media=&description=Check%20out%20Supernova%20Dental%27s%20amazing%20gallery!',
  },
  {
    Icon: FaLinkedinIn,
    text: 'Share on LinkedIn',
    url: 'http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fsupernova-dentist-fe-ts.vercel.app%2Fgallery&title=Check%20out%20Supernova%20Dental%27s%20amazing%20gallery!',
  },
  {
    Icon: FaRedditAlien,
    text: 'Share on Reddit',
    url: 'http://www.reddit.com/submit?url=https%3A%2F%2Fsupernova-dentist-fe-ts.vercel.app%2Fgallery&quot=Check%20out%20Supernova%20Dental%27s%20amazing%20gallery!',
  },
];

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='relative'>
      <button
        onClick={() => setOpen((pv) => !pv)}
        className='flex items-center gap-2 px-3 py-2 rounded-md text-cream bg-gold transition-colors'
      >
        <span className='font-medium text-sm'>Share Supernova!</span>
        <motion.span variants={iconVariants}>
          <FiChevronDown />
        </motion.span>
      </button>

      {open && (
        <motion.ul
          initial={wrapperVariants.closed}
          animate={wrapperVariants.open}
          style={{ originY: 'top' }}
          className='absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden'
        >
          {shareLinks.map((link, index) => (
            <Option key={index} setOpen={setOpen} Icon={link.Icon} text={link.text} url={link.url} />
          ))}
        </motion.ul>
      )}
    </div>
  );
};

const Option = ({
  text,
  Icon,
  setOpen,
  url,
}: {
  text: string;
  Icon: IconType;
  setOpen: Dispatch<SetStateAction<boolean>>;
  url?: string;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        if (url) {
          window.open(url, '_blank');
        }
        setOpen(false);
      }}
      className='flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer'
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: 'afterChildren',
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
