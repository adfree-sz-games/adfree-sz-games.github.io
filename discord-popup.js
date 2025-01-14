class DiscordPopup extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    const style = document.createElement('style')
    style.textContent = `
      :host {
        position: fixed;
        bottom: 120px;
        left: 20px;
        z-index: 1000;
      }

      .discord-popup {
        background: #5865f2;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 10px;
        color: white;
        font-family: Arial, sans-serif;
        text-decoration: none;
        transition: transform 0.2s;
      }

      .discord-popup:hover {
        transform: translateY(-2px);
      }

      .discord-icon {
        font-size: 24px;
      }
    `

    const link = document.createElement('a')
    link.className = 'discord-popup'
    link.href = this.getAttribute('invite-url') || 'https://discord.gg/YVJDzyjV'
    link.target = '_blank'

    // Load Font Awesome if not already loaded
    if (!document.querySelector('link[href*="fontawesome"]')) {
      const fontAwesome = document.createElement('link')
      fontAwesome.rel = 'stylesheet'
      fontAwesome.href = 'https://kit-free.fontawesome.com/releases/latest/css/free.min.css'
      document.head.appendChild(fontAwesome)
    }

    link.innerHTML = `
      <i class="fab fa-discord discord-icon"></i>
      <span>${this.getAttribute('text') || 'Join our Discord!'}</span>
    `

    shadow.appendChild(style)
    shadow.appendChild(link)
  }
}

customElements.define('discord-popup', DiscordPopup)
