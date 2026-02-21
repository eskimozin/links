import Home from "./pages/Home.jsx";
import YoutubeChannels from "./pages/YoutubeChannels.jsx";
import Lives from "./pages/Lives.jsx";
import ManageCampaigns from "./pages/ManageCampaigns.jsx";
import Censo from "./pages/Censo.jsx";

/**
 * @type {{path: string, name: string, component: React.ComponentType, isIndex?: boolean}[]}
 */
export const routes = [
  { path: "/", name: "Página Inicial", component: Home, isIndex: true },
  { path: "/youtube/", name: "Canais do Youtube", component: YoutubeChannels },
  { path: "/lives/", name: "Lives", component: Lives },
  { path: "/create-campaigns/", name: "Gerenciar Campanhas", component: ManageCampaigns },
  { path: "/censo/", name: "Censo", component: Censo },
];
