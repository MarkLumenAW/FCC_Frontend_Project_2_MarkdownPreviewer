import { Icon } from "@iconify/react";

export default function Footer(props) {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'row',
      marginTop: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '4rem',
    }}>
      <span style={{
        fontSize: '0.75rem',
        letterSpacing: '-0.08em',
        color: '#ffffff'
      }}>Designed and Coded by Alex Wang</span>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <a href="https://github.com/MarkLumenAW/FCC_Frontend_Project_2_MarkdownPreviewer" target="_blank" rel="noopener noreferrer" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Icon icon="mdi:github" color="#ffffff" width="1rem" />
        </a>
        <a href="https://www.linkedin.com/in/pengcheng-wang-0412b0151/" target="_blank" rel="noopener noreferrer" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Icon icon="mdi:linkedin" color="#ffffff" width="1rem" />
        </a>
      </div>
    </section>
  );
};
