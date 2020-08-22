import React from 'react'
import Link from 'next/link'

export default function Davet() {
  return (
    <div className="bolum bacikla animated fadeIn">
      <div className="acikla">
        <p>
          Dijital davetiyenizi online bir şekilde oluşturabilirsinz.
          Oluşturacağınız dijital davetiye ile hem nakitten hem de zamandan
          tasarruf edip sevdiklerinizle kolay bir şekilde paylaşabilirsiniz.
        </p>
      </div>
      <div className="sbuton">
        <Link href="/register">
          <a>Davetiye Siteni Aç</a>
        </Link>
      </div>
    </div>
  )
}
