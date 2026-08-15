/*
 * Offline icon system.
 * All icons are inline SVGs bundled with the application.
 * No icon CDN, API, remote font, or external image request is required.
 */
const paths = {
  code: <><path d="m9 7-5 5 5 5"/><path d="m15 7 5 5-5 5"/><path d="m13 5-2 14"/></>,
  chart: <><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-5"/><path d="M12 16V8"/><path d="M16 16v-9"/></>,
  brain: <><path d="M9 4.5a3 3 0 0 0-5 2.2A3.2 3.2 0 0 0 5 12a3.2 3.2 0 0 0-1 5.3A3 3 0 0 0 9 19.5"/><path d="M15 4.5a3 3 0 0 1 5 2.2A3.2 3.2 0 0 1 19 12a3.2 3.2 0 0 1 1 5.3 3 3 0 0 1-5 2.2"/><path d="M9 4.5v15M15 4.5v15M9 9h6M9 15h6"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.4 2.5 3.5 5.5 3.5 9s-1.1 6.5-3.5 9c-2.4-2.5-3.5-5.5-3.5-9S9.6 5.5 12 3Z"/></>,
  tool: <><path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L4 17l3 3 4.3-4.3a5 5 0 0 0 6.4-6.4l-3 3-2.9-2.9 2.9-3Z"/></>,
  server: <><rect x="3" y="4" width="18" height="6" rx="1"/><rect x="3" y="14" width="18" height="6" rx="1"/><path d="M7 7h.01M7 17h.01"/></>,
  database: <><ellipse cx="12" cy="5" rx="7.5" ry="3"/><path d="M4.5 5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V5"/><path d="M4.5 11v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6"/></>,
  databaseTools: <><ellipse cx="12" cy="5" rx="7.5" ry="3"/><path d="M4.5 5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V5"/><path d="M4.5 11v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6"/><path d="m16.5 14.5 2 2m-1-3.5a2 2 0 1 0-2.8 2.8 2 2 0 0 0 2.8-2.8Z"/></>,
  award: <><circle cx="12" cy="8" r="5"/><path d="m9 12-1 8 4-2 4 2-1-8"/></>,
  github: <><path d="M9 19c-4 1-4-2-5-2m10 4v-3.5c0-1 .1-1.7-.5-2.5 3.2-.4 6.5-1.6 6.5-7A5.5 5.5 0 0 0 18.5 4C18.6 3.3 18.8 2.3 18.3 1c0 0-1.2-.4-4 1.5a13.5 13.5 0 0 0-4.6 0C6.9.6 5.7 1 5.7 1c-.5 1.3-.3 2.3-.2 3A5.5 5.5 0 0 0 4 8c0 5.4 3.3 6.6 6.5 7-.6.7-.6 1.3-.5 2.5V21"/></>,
  linkedin: <><path d="M5 8v11"/><path d="M5 5.2v.1"/><path d="M9 19V8h4v2c.7-1.3 2-2.4 4.1-2.4 3 0 3.9 2 3.9 5.1V19h-4v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V19"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  download: <><path d="M12 3v11"/><path d="m8 10 4 4 4-4"/><path d="M4 21h16"/></>,
  upRight: <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,
  down: <><path d="M12 5v14"/><path d="m6 13 6 6 6-6"/></>,
  check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>,
  map: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  phone: <><path d="M7 3h3l1.5 4-2 1.5a14 14 0 0 0 6 6l1.5-2 4 1.5v3c0 1-1 2-2 2C10.7 19 5 13.3 5 5c0-1 1-2 2-2Z"/></>,
  send: <><path d="m21 3-7.5 18-3.5-7-7-3.5L21 3Z"/><path d="M10 14 21 3"/></>,
  moon: <><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></>,
  sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
  close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
};

export default function Icon({ name, size = 18, strokeWidth = 1.8, ...props }) {
  const content = paths[name];
  if (!content) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {content}
    </svg>
  );
}
