import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, icon, className = '', ...props }) => {
  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles = 'bg-primary text-black hover:bg-primary-hover border border-transparent';
      break;
    case 'secondary':
      variantStyles = 'bg-secondary text-white hover:bg-secondary-hover border border-transparent';
      break;
    case 'outline':
      variantStyles = 'bg-white/50 text-secondary border border-secondary hover:bg-white/100 hover:border-secondary';
      break;
    case 'text':
      variantStyles = 'bg-transparent text-secondary hover:bg-black/5 p-2 border border-transparent';
      break;
  }

  return (
    <button 
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-[0.95rem] cursor-pointer transition-all duration-200 font-sans ${variantStyles} ${className}`} 
      {...props}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      {children}
    </button>
  );
};
