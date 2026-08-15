import "./certificate-modal.css";
import { useEffect } from "react";
import Icon from "../Icon/Icon";

export default function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    if (!certificate) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={certificate.title}>
      <button className="modal-backdrop" onClick={onClose} aria-label="Close certificate" />
      <div className="certificate-viewer">
        <div className="viewer-toolbar">
          <div>
            <span className="viewer-kicker">CERTIFICATE</span>
            <h2>{certificate.title}</h2>
            <p>{certificate.issuer} • {certificate.year}</p>
          </div>
          <button className="viewer-close" onClick={onClose} aria-label="Close">
            <Icon name="close" size={21} />
          </button>
        </div>

        <div className="certificate-canvas">
          <div className="certificate-frame">
            <div className="certificate-image-wrap">
              {certificate.image.toLowerCase().endsWith(".pdf") ? (
                <iframe
                  src={certificate.image}
                  title={`${certificate.title} certificate`}
                  className="certificate-pdf"
                />
              ) : (
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.nextElementSibling.style.display = "grid";
                  }}
                />
              )}
              <div className="certificate-placeholder">
                <Icon name="award" size={42} />
                <strong>Certificate image not added yet</strong>
                <span>Place the original certificate at:</span>
                <code>public{certificate.image}</code>
              </div>
            </div>
          </div>
        </div>

        <div className="viewer-footer">
          <span>{certificate.description}</span>
          <button className="secondary-button" onClick={onClose}>Close viewer</button>
        </div>
      </div>
    </div>
  );
}