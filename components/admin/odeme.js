import React, { useEffect, useState } from 'react'

export default function OdemeButton() {
  const [state, setState] = useState(false)

  useEffect(() => {
    typeof window !== 'undefined' &&
      setState(window.location.pathname === '/admin/buy')
  }, [])

  return (
    <div className="odemeButton">
      {!state && (
        <button onClick={() => (location.href = '/admin/buy')}>
          <i>₺ </i>Ödeme Yap
        </button>
      )}
    </div>
  )
}
