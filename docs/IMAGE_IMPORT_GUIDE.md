# Guia de Importação de Imagens (Estilo Next.js)

Este projeto agora suporta importação de imagens direta como no Next.js, graças à configuração do Vite.

## Como Funciona

O Vite processa automaticamente as importações de imagens durante o build, gerando URLs otimizadas com hashes para cache busting.

## Arquivo de Utilidade

Todas as imagens são centralizadas em `src/utils/images.js`:

```javascript
// Importação direta das imagens
import faviconImg from '../../public/img/favicon.png'
import brainMadeImg from '../../public/img/brain-made.svg'
// ... outras imagens

// Exportação individual
export { faviconImg, brainMadeImg, ... }

// Exportação como objeto
export const images = {
  favicon: faviconImg,
  brainMade: brainMadeImg,
  // ...
}
```

## Como Usar

### 1. Importação Direta (Recomendado)

```javascript
import { faviconImg, brainMadeImg } from '../../utils/images.js';

// No componente
<img src={faviconImg} alt="Favicon" />
```

### 2. Mapeamento Dinâmico (Para dados externos)

Para imagens definidas em arquivos de dados (como `data/sections.js`):

```javascript
import { images } from '../../utils/images.js';

const getImageSrc = (imgPath) => {
  if (!imgPath.startsWith("./")) return imgPath;
  
  const cleanPath = imgPath.replace(/^\.+\//, "");
  const imageName = cleanPath.split("/").pop().split(".")[0];
  
  return images[imageName] || imgPath;
};

// Uso
<img src={getImageSrc(item.img)} alt={item.alt} />
```

## Vantagens

URLs Dinâmicas: O Vite gera URLs automaticamente durante o build  
Otimização: Imagens são otimizadas e renomeadas com hashes  
Cache Bustling: Hashes garantem que usuários vejam versões atualizadas  
Compatibilidade: Funciona perfeitamente com `base: '/links/'` para GitHub Pages  
Type Safety: Importações ES6 oferecem melhor suporte a IDEs  

## Adicionando Novas Imagens

1. Coloque a imagem em `public/img/`
2. Adicione a importação em `src/utils/images.js`:
   ```javascript
   import novaImagemImg from '../../public/img/nova-imagem.png'
   ```
3. Exporte a imagem:
   ```javascript
   export { novaImagemImg }
   export const images = {
     // ...
     novaImagem: novaImagemImg
   }
   ```
4. Se necessário, adicione ao mapeamento dinâmico em `src/components/List/index.jsx`

## Exemplo de Uso Completo

```javascript
// Em qualquer componente
import { spotifyImg, youtubeImg } from '../../utils/images.js';

function SocialLinks() {
  return (
    <div>
      <img src={spotifyImg} alt="Spotify" />
      <img src={youtubeImg} alt="YouTube" />
    </div>
  );
}
```

## Build Output

Durante o build, as imagens são processadas e movidas para `dist/assets/` com nomes únicos:

```
dist/assets/spotify-DfmUK-BO.png
dist/assets/youtube-Dv2A1Krt.jpg
dist/assets/favicon-CCfCB8-P.png
```

Isso garante que as imagens funcionem corretamente em qualquer ambiente de deploy!
