import React from 'react'

const Days = ({ gunler, not }) => {
  return gunler.length != 0 ? (
    <div id="gunler">
      <div className="gunler">
        <ul>
          {gunler.map(item => 
            {item.dtarih != '' && item.dbaslik != '' && item.dadres != '' && item.diframe != '' ? (
            <li key={item.dugunid}>
              {item.dbaslik != '' ? (
              <div className="gbaslik">
                <span>{item.dbaslik}</span>
              </div> ) : null }

              <div className="gust">
                {item.dtarih != '' ? (
                <div className="gtarih">
                  <span>{item.dtarih != null ? item.dtarih.slice(0, -4): null}</span>
                  <i>{item.dtarih != null ? item.dtarih.slice(-4) : null}</i>
                </div>
                ) : null}
                <div className="gadres">
                  <p>{item.dadres}</p>
                </div>
              </div>
              <div className="temizle" />
              <div className="gmap">{item.diframe}</div>
            </li>
            ) : null}
          )}
        </ul>
        <div
          className="not"
          dangerouslySetInnerHTML={{ __html: not.map(item => item.dipnot) }}
        ></div>
      </div>
    </div>
  ) : null
}

export default Days
