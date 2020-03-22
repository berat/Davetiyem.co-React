import React from 'react'

const Days = ({gunler, not}) => {

  return (
    <div id="gunler">
      <div className="gunler">
        <ul>
          {gunler != []
            ? gunler.map(item => (
                <li key={item.dugunid}>
                  <div className="gbaslik">
                    <span>{item.dbaslik}</span>
                  </div>
                  <div className="gust">
                    <div className="gtarih">
                      <span>{item.dtarih.slice(0, -4)}</span>
                      <i>{item.dtarih.slice(-4)}</i>
                    </div>
                    <div className="gadres">
                      <p>{item.dadres}</p>
                    </div>
                  </div>
                  <div className="temizle" />
                  <div className="gmap">{item.diframe}</div>
                </li>
              ))
            : null}
        </ul>
        <div
          className="not"
          dangerouslySetInnerHTML={{ __html: not.map(item => item.dipnot) }}
        ></div>
      </div>
    </div>
  )
}

export default Days
