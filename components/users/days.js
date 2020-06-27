import React from 'react'

const Days = ({ gunler, not }) => {
  return gunler.length != 0 ? (
    <div id="gunler">
      <div className="gunler">
        <ul>
          {gunler.map(item => (
            <li key={item.dugunid}>
              {item.dbaslik != '' ? (
                <div className="gbaslik">
                  <span>{item.dbaslik}</span>
                </div>
              ) : null}
              <div className="gust">
                {item.dtarih != '' ? (
                  <div className="gtarih">
                    <span>
                      {item.dtarih != null ? item.dtarih.slice(0, -4) : null}
                    </span>
                    <i>{item.dtarih != null ? item.dtarih.slice(-4) : null}</i>
                  </div>
                ) : null}
                <div className="gadres">
                  <p>{item.dadres}</p>
                </div>
              </div>
              <div className="temizle" />
              <div className="gmap">
                {item.diframe && (
                  <iframe
                    width={300}
                    height={170}
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src={`https://maps.google.com/maps?q=${
                      item.diframe.split(',')[0]
                    },${
                      item.diframe.split(',')[1]
                    }&hl=tr&z=14&amp&output=svembed`}
                  ></iframe>
                )}
              </div>
            </li>
          ))}
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
