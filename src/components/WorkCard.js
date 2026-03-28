import React from "react";
import { FiDownload, FiFolder, FiGithub, FiLock } from "react-icons/fi"; // FiLock qo'shib qo'ydim, kerak bo'lib qolar
import { IoOpenOutline } from "react-icons/io5";

const WorkCard = ({ w, tabId }) => {
  return (
    <div>
      {tabId === "react-native" ? (
        // --- REACT NATIVE (MOBIL ILOVALAR) UCHUN ---
        <a
          href={w.app}
          download={w.title}
          target="_blank"
          rel="noreferrer"
          className="work-link-group"
        >
          <div className="works-card">
            <div className="works-container">
              <div className="top-work">
                <FiFolder className="work-folder" />
                <div className="right">
                  {w.gitlink && (
                    // Link o'rniga a tegi
                    <a
                      className="work-git"
                      href={w.gitlink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub />
                    </a>
                  )}

                  <a
                    href={w.app}
                    download={w.title}
                    target="_blank"
                    rel="noreferrer"
                    className="work-link"
                  >
                    <FiDownload />
                  </a>
                </div>
              </div>
              <div className="mid-work">
                <p className="work-title">{w.title}</p>
                <p className="work-desc">{w.desc}</p>
              </div>
              <div className="bottom-work">
                {w.tech.map((e, index) => {
                  return <small key={index}>{e}</small>;
                })}
              </div>
            </div>	
          </div>
        </a>
      ) : (
        // --- WEB LOYIHALAR UCHUN (ASOSIY QISM) ---
        // Link o'rniga a tegi ishlatildi
        <a
          href={w.site}
          target="_blank"
          rel="noreferrer"
          className="work-link-group"
        >
          <div className="works-card">
            <div className="works-container">
              <div className="top-work">
                <FiFolder className="work-folder" />
                <div className="right">
                  {w.gitlink && (
                    // Github icon uchun ham a tegi
                    <a
                      className="work-git"
                      href={w.gitlink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub />
                    </a>
                  )}
                  {/* Saytni ochish iconi uchun a tegi */}
                  <a
                    className="work-link"
                    href={w.site}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoOpenOutline />
                  </a>
                </div>
              </div>
              <div className="mid-work">
                <p className="work-title">{w.title}</p>
                <p className="work-desc">{w.desc}</p>

                {/* Agar credentials bo'lsa chiqarish (avvalgi koddan) */}
                {w.credentials && (
                  <div className="work-credentials">
                    <div className="credentials-title">
                      <FiLock /> Demo Access:
                    </div>
                    <div className="credentials-text">{w.credentials}</div>
                  </div>
                )}
              </div>
              <div className="bottom-work">
                {w.tech.map((e, index) => {
                  return <small key={index}>{e}</small>;
                })}
              </div>
            </div>
          </div>
        </a>
      )}
    </div>
  );
};

export default WorkCard;
