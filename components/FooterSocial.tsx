const socialLinks = [
  {
    label: 'info',
    href: 'https://www.facebook.com/uprag',
    icon: '/img/info.svg',
  },
  {
    label: 'video',
    href: 'https://www.youtube.com/channel/UC47ivFlCjCLKf6q_6hbnWpg',
    icon: '/img/video.svg',
  },
  {
    label: 'instagram',
    href: 'https://www.instagram.com/u_prag/',
    icon: '/img/insta.svg',
  },
] as const;

export default function FooterSocial() {
  return (
    <nav className="footer-social" aria-label="Social links">
      {socialLinks.map(({ label, href, icon }) => (
        <a
          key={label}
          className={`footer-social__link footer-social__link--${label}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <img src={icon} alt={label} width={44} height={64} />
        </a>
      ))}
    </nav>
  );
}
