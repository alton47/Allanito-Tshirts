import { proxy } from 'valtio';


const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './nitto.png',
    fullDecal: './nitto.png',
});

export default state;