import React from 'react';

// Pages render without an enter/exit animation. The previous framer-motion
// fade (AnimatePresence mode="wait") could leave the new page stuck at
// opacity 0 after client-side navigation, i.e. a blank page.
const PageTransition = ({ children }) => <div>{children}</div>;

export default PageTransition;
