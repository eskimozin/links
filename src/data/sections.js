const sections = [
  {
    title: "redes sociais",
    legend: "O eskimo nos bagui ai",
    className: "social-list",
    listItems: [
      {
        link: "https://twitter.com/eskimozinmorreu",
        nick: "@eskimozinmorreu",
        img: "./img/twitter.jpg",
        alt: "Logo do Twitter",
        title: "Twitter"
      },
      {
        link: "https://www.instagram.com/eskimozin",
        nick: "@eskimozin",
        img: "./img/instagram.png",
        alt: "Logo do Instagram",
        title: "Instagram"
      },
      {
        link: "https://www.tiktok.com/@eskimozinn",
        nick: "@eskimozinn",
        img: "./img/tiktok.jpg",
        alt: "Logo do TikTok",
        title: "TikTok"
      },
    ]
  },
  {
    title: "eskimozin no",
    legend: "Lista de canais",
    className: "channel-list",
    listItems: [
      {
        order: 1,
        name: "cortes de live",
        link: "https://www.youtube.com/@eskimozincraft",
        img: "https://yt3.googleusercontent.com/fmt2ghGErP04XGzCJmOLdnQ5S6FBGijwnKqH-nUYfM2BUi9SEzYpRyYU9cUDNJQJ24K78PfKqmE=s160-c-k-c0x00ffffff-no-rj",
        alt: "Foto de perfil do canal Eskimozincraft",
        title: "eskimozincraft"
      },
      {
        order: 4,
        name: "eskimozin",
        link: "https://www.youtube.com/@eskimozin",
        img: "https://yt3.googleusercontent.com/GW4iuXfBbrVkNcpEXnl7XmoX22THiE9OkPFihaT4RHfq8tV8xJ4j8IL7Z4HFRWN-Eau44ILQ=s160-c-k-c0x00ffffff-no-rj",
        alt: "Foto de perfil do canal Eskimozin",
        title: "eskimozin"
      },
      {
        order: 3,
        name: "gameplays",
        link: "https://www.youtube.com/@eskimozinplays",
        img: "./img/favicon.png",
        alt: "Foto de perfil do canal Eskimozin Gameplays",
        title: "eskimozinplays"
      },
      {
        order: 3,
        name: "jogos com o johan",
        link: "https://www.youtube.com/@NoitedosJogosTristes",
        img: "https://yt3.googleusercontent.com/U-tvN2-vtcBGmISLyOH2XdUarkCsieI0ngUQepHTyWW9Mb4rZyfjele6pclGJLy1m_GF0QV59g=s160-c-k-c0x00ffffff-no-rj",
        alt: "Foto de perfil do canal Noite dos Jogos Tristes",
        title: "noite dos jogos tristes"
      },
      {
        order: 4,
        name: "músicas",
        link: "https://www.youtube.com/@lilesk",
        img: "https://yt3.googleusercontent.com/v-Q0UZjP-NW9SGoVAJim6uY60Zby_0MKbtZULx_ixzDX_bHRijcq8lfQ6QtyH2hBVBdU5MVUNX8=s160-c-k-c0x00ffffff-no-rj",
        alt: "Foto de perfil do canal de músicas do eskimo",
        title: "Lil Esk"
      },
    ]
  },
  {
    title: "comunidade e parceiros",
    legend: "Acompanhe a comunidade e o eskimo em outras plataformas",
    className: "social-list community",
    listItems: [
      {
        order: 1,
        visible: true,
        name: "iglu",
        link: "https://discord.com/invite/fSzDQkBxcf",
        img: "./img/discord.jpg",
        alt: "Logo do Discord",
        title: "Discord"
      },
      {
        order: 2,
        visible: true,
        name: "r/eskimozin",
        link: "https://www.reddit.com/r/eskimozin/",
        img: "./img/reddit.png",
        imgStyle: "rounded-circle",
        alt: "Logo do Reddit",
        title: "Reddit"
      },
      {
        order: 3,
        visible: true,
        name: "Lil Esk",
        link: "https://open.spotify.com/intl-pt/artist/2tEePR3QOQxfvB9Q1ILPp8",
        img: "./img/spotify.png",
        alt: "Logo do Spotify",
        title: "Spotify"
      },
      {
        order: 4,
        visible: true,
        name: "canal na twitch",
        link: "https://www.twitch.tv/eskimozin/",
        img: "./img/twitch.jpg",
        alt: "Logo da Twitch",
        title: "Twitch"
      },
      {
        order: 5,
        visible: true,
        name: "Lil Esk",
        link: "https://soundcloud.com/littleesk",
        img: "./img/soundcloud.png",
        alt: "Logo do Soundcloud",
        title: "Soundcloud"
      },
    ]
  },
  {
    title: "incidente",
    legend: "É os guri",
    className: "general-list incidente",
    listItems: [
      {
        order: 1,
        visible: true,
        name: "team na twitch",
        link: "https://www.twitch.tv/team/incidente",
        img: "./img/twitch.jpg",
        alt: "Logo da Twitch",
        title: "Twitch"
      },
      {
        order: 2,
        visible: true,
        name: "twitter do incidente",
        link: "https://x.com/oincidente",
        img: "./img/twitter.jpg",
        alt: "Logo do Twitter",
        title: "Twitter"
      },
      {
        order: 3,
        visible: true,
        name: "instagram do incidas",
        link: "https://www.instagram.com/eoincidente",
        img: "./img/instagram.png",
        alt: "Logo do Instagram",
        title: "Instagram"
      },
      {
        order: 4,
        visible: true,
        name: "incidentando",
        link: "https://www.youtube.com/@incidentando",
        img: "./img/youtube.jpg",
        alt: "Logo do YouTube",
        title: "YouTube"
      },
    ]
  },
  {
    title: "apoie mandando din din",
    legend: "Se puder, mande um donate para o pobrezin. Os donates enviados durante as lives aparecem na transmissão.",
    className: "general-list donate-section",
    link: "https://livepix.gg/eskimozin",
    listItems: [
      {
        order: 1,
        visible: true,
        name: "live pix",
        link: "https://livepix.gg/eskimozin",
        img: "./img/live-pix.png",
        alt: "Logo do LivePix",
        title: "Live Pix"
      },
    ]
  },
]

export {sections}