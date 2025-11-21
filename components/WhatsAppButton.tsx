import React from 'react';

const WhatsAppButton: React.FC = () => {
  const link = "https://nessahnutri.taplink.ws/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn7JBiKicL7OhpE_UcYHfU3pDJrO-ay8lPwu-py6F3NXN5JkMnf-1VMAptYGU_aem_q9b280lw_vZ8z0lDJSD6-A";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl hover:bg-[#20BD5A] hover:scale-110 transition-all duration-300 animate-bounce-slow group"
      aria-label="Contato WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg 
        viewBox="0 0 24 24" 
        width="32" 
        height="32" 
        fill="white" 
        className="w-8 h-8"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.85.896 2.803.896 3.179 0 5.764-2.587 5.763-5.766.001-3.18-2.587-5.767-5.768-5.767zm2.922 8.149c-.147.414-.857.762-1.177.776-.295.014-.686.092-2.431-.599-2.116-.837-3.481-2.983-3.587-3.124-.105-.142-.857-1.142-.857-2.176 0-1.035.542-1.544.735-1.755.192-.211.508-.265.678-.265.17 0 .339.001.487.009.156.009.366-.06.572.436.22.53.749 1.834.815 1.968.066.134.11.293.015.487-.095.193-.143.312-.283.472-.141.16-.296.356-.423.48-.14.136-.286.284-.123.562.162.278.721 1.188 1.546 1.923 1.075.958 1.981 1.255 2.262 1.392.281.136.446.114.612-.076.167-.19.721-.838.914-1.126.193-.288.385-.241.645-.144.26.096 1.653.78 1.937.922.285.143.475.214.543.332.068.118.068.683-.079 1.097zm-2.926-10.285c-4.397 0-7.967 3.571-7.968 7.967 0 1.468.396 2.84 1.095 4.037l-1.163 4.246 4.343-1.139c1.156.628 2.47 1.008 3.896 1.009 4.398 0 7.971-3.572 7.972-7.971 0-4.397-3.573-7.968-7.975-7.968z" />
      </svg>
      <span className="absolute right-14 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale comigo no Whats!
      </span>
    </a>
  );
};

export default WhatsAppButton;