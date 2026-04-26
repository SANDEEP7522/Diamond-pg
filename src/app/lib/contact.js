export const PHONE = '918279409255';
export const PHONE_DISPLAY = '+91 8279409255';
export const EMAIL = 'contact@diamondpg.com';

export const whatsappUrl = (message = "Hi! I'm interested in Diamond PG.") =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

export const telUrl = `tel:+${PHONE}`;
export const mailUrl = `mailto:${EMAIL}`;
