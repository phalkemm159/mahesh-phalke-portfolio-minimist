import "./certifications.css";
import { useState } from "react";
import { certifications } from "../../data/siteData";
import CertificateModal from "../CertificateModal/CertificateModal";
import Icon from "../Icon/Icon";

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <section id="certifications" className="container section">
        <div className="section-heading">
          <div><div className="section-label">05 / CERTIFICATIONS</div><h3>Credentials & learning</h3></div>
          <span className="muted">Click any certificate to view it full screen.</span>
        </div>

        <div className="cert-grid">
          {certifications.map((certificate, index) => (
            <button
              className="cert-card glass"
              key={certificate.id}
              onClick={() => setSelectedCertificate(certificate)}
              aria-label={`View ${certificate.title}`}
            >
              <span className="cert-icon"><Icon name="award" size={18} /></span>
              <span className="cert-copy">
                <b>{certificate.title}</b>
                <small>{certificate.issuer} • {certificate.year}</small>
              </span>
              <span className="cert-number">0{index + 1}</span>
              <span className="cert-open">View <Icon name="upRight" size={13} /></span>
            </button>
          ))}
        </div>
      </section>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
}