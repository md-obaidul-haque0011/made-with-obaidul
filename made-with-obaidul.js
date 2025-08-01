(function () {
    const scriptTag = document.currentScript;
    const position = scriptTag.getAttribute('data-position') === 'top' ? 'top' : 'bottom';
    const randomId = Math.random().toString(36).slice(2);
    const footer = document.createElement('div');
    footer.id = `footer-${randomId}`;
    footer.style.position = 'fixed';
    footer.style.right = '10px';
    footer.style.display = 'flex';
    footer.style.alignItems = 'center';
    footer.style.gap = '5px';
    footer.style.fontFamily = 'Comic Sans, sans-serif';
    footer.style.color = '#fff';
    footer.style.fontSize = '14px';
    footer.style.background = 'rgba(0, 0, 0, 0.5)';
    footer.style.padding = '10px';
    footer.style.opacity = '0';
    footer.style.transform = 'translateX(100px)';

    if (position === 'top') {
        footer.style.top = '10px';
    } else {
        footer.style.bottom = '10px';
    }

    const style = document.createElement('style');
    style.innerHTML = `
        #footer-${randomId} {
            animation: slideIn 4s ease-out forwards;
        }

        @keyframes slideIn {
            0% {
                opacity: 0;
                transform: translateX(100px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }

        #footer-${randomId} a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            transition: filter .3s ease;
        }

        #footer-${randomId} a svg {
            transition: filter .3s ease;
            stroke: #fff;
        }

        #footer-${randomId} a:hover {
            color: #ff00ff;
        }

        #footer-${randomId} a:hover svg {
            stroke: #ff00ff;
            animation: rainbow 1.5s linear infinite;
        }

        @keyframes rainbow {
            0% { filter: hue-rotate(300deg) saturate(3) brightness(1.2); }
            10% { filter: hue-rotate(290deg) saturate(3) brightness(1.2); }
            20% { filter: hue-rotate(280deg) saturate(3) brightness(1.2); }
            30% { filter: hue-rotate(270deg) saturate(3) brightness(1.2); }
            40% { filter: hue-rotate(260deg) saturate(3) brightness(1.2); }
            50% { filter: hue-rotate(250deg) saturate(3) brightness(1.2); }
            60% { filter: hue-rotate(260deg) saturate(3) brightness(1.2); }
            70% { filter: hue-rotate(270deg) saturate(3) brightness(1.2); }
            80% { filter: hue-rotate(280deg) saturate(3) brightness(1.2); }
            90% { filter: hue-rotate(290deg) saturate(3) brightness(1.2); }
            100% { filter: hue-rotate(300deg) saturate(3) brightness(1.2); }
        }

        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
        }
    `;
    document.head.appendChild(style);

    const heart =
        '<?xml version="1.0" encoding="UTF-8"?><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ff0000" stroke-width="1.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 3.94228C13.1757 2.85872 14.7069 2.25 16.3053 2.25C18.0313 2.25 19.679 2.95977 20.8854 4.21074C22.0832 5.45181 22.75 7.1248 22.75 8.86222C22.75 10.5997 22.0831 12.2728 20.8854 13.5137C20.089 14.3393 19.2938 15.1836 18.4945 16.0323C16.871 17.7562 15.2301 19.4985 13.5256 21.14L13.5216 21.1438C12.6426 21.9779 11.2505 21.9476 10.409 21.0754L3.11399 13.5136C0.62867 10.9374 0.62867 6.78707 3.11399 4.21085C5.54605 1.68984 9.46239 1.60032 11.9999 3.94228Z" fill="#ff0000"></path></svg>';
    const text = document.createElement('span');
    text.style.display = 'flex';
    text.style.gap = '5px';
    text.style.alignItems = 'center';
    text.innerHTML = `Made with${heart}By`;
    footer.appendChild(text);

    const link = document.createElement('a');
    link.href = 'https://wa.me/8801783437065?text=Hi,+I’m+Md+Obaidul+Haque+—+SEO+expert+%26+web+designer.+Let’s+make+your+website+Google’s+favorite!+🚀';
    link.innerText = 'Obaidul';
    link.target = '_blank';
    footer.appendChild(link);

    const socialLinks = document.createElement('div');
    socialLinks.style.display = 'flex';
    socialLinks.style.gap = '10px';
    socialLinks.style.alignItems = 'center';
    footer.appendChild(socialLinks);

    const icons = [
        {
            href: 'https://www.linkedin.com/in/md-obaidul-haque1/',
            svg: `
            <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7 17V13.5V10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7 7.01L7.01 6.99889" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>`,
        },
        {
            href: 'https://github.com/md-obaidul-haque0011',
            svg: `
            <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>`,
        },
        {
            href: 'https://codepen.io/md-obaidul-haque1',
            svg: `
            <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 9V15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M3 15V9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12 21V15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12 3V9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12 15L3 9L12 3L21 9L12 15Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12 21L3 15L12 9L21 15L12 21Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>`,
        },
    ];

    icons.forEach(({ href, svg }) => {
        const iconLink = document.createElement('a');
        iconLink.href = href;
        iconLink.target = '_blank';
        iconLink.innerHTML = `${svg}<span class="sr-only">${href}</span>`;
        socialLinks.appendChild(iconLink);
    });

    document.body.appendChild(footer);
})();