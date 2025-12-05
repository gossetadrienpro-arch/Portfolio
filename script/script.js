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

            <p>C'est un domaine interdisciplinaire, entre électronique, énergie, informatique, cybersécurité et gestion des données.</p>

            <h3> Objectif du projet</h3>
            <p>La démo devait se baser sur le contrôle de la production d'énergie d'un parc éolien, incluant donc la sélectivité des départs ainsi que la gestion de la synchronisation sur le réseau Enedis. Cette fois nous n'avions pas de valeurs réelles, j'ai donc dû créer un programme capable de simuler les valeurs liées à ce domaine et de contrôler l'aspect mécanique du système.</p>
            <p>L'objectif final du projet était de le présenter à notre filiale SAE IT-SYSTEMS afin qu'ils puissent découvrir la nouvelle solution LX SCADA et voir les possibilités qui s'offrent à eux pour le domaine du Smart Grid.</p>

            <h3> Développement et difficultés</h3>
            <p>Étant anciennement dans le domaine de l'électrotechnique, je disposais déjà de bonnes connaissances sur les valeurs attendues et leur calcul. En revanche, la production d'électricité via un parc éolien m'était inconnue. J'ai donc recherché des plans d'implantation et de dimensionnement pour ce type d'installation, puis, en visionnant des explications et cours sur YouTube, j'ai pu comprendre le principe et commencer le programme.</p>

            <h4>Difficultés de programmation</h4>
            <p>Lors de la rédaction du programme, j'ai rencontré quelques difficultés. Pour être sûr d'avoir les bonnes variables, je suis parti d'un programme existant d'un client. Or, les valeurs étant réelles, certaines variables dont j'avais besoin n'étaient pas renseignées comme variables internes à l'automate, et d'autres étaient inutiles car simulées. Cela m'a permis de faire des "raccourcis" : une seule variable pouvait simuler plusieurs valeurs. J'ai donc dû trier et adapter les variables parmi environ 300 existantes.</p>

            <h4>Création des vues</h4>
            <p>Une fois les bonnes variables liées et configurées, j'ai créé les vues sur GraphWorx. L'objectif étant de montrer les possibilités de LX SCADA, j'ai travaillé le dynamisme et la cohérence des valeurs. J'avais prévu d'afficher des sinusoïdes visibles sur LX SCADA, mais la période d'interrogation minimale du logiciel (5 secondes) étant trop longue, j'ai abandonné cette idée.</p>

            <h3> Améliorations apportées</h3>
            <p>Pendant les essais des vues de démonstration, un collègue m'a conseillé d'ajouter des pop-ups de validation pour éviter qu'un opérateur ne modifie une consigne ou ne mette en danger l'installation par erreur. J'ai aussi ajouté une simulation de consommation générant un index de consommation, configuré via WorkBench et visible directement dans LX SCADA.</p>

            <h3> Vues réalisées</h3>
            <ul>
                <li><strong>Vue d'accueil Smart Grid</strong> : </li>
                <li>Vue générale du parc éolien</li>
                <li><strong>Vue Panneaux de contrôles et mesures</strong> : </li>
                <li>Tableau de bord détaillé avec toutes les métriques</li>
                <li>Simulation de production éolienne en temps réel</li>
                <li>Gestion de la synchronisation réseau Enedis</li>
                <li>Sélectivité des départs électriques</li>
                <li>Index de consommation automatisé</li>
            </ul>

            <h3> Conclusion</h3>
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
            <p>Pour réaliser les devis, nous utilisons une plateforme nommée MyCRM qui intègre un logiciel nommé Price fx.</p>

            <h3> Journée type</h3>
            <h4>Matin - Gestion des demandes</h4>
            <p>Premièrement, le matin, en arrivant au bureau, il faut vérifier les boîtes mails et identifier laquelle contient le plus de demandes. Mon objectif est d'apporter un soutien à l'équipe possédant le plus de demandes. En effet, les projets des clients sont séparés en deux boîtes de réception, une pour la partie nord de la France et une autre pour la partie sud.</p>

            <h4>Priorisation des demandes</h4>
            <p>Ensuite, je commence par les demandes les plus anciennes et que je suis capable de chiffrer. En effet, pour certaines demandes, il faut avoir plus d'expérience et certains techniciens s'occupent de gérer les demandes de dimensionnement particulières comme :</p>
            <ul>
                <li>Demandes de dimensionnement pour de la radiocommunication</li>
                <li>L'offre de supervision LX SCADA (demande une bonne connaissance de l'offre et des éléments nécessaires au bon fonctionnement du système)</li>
            </ul>

            <h4>Support téléphonique</h4>
            <p>Tous les techniciens sont également reliés à une ligne d'appel, en cas de besoin pour des conseils sur du matériel spécifique ou d'une demande de chiffrage "rapide".</p>

            <h3> Fonctionnement de la plateforme MyCRM</h3>
            
            <h4>Étape 1 : Recherche du client</h4>
            <p>Une fois que nous avons reçu la demande de projet d'un client, nous allons sur la page d'accueil du logiciel, puis effectuons une recherche via son adresse électronique. Chaque client de l'entreprise possède une fiche CRM, qui permet de retrouver le compte de la société à chiffrer.</p>

            <h4>Étape 2 : Création de l'opportunité</h4>
            <p>Une fois la fiche CRM trouvée, je crée une opportunité et renseigne le nom du projet du client, ainsi que la date de la demande. Je vérifie également que le client est rattaché au bon compte commercial de l'entreprise.</p>

            <h4>Étape 3 : Chiffrage</h4>
            <p>Ensuite, il ne me reste plus qu'à chiffrer la demande via des devis "sauvegardés". Ces devis sont en fait des fichiers classés par famille de produits qu'il faut rechercher puis trier en fonction du besoin. Les fichiers comportent parfois des notations que nous choisissons de garder ou non dans la version finale.</p>

            <h4>Étape 4 : Export et envoi</h4>
            <p>Une fois les fichiers sauvegardés et la liste de prix établie, il ne reste plus qu'à exporter le devis au format PDF, le contrôler, puis envoyer le mail au client avec les documentations produites si nécessaire.</p>

            <h3> Compétences développées</h3>
            <ul>
                <li>Connaissance approfondie de la gamme produits Lacroix Sofrel</li>
                <li>Dimensionnement de solutions techniques adaptées</li>
                <li>Gestion de projet et relation client</li>
                <li>Conseil technique et orientation clients</li>
                <li>Utilisation d'outils de gestion commerciale (CRM)</li>
            </ul>

            <h3> Conclusion</h3>
            <div class="highlight-box">
                <p><strong>Bilan personnel :</strong> L'accompagnement des clients dans leurs projets fait partie intégrante des missions d'un technicien d'études techniques au sein de Lacroix Sofrel. L'entreprise prend à cœur de faciliter l'accès aux nouvelles technologies à ses clients et est reconnue dans le domaine pour sa réactivité face aux demandes et sa capacité à s'adapter au marché.</p>
                <p>Chiffrer les projets des clients me permet de mieux comprendre la mise en application des nombreux produits de l'entreprise et d'ajouter des compétences sur la gestion de projet dans mon expérience. L'accompagnement dans les projets des clients demande de la patience, d'une bonne connaissance de la gamme produit, ce qui éveille beaucoup de curiosité et savoir faire preuve de pédagogie envers les clients afin de les aider à comprendre et à s'orienter vers l'offre la mieux adaptée à leurs besoins.</p>
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
            <p>Alors que l'annonce de l'arrêt de la 2G et de la 3G a eu lieu en 2022-2023 lors du Mobile World Congress par les opérateurs réseaux d'ici 2030, l'entreprise Lacroix Sofrel a depuis 2020 lancé la gamme de RTU S4 prévue pour le remplacement de l'ancienne gamme S500 qui fonctionnait sur ces réseaux.</p>

            <h3> Problématique</h3>
            <p>Dans le cadre de cet arrêt, une problématique a fait surface : <strong>Comment faire lorsque les stations existent depuis des années et que les programmes comportent des centaines de variables qui ont été accumulées sur des sites nécessitant une continuité de service importante ?</strong></p>
            
            <p>Pour les clients de l'entreprise, cela pouvait également être l'occasion d'investir dans le matériel de la concurrence. Pour répondre à ces problématiques, l'entreprise a mis en place :</p>
            <ul>
                <li>Un système de reprise de l'ancienne gamme</li>
                <li>Un outil de migration permettant aux clients d'importer la majeure partie de leurs configurations S500 dans le nouveau matériel S4</li>
            </ul>

            <h3> Mission : Création du tutoriel</h3>
            <p>Une fois le programme créé et fonctionnel, il fallait maintenant expliquer aux clients le fonctionnement de cet outil et faire comprendre qu'il était là pour les aider à configurer rapidement leurs nouveaux RTU, mais qu'il ne ferait pas la migration complète du programme.</p>
            <p>Il m'a donc été confié comme mission de créer un tutoriel vidéo qui permettrait aux clients de comprendre l'objectif de cet outil et d'apprendre à l'utiliser.</p>

            <h3> Cahier des charges</h3>
            <ul>
                <li>Avoir une diction claire et rythmée</li>
                <li>Durée maximum du tutoriel : 10 minutes (pas de minimum)</li>
                <li>Présenter seulement les points essentiels pour une utilisation standard de l'outil</li>
                <li>Avoir une image nette et une bonne qualité de son</li>
                <li>Préciser qu'il existe une documentation détaillée de l'outil pour une utilisation plus avancée</li>
                <li>Montage fluide et dynamique</li>
                <li>Délai : 3 semaines</li>
            </ul>

            <h3> Étapes pour la migration de la configuration</h3>
            <ol>
                <li><strong>Ouvrir la config dans Softools</strong> (Logiciel de configuration S500)</li>
                <li><strong>Vérifier la version de la config</strong> : V6.30 minimum</li>
                <li><strong>Attention :</strong> seul le LACBUS peut être converti</li>
                <li><strong>Clic droit :</strong> exporter le fichier et enregistrer</li>
                <li><strong>Aller dans S4 Tools</strong> : nouvelle station (Logiciel de configuration S4)</li>
                <li><strong>Créer une nouvelle station :</strong> configurer la communication avec son S4 puis clic droit → importer le fichier Softools</li>
                <li><strong>Télécharger le rapport de conversion :</strong> en prendre compte (résoudre les différentes erreurs)</li>
                <li><strong>Enregistrer régulièrement la config</strong></li>
            </ol>

            <h3> Réalisation et difficultés</h3>
            <p>Ce projet a été une expérience originale. C'était la première fois que je m'enregistrais pour publier une vidéo destinée au public. Au début, j'avoue avoir ressenti un peu de stress, mais très vite, je me suis pris au jeu, et la réalisation de ce tutoriel m'a beaucoup plu.</p>

            <h4>Défi de la diction</h4>
            <p>La principale difficulté que je n'avais pas anticipée a été la diction. Au départ, je pensais enregistrer toute la bande-son d'un seul trait. Mais comme le tutoriel durait environ huit minutes, il n'était pas simple de filmer les images tout en récitant mon texte.</p>
            <p><strong>Solution adoptée :</strong> Après une dizaine de prises infructueuses, j'ai finalement opté pour un enregistrement en deux parties de quatre minutes chacune. Ce choix m'a grandement facilité la tâche et m'a permis d'obtenir un résultat plus clair et fluide.</p>

            <h3> Conclusion</h3>
            <div class="highlight-box">
                <p><strong>Bilan personnel :</strong> J'ai apprécié non seulement le fait d'apprendre à utiliser un outil tout juste finalisé, mais aussi celui de devoir en expliquer le fonctionnement de façon claire et synthétique, en mettant en avant ses points forts et ses points faibles. Mon objectif était de permettre au spectateur de bien comprendre son rôle, sans risquer de le tromper.</p>
                <p>Cette expérience m'a permis de développer mes compétences en pédagogie et communication, essentielles pour un technicien d'études.</p>
            </div>
        `
    },

    moxa: {
        title: "Essais Communication Série Moxa-Radios",
        duration: "1 mois",
        context: "R&D - Faisabilité technique",
        team: "Collaboration avec le parcours client",
        technologies: ["Moxa MB3180", "Moxa NPort5110A", "Radios Kenwood NX-3820", "LACBUS", "RS232", "S500", "PCWin2"],
        content: `
            <h3> Contexte de la mission</h3>
            <p>Pour donner suite aux besoins exprimés par nos clients, nous avons lancé une étude visant à évaluer la possibilité d'établir une communication série RS232 entre un S4 et un superviseur (PCWIN2, LX SCADA...), en passant par des radios et en utilisant le protocole LACBUS PL.</p>
            
            <p><strong>Objectif :</strong> Vérifier la faisabilité technique et économique de cette solution, déjà expérimentée avec succès par certains clients sur l'ancienne gamme S500, qui intègre nativement le protocole LACBUS sur son port série.</p>
            
            <p>Si les résultats sont positifs, l'équipe R&D appliquera cette même approche à la nouvelle gamme S4.</p>

            <h3> Préparation des tests</h3>
            <p>Mise en place d'une communication série entre un PCWin2, un S500, et deux radios Kenwood NX-3820 via un convertisseur Moxa.</p>
            <p><strong>Objectif technique :</strong> Interroger un ou plusieurs automates via des trames Modbus (LACBUS RTU), transmises par liaison radio RS-232.</p>

            <h3> Phase 1 : Tests Moxa NPort 5110A</h3>
            <h4>Problèmes rencontrés</h4>
            <p>Lors des premiers essais, il n'y avait pratiquement aucun échange de trames. Après consultation approfondie de la documentation du NPort 5110A, nous avons constaté que cet appareil fonctionne comme un serveur et ne gère pas réellement le transfert de trames. Il se contente d'un transfert transparent des octets du port série, ce qui le rend moins fiable et moins précis pour ce type de communication.</p>

            <h4>Solution</h4>
            <p>Après des recherches complémentaires sur le site de Moxa, menées avec mes collègues du parcours client, nous avons identifié un autre convertisseur susceptible de répondre à nos besoins : <strong>le Moxa MB3180</strong>. Le NPort 5110A a donc été retourné et remplacé par ce nouveau modèle.</p>

            <h3> Phase 2 : Tests Moxa MB3180</h3>
            
            <h4>Test A - Liaison directe RS232 (sans radio)</h4>
            <ul>
                <li> Fonctionnement correct</li>
                <li> Test réalisé avec et sans contrôle de flux (CTS/RTS)</li>
            </ul>

            <h4>Test B - Avec deux radios Kenwood et CTS/RTS actif</h4>
            <ul>
                <li> Transmission correctement initiée depuis le PC via le Moxa</li>
                <li> Le S500 reçoit la trame et répond correctement</li>
                <li> <strong>Problème :</strong> la radio côté PC reçoit bien, mais le message n'arrive pas au Moxa → trame absente ou incomplète côté PC</li>
                <li> <strong>Observation :</strong> le CTS/RTS ne fonctionne pas avec les radios. En shuntant manuellement le CTS côté automate et côté Moxa, la communication passe</li>
            </ul>

            <h4>Test C - Avec CTS/RTS shunté</h4>
            <ul>
                <li> Transmission correctement initiée</li>
                <li> Le S500 reçoit et répond correctement</li>
                <li> <strong>Problème :</strong> la trame reçue par PCWin2 semble tronquée. Les trames longues ne passent pas</li>
                <li> <strong>Hypothèse :</strong> l'ajout des deux radios augmente le temps de traitement et dépasse un seuil critique</li>
            </ul>

            <h3> Optimisation des réglages des radios</h3>
            <p>Passage en mode <strong>RTS Toggle</strong> au lieu de CTS/RTS standard (possibilité de shunter ce mode pour ajuster les délais d'attente).</p>

            <h4>Paramètres testés</h4>
            <ul>
                <li>RTS On Delay / RTS Off Delay</li>
                <li>Inter-frame delay</li>
                <li>Response timeout</li>
            </ul>

            <h4>Résultats après ajustement </h4>
            <ul>
                <li><strong>Inter-frame delay :</strong> 500 ms</li>
                <li><strong>Response timeout :</strong> 4000 ms</li>
                <li><strong>RTS Off Delay :</strong> 100 ms (limite minimale imposée par le Moxa)</li>
            </ul>
            <p> Après ajustement des paramètres, les trames longues sont correctement transmises et reçues. <strong>Les échanges sont fonctionnels.</strong></p>

            <h3> Test de charge - 4 sockets TCP en parallèle</h3>
            <p><strong> Objectif :</strong> Évaluer les limites du Moxa</p>
            <p>Le superviseur envoie des requêtes vers 4 automates "théoriques" (1 réel connecté).</p>
            <p> <strong> Résultat :</strong> Comportement incohérent du Moxa MB3180 (confusion de trames, absence de réponse)</p>

            <h3> Problème de stabilité au redémarrage</h3>
            <h4>Observation (21/05/2025)</h4>
            <ul>
                <li>Aucun échange entre PCWIN2 et S500 sans raison apparente</li>
                <li>La trame reçue n'est pas reconnue : les derniers octets deviennent les premiers</li>
                <li><strong>Cause identifiée :</strong> La radio conserve un tampon résiduel en sortie et réinjecte les derniers octets en premier lors de la réponse suivante → Le Moxa reçoit alors une trame "cyclée"</li>
            </ul>

            <h4>Solution</h4>
            <p>Après redémarrage des radios, la communication redevient fonctionnelle.</p>
            <p><strong>Hypothèse :</strong> Saturation du buffer série dans la radio Kenwood ou problème temporaire de synchronisation série.</p>

            <h3> Tableau récapitulatif des tests</h3>
            <div class="highlight-box">
                <h4>Résultats finaux</h4>
                <ul>
                    <li> Communication série RS232 via radios : <strong>FONCTIONNELLE</strong></li>
                    <li> Trames courtes et longues : <strong>VALIDÉES</strong></li>
                    <li> Limitations identifiées : nécessite redémarrage radio en cas de saturation buffer</li>
                    <li> Multi-socket : comportement instable avec le Moxa MB3180</li>
                </ul>
            </div>

            <h3> Conclusion technique</h3>
            <p>Les tests ont démontré la faisabilité technique d'une communication série fiable entre un superviseur et des RTU via liaison radio, à condition d'optimiser correctement les paramètres de délais et de contrôle de flux.</p>
            
            <p><strong>Recommandations pour déploiement :</strong></p>
            <ul>
                <li>Utiliser le Moxa MB3180 (et non le NPort 5110A)</li>
                <li>Configurer en mode RTS Toggle</li>
                <li>Appliquer les paramètres optimisés (Inter-frame delay: 500ms, Response timeout: 4000ms)</li>
                <li>Prévoir une procédure de redémarrage des radios en cas de comportement anormal</li>
                <li>Éviter les configurations multi-socket pour garantir la stabilité</li>
            </ul>

            <div class="highlight-box">
                <p><strong>Bilan personnel :</strong> Ce projet de R&D m'a permis de développer mes compétences en troubleshooting technique, en analyse de protocoles de communication série, et en résolution de problèmes complexes. J'ai particulièrement apprécié l'aspect méthodique des tests et la documentation rigoureuse des résultats, essentiels pour permettre à l'équipe R&D de poursuivre le développement sur la gamme S4.</p>
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
    if (e.key === 'Escape') {
        closeProject();
    }
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
                setTimeout(() => {
                    card.style.animation = 'fadeInUp 0.6s ease';
                }, 10);
            } else {
                const categories = card.getAttribute('data-category');
                if (categories.includes(filter)) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.animation = 'fadeInUp 0.6s ease';
                    }, 10);
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
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});


const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});


window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});


function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}


console.log('%cSi vous avez des questions ou suggestions, n\'hésitez pas à me contacter !', 'font-size: 12px; color: #94a3b8;');
console.log('%c\n Projets disponibles:', 'font-size: 16px; font-weight: bold; color: #6366f1;');
console.log('%c- Démo HVAC (hvac)', 'color: #818cf8;');
console.log('%c- Démo Smart Grid (smartgrid)', 'color: #818cf8;');
console.log('%c- Méthodes de Chiffrage (chiffrage)', 'color: #818cf8;');
console.log('%c- Tutoriel Migration (migration)', 'color: #818cf8;');
console.log('%c- Communication Série Moxa (moxa)', 'color: #818cf8;');
