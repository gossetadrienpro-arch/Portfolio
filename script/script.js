const projectsData = {
    hvac: {
        title: "Démo HVAC (CVC) - Salon IBS 2024",
        duration: "2 mois (Septembre - Novembre 2024)",
        context: "Domaine du CVC/HVAC",
        team: "2 personnes (collaboration avec un collègue)",
        technologies: ["LX SCADA", "Graphworx", "S4TH", "OPC-UA", "LACBUS"],
        content: `
            <h3> Contexte du projet</h3>
            <p>Dans le cadre de la nouvelle offre de supervision LX SCADA, née d'un partenariat stratégique entre Iconics et Lacroix, l'entreprise Lacroix Sofrel souhaitait avoir des synoptiques de démonstrations commerciales du logiciel dans le domaine du HVAC afin de pouvoir le présenter au salon IBS (Intelligent Building Systems) qui a eu lieu au mois de novembre 2024.</p>
            
            <div class="highlight-box">
                <p><strong>Salon IBS :</strong> Événement professionnel dédié aux solutions technologiques et systèmes intelligents pour les bâtiments tertiaires, résidentiels et industriels. Il met en avant les innovations en matière de performance énergétique, automatisation, gestion technique du bâtiment (GTB) et smart building.</p>
            </div>

            <h3> Cahier des charges</h3>
            <ul>
                <li>Création de quatre vues différentes : Chaufferie, Sous stations, CTA, Petite GTB</li>
                <li>Réaliser un popup courbe de chauffe</li>
                <li>Utiliser des fonds blancs</li>
                <li>Mettre des couleurs « logiques » en lien avec le métier</li>
                <li>Possibilité de modifier des consignes</li>
                <li>La navigation entre les menus doit être fluide et intuitive</li>
                <li>Les vues de démonstration seront reliées à un S4TH situé sur la plateforme avant-vente avec des valeurs réelles modifiables (non simulées)</li>
            </ul>

            <h3> Architecture globale du superviseur</h3>
            <p>Les équipements Lacroix Sofrel communiquent via le protocole de communication LACBUS (propriété de l'entreprise), puis la communication entre les équipements et le superviseur se fait via la passerelle OPC-UA. Cette passerelle permet de transformer un protocole de communication industrielle vers OPC-UA, qui est un protocole très utilisé dans le domaine de l'automatisme, assurant une communication sécurisée entre les équipements et le superviseur.</p>

            <h3> Création de synoptiques avec Graphworx</h3>
            <p>Après avoir déclaré la station dans le serveur OPC-UA, créé et importé la liste de variables grâce à LX CONFIG, il était maintenant possible de créer les synoptiques via Graphworx.</p>
            <p>Le logiciel LX SCADA dispose d'un environnement puissant et très complet, ce qui amène de la difficulté. Pour prendre en main le logiciel, il faut être patient et savoir aller à l'essentiel.</p>

            <h3> Difficultés rencontrées</h3>
            <p>Les vues ont été réalisées par un collègue et moi-même, nous étions donc deux sur le sujet. Mon collègue ayant plus d'expérience que moi en intégration, il m'a permis de prendre en main le logiciel et de m'orienter sur le type de vue et d'architecture matérielle à adopter.</p>
            <p>J'ai également dû participer aux réunions marketing et commerciales. Ces réunions nous ont permis de nous orienter par rapport à ce que propose la concurrence et donc d'améliorer l'aspect utilisation technique par le client. Les avis différaient beaucoup et souvent à la réunion suivante, nous devions ajouter des éléments.</p>

            <h3> Vues réalisées</h3>
            <ul>
                <li><strong>Vue d'accueil HVAC</strong> : Interface principale de navigation</li>
                <li><strong>Vue GTB HVAC</strong> : Gestion technique du bâtiment</li>
                <li><strong>Vue sous-station HVAC</strong> : Contrôle des sous-stations</li>
                <li><strong>Vue chaufferie HVAC</strong> : Supervision de la chaufferie</li>
            </ul>

            <h3> Déroulement et conclusion</h3>
            <p>Le projet aura duré deux mois, de septembre (lors de ma deuxième semaine d'entreprise), puis nous l'avons terminé au mois de novembre à l'occasion du salon IBS à Paris. Pendant le salon, je suis resté sur le site de Vern-sur-Seiche en "backend" afin de pallier les erreurs de lecture sur des valeurs ou d'ajouter des éléments tels que l'affichage de consignes et de températures.</p>
            
            <div class="highlight-box">
                <p><strong>Bilan personnel :</strong> J'ai beaucoup apprécié l'autonomie qui m'a été confiée, et j'ai pu compter sur l'aide de mes collègues et de mon tuteur pour m'orienter. J'ai grandement apprécié découvrir le métier d'intégrateur et mener à bien un projet en devant respecter une date limite, et d'avoir contribué à la commercialisation de cette nouvelle offre produit.</p>
            </div>
        `
    },
    
    smartgrid: {
        title: "Démo Smart Grid - Parc Éolien",
        duration: "3 semaines",
        context: "Domaine du Smart Grid",
        team: "Projet individuel",
        technologies: ["LX SCADA", "Graphworx", "OPC-UA", "S4", "Simulations internes"],
        content: `
            <h3> Contexte du projet</h3>
            <p>Après avoir effectué la démo commerciale HVAC avec mon collègue, mon maître d'apprentissage m'a par la suite confié la création d'une démo commerciale pour le domaine du Smart Grid.</p>
            
            <div class="highlight-box">
                <p><strong>Smart Grid :</strong> Un réseau électrique intelligent capable de gérer de manière automatisée et en temps réel la production, la distribution et la consommation d'électricité. Il intègre des capteurs, des compteurs intelligents, des systèmes informatiques et des algorithmes pour optimiser la consommation d'énergie, intégrer les énergies renouvelables (solaire, éolien), réduire les pertes d'énergie, réagir plus vite aux pannes ou anomalies, et donner plus de contrôle aux consommateurs sur leur consommation.</p>
            </div>

            <h3> Objectif du projet</h3>
            <p>La démo devait se baser sur le contrôle de la production d'énergie d'un parc éolien, incluant donc la sélectivité des départs ainsi que la gestion de la synchronisation sur le réseau Enedis. Cette fois nous n'avions pas de valeurs réelles, j'ai donc dû créer un programme capable de simuler les valeurs liées à ce domaine et de contrôler l'aspect mécanique du système.</p>

            <h3> Développement et difficultés</h3>
            <p>Étant anciennement dans le domaine de l'électrotechnique, je disposais déjà de bonnes connaissances sur les valeurs attendues et leur calcul. En revanche, la production d'électricité via un parc éolien m'était inconnue. J'ai donc recherché des plans d'implantation et de dimensionnement pour ce type d'installation, puis, en visionnant des explications et cours sur YouTube, j'ai pu comprendre le principe et commencer le programme.</p>

            <h3> Vues réalisées</h3>
            <ul>
                <li><strong>Vue d'accueil Smart Grid</strong></li>
                <li>Vue générale du parc éolien</li>
                <li><strong>Vue Panneaux de contrôles et mesures</strong></li>
                <li>Simulation de production éolienne en temps réel</li>
                <li>Gestion de la synchronisation réseau Enedis</li>
                <li>Sélectivité des départs électriques</li>
                <li>Index de consommation automatisé</li>
            </ul>

            <div class="highlight-box">
                <p><strong>Bilan personnel :</strong> Le projet Smart Grid étant plus technique et mené par mes soins, cette expérience fut très valorisante. J'ai beaucoup apprécié l'autonomie qui m'a été confiée, et j'ai pu compter sur l'aide de mes collègues et de mon tuteur pour m'orienter. Cette expérience m'a permis de découvrir un nouveau domaine (Smart Grid) tout en perfectionnant mes compétences en intégration SCADA.</p>
            </div>
        `
    },

    chiffrage: {
        title: "Méthodes de Chiffrage - MyCRM & Price fx",
        duration: "Toute l'année (mission récurrente)",
        context: "Accompagnement projets clients",
        team: "Équipe Avant-Vente",
        technologies: ["MyCRM", "Price fx", "Dimensionnement", "Gestion de projet"],
        content: `
            <h3> Contexte de la mission</h3>
            <p>Un des objectifs de cette alternance étant de me former sur la réalisation de devis. En effet, l'équipe avant-vente de l'entreprise doit également réaliser le chiffrage des projets clients et assurer les formations liées aux solutions si nécessaire. Dans ce contexte, j'ai donc rejoint l'équipe chargée des devis pour le domaine de l'eau.</p>

            <h3> Fonctionnement de la plateforme MyCRM</h3>
            <ol>
                <li><strong>Recherche du client</strong> via son adresse électronique</li>
                <li><strong>Création de l'opportunité</strong> et renseignement du nom du projet</li>
                <li><strong>Chiffrage</strong> via des devis sauvegardés classés par famille de produits</li>
                <li><strong>Export PDF</strong> et envoi au client avec les documentations</li>
            </ol>

            <h3> Compétences développées</h3>
            <ul>
                <li>Connaissance approfondie de la gamme produits Lacroix Sofrel</li>
                <li>Dimensionnement de solutions techniques adaptées</li>
                <li>Gestion de projet et relation client</li>
                <li>Conseil technique et orientation clients</li>
                <li>Utilisation d'outils de gestion commerciale (CRM)</li>
            </ul>

            <div class="highlight-box">
                <p><strong>Bilan personnel :</strong> Chiffrer les projets des clients me permet de mieux comprendre la mise en application des nombreux produits de l'entreprise et d'ajouter des compétences sur la gestion de projet dans mon expérience.</p>
            </div>
        `
    },

    migration: {
        title: "Tutoriel Vidéo - Migration S500 vers S4",
        duration: "3 semaines",
        context: "Transition 2G/3G vers 4G",
        team: "Projet individuel",
        technologies: ["Softools", "S4 Tools", "Montage vidéo", "Pédagogie"],
        content: `
            <h3> Contexte de la mission</h3>
            <p>Alors que l'annonce de l'arrêt de la 2G et de la 3G a eu lieu en 2022-2023, l'entreprise Lacroix Sofrel a depuis 2020 lancé la gamme de RTU S4 prévue pour le remplacement de l'ancienne gamme S500.</p>

            <h3> Étapes pour la migration</h3>
            <ol>
                <li>Ouvrir la config dans Softools (version V6.30 minimum)</li>
                <li>Exporter le fichier de configuration</li>
                <li>Dans S4 Tools : créer une nouvelle station et importer le fichier Softools</li>
                <li>Télécharger le rapport de conversion et résoudre les erreurs</li>
                <li>Enregistrer régulièrement la configuration</li>
            </ol>

            <h3> Cahier des charges</h3>
            <ul>
                <li>Diction claire et rythmée</li>
                <li>Durée maximum : 10 minutes</li>
                <li>Image nette et bonne qualité de son</li>
                <li>Montage fluide et dynamique</li>
                <li>Délai : 3 semaines</li>
            </ul>

            <div class="highlight-box">
                <p><strong>Bilan personnel :</strong> Cette expérience m'a permis de développer mes compétences en pédagogie et communication, essentielles pour un technicien d'études.</p>
            </div>
        `
    },

    scadars: {
        title: "scada-rs — Backend SCADA & Cybersécurité OT",
        duration: "Projet personnel (en cours)",
        context: "Cybersécurité industrielle / Rust systems programming",
        team: "Projet individuel",
        technologies: ["Rust", "Tokio", "Axum", "Modbus TCP", "WebSocket", "REST API", "GitHub Actions"],
        content: `
            <h3>Contexte du projet</h3>
            <p>Projet personnel développé pour approfondir la maîtrise de Rust dans un contexte industriel réel. Objectif double : implémenter Modbus TCP from scratch et explorer les vulnérabilités de cybersécurité OT dans un environnement contrôlé.</p>
            <div class="highlight-box">
                <p><strong>GitHub :</strong> <a href="https://github.com/gossetadrienpro-arch/scada-rs" target="_blank" style="color: var(--accent-light);">gossetadrienpro-arch/scada-rs</a></p>
            </div>
            <h3>Architecture modulaire (workspace Cargo)</h3>
            <ul>
                <li><strong>scada-core</strong> — types partagés (Tag, Value, Error)</li>
                <li><strong>modbus</strong> — parsing de trames binaires big-endian from scratch</li>
                <li><strong>simulator</strong> — simulateur de PLC avec registres dynamiques</li>
                <li><strong>server</strong> — API REST + WebSocket + serveur TCP Modbus async</li>
                <li><strong>attacker</strong> — démonstration des attaques OT</li>
            </ul>
            <h3>Fonctionnalités clés</h3>
            <ul>
                <li>Parser Modbus TCP binaire implémenté from scratch (big-endian)</li>
                <li>Serveur TCP asynchrone multi-connexions avec Tokio</li>
                <li>API REST <code>GET /tags</code> retournant les registres en JSON</li>
                <li>WebSocket temps réel — rafraîchissement des données chaque seconde</li>
                <li>Simulateur de PLC avec génération dynamique de valeurs</li>
                <li>CI/CD via GitHub Actions : build, tests, clippy, rustfmt</li>
            </ul>
            <h3>Attaques OT démontrées</h3>
            <ul>
                <li><strong>Lecture non autorisée</strong> — accès aux registres via function code 0x03 sans authentification</li>
                <li><strong>Command injection</strong> — modification du PLC via function code 0x06</li>
                <li><strong>Replay attack</strong> — rejeu de trames réseau capturées</li>
            </ul>
            <h3>Protections implémentées</h3>
            <ul>
                <li>Détection de replay attack (analyse des transaction IDs Modbus)</li>
                <li>Rate limiting sur les connexions entrantes</li>
                <li>Audit log structuré avec tracing pour traçabilité complète</li>
            </ul>
            <div class="highlight-box">
                <p><strong>Bilan :</strong> Ce projet combine mes compétences en protocoles industriels (Lacroix Sofrel, Ouisense) avec Rust et la cybersécurité OT. Implémenter soi-même les vulnérabilités de Modbus est bien plus formateur que de les lire dans une doc.</p>
            </div>
        `
    },

    moxa: {        title: "Essais Communication Série Moxa-Radios",
        duration: "1 mois",
        context: "R&D - Faisabilité technique",
        team: "Collaboration avec le parcours client",
        technologies: ["Moxa MB3180", "Moxa NPort5110A", "Radios Kenwood NX-3820", "LACBUS", "RS232", "S500", "PCWin2"],
        content: `
            <h3> Contexte de la mission</h3>
            <p>Étude visant à évaluer la possibilité d'établir une communication série RS232 entre un S4 et un superviseur (PCWIN2, LX SCADA), en passant par des radios et en utilisant le protocole LACBUS PL.</p>

            <h3> Phase 1 : Tests Moxa NPort 5110A</h3>
            <p>Lors des premiers essais, il n'y avait pratiquement aucun échange de trames. Cet appareil fonctionne comme un serveur et ne gère pas réellement le transfert de trames. Il a été remplacé par le <strong>Moxa MB3180</strong>.</p>

            <h3> Phase 2 : Tests Moxa MB3180</h3>
            <ul>
                <li>Test A — Liaison directe RS232 sans radio : ✅ fonctionnel</li>
                <li>Test B — Avec radios Kenwood et CTS/RTS actif : ❌ trame absente côté PC</li>
                <li>Test C — CTS/RTS shunté : ⚠️ trames longues tronquées</li>
            </ul>

            <h3> Paramètres optimisés</h3>
            <ul>
                <li><strong>Inter-frame delay :</strong> 500 ms</li>
                <li><strong>Response timeout :</strong> 4000 ms</li>
                <li><strong>RTS Off Delay :</strong> 100 ms</li>
            </ul>

            <div class="highlight-box">
                <h4>Résultats finaux</h4>
                <ul>
                    <li>✅ Communication série RS232 via radios : <strong>FONCTIONNELLE</strong></li>
                    <li>✅ Trames courtes et longues : <strong>VALIDÉES</strong></li>
                    <li>⚠️ Multi-socket : comportement instable avec le Moxa MB3180</li>
                </ul>
            </div>

            <div class="highlight-box">
                <p><strong>Bilan personnel :</strong> Ce projet de R&D m'a permis de développer mes compétences en troubleshooting technique, en analyse de protocoles de communication série, et en résolution de problèmes complexes.</p>
            </div>
        `
    }
};


function openProject(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        
        <div class="project-meta">
            <div class="meta-item">
                <div class="meta-label">Durée</div>
                <div class="meta-value">${project.duration}</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">Contexte</div>
                <div class="meta-value">${project.context}</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">Équipe</div>
                <div class="meta-value">${project.team}</div>
            </div>
        </div>

        <div class="tech-list">
            ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
        </div>

        ${project.content}
    `;

    const modal = document.getElementById('projectModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProject() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProject();
});

const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all') {
                card.classList.remove('hidden');
            } else {
                const categories = card.getAttribute('data-category');
                if (categories.includes(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => observer.observe(section));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (pageYOffset >= section.offsetTop - 200) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) link.classList.add('active');
    });
});