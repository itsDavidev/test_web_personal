import davgram from '../assets/projects/Davgram.png'
import davtion from '../assets/projects/Davtion.png'
import dblog from '../assets/projects/dblog.png'
import davcrip from '../assets/projects/DavCrip.png'
import login from '../assets/projects/Login.png'
import nftcart from '../assets/projects/nftcard.png'
import ecomerce from '../assets/projects/ecomercePage.png'
import chanllenge from '../assets/projects/challeng.png'



const projects = { davgram, davtion, dblog, davcrip, login, nftcart, ecomerce, chanllenge }
const links = {
    davgram: 'https://youthful-neumann-3d117c.netlify.app/explore',
    davtion: 'https://davtion.vercel.app/',
    dblog: 'https://dblog.ga/',
    davcrip: 'https://friendly-mirzakhani-258ddf.netlify.app',
    login: 'https://epic-aryabhata-2ce570.netlify.app',
    ecomerce: 'https://github.com/itsDavidev/ecommerce-page-frontend',
    chanllenge: 'https://github.com/itsDavidev/challenge-hub',
    nftcart: 'https://github.com/itsDavidev/nft-card-main'
}

class Projects extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        .containerProjects{
            margin: .4rem 0;
            padding: 1rem;
        }

        a{
            text-decoration:none;
        }

        .renderProject{
         display:flex;
         justify-content:center;
         align-items:center;
         flex-direction:column  ; 
        }

        .renderProject > img{
            border-radius:1rem;
            width: 300px;
            opacity: 0.6;
            transition: all .5s ease-in-out;
           
        }

        .renderProject > img:hover{
            opacity: 1;
        }
        
        .renderProject > strong{
            text-decoration:none;
            padding:1rem;
            color:#000;
            font-weight:bold;
            text-transform:uppercase
        }
        strong {
            border-bottom: 1px solid #ECB365;       
        }
         
    `;
    }

    connectedCallback() {
        this.name = this.getAttribute('name');
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${Projects.styles}</style>
 <div class='projects'>
     <div class='containerProjects'>
     <a href='${links[this.name]}' target='_blank'    >
        <div class='renderProject' >
            <img  src='${projects[this.name]}'  alt='${this.name}'    />  
                <strong>
                    ${this.name}
                </strong>
            </div>
     </a>

     </div>
        <slot></slot>
</div>
    `;
    }
}
customElements.define('projects-ui', Projects);