import React from 'react'

function LogoCard({ name }: { name: string }) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2); // max 2 letters
  };

  return (
    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
      <span className="text-white font-semibold text-lg">
        {getInitials(name)}
      </span>
    </div>
  )
}

export default LogoCard