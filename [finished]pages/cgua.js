/**
 * INFORMATIONS:
 * 
 * - Les CGUA (informations) sont stockées dans un tableau d'objets.
 * - Chaque objet représente une version des CGUA.
 * - Les objets sont rangés dans l'ordre chronologique, du plus ancien au plus récent.
 * - Chaque objet doit contenir un seul article de type "text" pour la présentation.
 * - Pour mettre à jour les CGUA, il suffit d'ajouter un nouvel objet à la fin du tableau.
 *
 * Structure du tableau 'informations':
 * 
 * informations: [
 *   {
 *     id: number,              // Identifiant unique de la version des CGUA
 *     name: string,            // Nom ou date de la version des CGUA (ex: "CGUA en date du 01/01/2024")
 *     selected: boolean,       // Une seule version selectionnée (true) à la fois, la plus récente
 *     articles: [              // Tableau d'articles associés à cette version
 *       {
 *         id: number,          // Identifiant unique de l'article
 *         name: string,        // Titre ou nom de l'article
 *         content: string,     // Contenu textuel de l'article
 *         type: string,        // Type de l'article ("text" pour l'introduction (1er élément), "article" pour les autres contenus)
 *       }, 
 *       {...},                 // Autre article
 *       {...}
 *     ]
 *   },
 *   {...}                      // Autre version des CGUA
 * ]
 */

const informations = [
    {
        id: 1,
        name: "CGUA en date du 16/10/2023",
        selected: true,
        articles: [
            {
                id: 1,
                name: "",
                content: "La société NOSOLI&nbsp;72, qui exerce son activité sous le nom commercial Chapitre.com, société par actions simplifiée au capital de 10&nbsp;000 euros, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 919&nbsp;977&nbsp;801 dont le siège social est situé 60 rue François 1er, 75008 Paris (ci-après <b>«&nbsp;Chapitre&nbsp;»</b>).",
                type: "text",
            },
            {
                id: 2,
                name: "Article 1 – Champ d’application et opposabilité",
                content: `
                <p>Les présentes conditions générales d’utilisation et d’achat (ci-après  les «&nbsp;<b>CGUA</b>&nbsp;») régissent l’ensemble des Reprises conclues entre Chapitre et un particulier (ci-après «&nbsp;le <b>Vendeur</b>&nbsp;»), client de la société DECITRE et/ou LE FURET DU NORD (ci-après le «&nbsp;<b>Partenaire</b>&nbsp;»), via la présente application Second Chapitre (ci-après «&nbsp;l’Application&nbsp;»), souhaitant revendre ses livres d’occasion et les déposer au sein du réseau du Partenaire, à l’exclusion de toutes autres conditions notamment celles en vigueur pour les ventes effectuées au sein des établissements du Partenaire ou sur les sites internet du Partenaire.</p>

                <p>Les présentes CGUA ont pour objet :  
                    <ul><li>D’une part, d’informer toute personne sur les conditions et modalités dans lesquelles Chapitre propose au Vendeur une offre de reprise de livres d’occasion (ci-après «&nbsp;<b>l’Offre d’achat</b>&nbsp;»).</li>
                    <li>D’autre part, de définir les droits et obligations des parties dans le cadre de la Reprise de produits d’occasion.</li></ul></p>

                <p>Les présentes CGUA ne s’appliquent pas :
                    <ul><li>à la reprise de produits autres que des livres ;</li>
                    <li>à la reprise effectuée directement en établissement du Partenaire via le site internet Seconde Lecture, laquelle est soumise à ses propres Conditions Générales d’Utilisation et d’Achat.</li>
                    <li>aux ventes effectuées au sein des établissements du Partenaire de Chapitre, lesquelles sont régies par leurs propres conditions générales de vente ;</li>
                    <li>aux ventes conclues avec les professionnels, lesquelles sont soumises à leurs propres conditions générales.</li></ul></p>

                <p>L’Application donne la possibilité au Vendeur de faire une estimation du montant de reprise de ces livres sous certaines conditions et de les ramener dans un point de vente du Partenaire afin de récupérer un bon d’achat afférent à sa reprise valable dans le point de vente du Partenaire (ci-après le «&nbsp;<b>Bon d’achat</b>&nbsp;»). </p>

                <p>Chapitre et le Partenaire se réservent la possibilité de modifier à tout moment les CGUA. Néanmoins, seules seront applicables à une Reprise les CGUA acceptées par le Vendeur le jour de cette Reprise.</p>

                <p>Le Vendeur est invité à prendre connaissance régulièrement des CGUA afin de consulter les changements éventuels effectués. Pour ce faire, les CGUA seront également accessible dans l’onglet «&nbsp;Menu&nbsp;» et «&nbsp;CGUA&nbsp;».</p>

                <p>Chapitre rappelle au Vendeur que la vente par des particuliers est encadrée par les dispositions générales du Code de commerce, du Code général des impôts et du Code du travail. Dans le cadre de son service d’achat d’articles d’occasion, Chapitre pourra refuser toute vente dès lors que l'utilisation de ce service présentera un caractère assimilable à une activité commerciale (achat pour la revente, dans un but lucratif, de biens).</p>

                <p>Chapitre rappelle également que, conformément à l’article 5 du décret n°2021-628 du 20 mai 2021 relatif au «&nbsp;pass Culture&nbsp;», la revente des biens ou services acquis ou réservés grâce au «&nbsp;pass Culture&nbsp;» est strictement interdite (<a href="https://pass.culture.fr/cgu/" target=_blank>https://pass.culture.fr/cgu/</a>).</p>
                `,
                type: "article",
            },
            {
                id: 3,
                name: "Article 2 – Acceptation des CGUA",
                content: `
                <p>Le fait pour tout Vendeur de tester l’éligibilité à la Reprise de ses livres sur l’Application et/ou d’accepter l’Offre d’achat emporte l’acceptation pleine et entière des présentes CGUA dont le Vendeur reconnaît explicitement avoir pris connaissance préalablement à l’acceptation de l’Offre d’achat.</p>

                <p>Le fait pour le Vendeur de cocher la case «&nbsp;<i>En cochant cette case, j’accepte et je reconnais avoir pris connaissance des Conditions Générales d’Utilisation et d’Achat.</i>&nbsp;» signifie qu’il a pris connaissance et a accepté les présentes CGUA. A défaut de cocher la case prévue à cet effet, le Vendeur ne pourra pas valider l’Offre d’achat.</p>

                <p>Le Vendeur déclare être une personne physique non professionnelle majeure et avoir la pleine capacité juridique, lui permettant de s'engager au titre des CGUA. </p>

                <p>L’acceptation des CGUA et de l’Offre d’achat constitue la reprise effectuée par le Vendeur donnant droit à la contrepartie convenu, sous réserve de la remise des livres conformément aux critères définis aux présentes (ci-après la «&nbsp;<b>Reprise</b>&nbsp;»).</p>

                <p>Un récapitulatif des informations de votre simulation de reprise avec votre bon de reprise et les Conditions Générales d’Utilisation et d’Achat, vous sera communiqué en format PDF via l'e-mail de transmission de votre bon de reprise.<br>
                Le récapitulatif pourra également se retrouver dans l’onglet «&nbsp;Reprises&nbsp;» avec l’historique de vos Reprises.<br>
                En acceptant les présentes CGUA, vous acceptez que le montant de la Reprise soit mis à votre disposition via un bon d’achat dématérialisé valable dans le point de vente que vous avez choisi pour le dépôt de la Reprise.</p>

                <p>Sauf preuve contraire, les données enregistrées par l’Application lors de la transaction, conformément aux dispositions de l’article 3 des présentes CGUA, constitueront la preuve de l’ensemble des opérations passées auprès de Chapitre, et notamment de l’acceptation des CGUA.</p>
                `,
                type: "article",
            },
            {
                id: 4,
                name: "Article 3 – Accès et identification",
                content: `
                <p>L’Application a pour fonction d’assister le Vendeur dans le processus de Reprise de ses livres.<br>
                L’accès à l’Application est totalement gratuit. Tous les frais supportés par le Vendeur pour accéder à l’Application (matériel informatique, connexion internet, etc…) sont à sa charge.</p>

                <p>L’ensemble des informations ainsi collectées sont traité par Chapitre et le Partenaire via l’Application conformément aux dispositions de l’article 7 des présentes CGUA. <br>
                Afin de justifier de sa capacité à utiliser l’Application, le Vendeur devra remplir les champs requis figurant dans l’onglet «&nbsp;Profil&nbsp;» et les maintenir à jour dans l’onglet «&nbsp;Profil > Modifier mon profil&nbsp;», et notamment :
                    <ul><li>Le type de document permettant d’attester son identité : carte d’identité, passeport, permis de conduire, carte de séjour ;
                    <li>Le numéro du document choisi ;</li>
                    <li>Le nom de l’autorité ayant délivré le document ;</li>
                    <li>La date de délivrance du document ;</li>
                    <li>Sa date de naissance ;</li>
                    <li>Son nom ;</li>
                    <li>Son prénom ;</li>
                    <li>Son adresse postale ;</li>
                    <li>Son adresse e-mail.</li></ul></p>

                <p>En cliquant sur la case «&nbsp;<i>J’atteste sur l’honneur la véracité de ces informations</i>&nbsp;» puis sur l’icône «&nbsp;<i>Valider</i>&nbsp;», le Vendeur certifie être majeur au jour de l’Offre d’achat et certifie la véracité des informations fournies sur son compte.</p>

                <p>Aucune Reprise de livre ne pourra être finalisé si l’une des informations mentionnées ci-dessus est manquante. Le Vendeur est responsable des informations transmises et s’engage à ne transmettre que des informations exactes. Chapitre ne pourra être tenue responsable dans le cas où le Vendeur aurait indiqué des informations inexactes ou erronées. </p>

                <p>Ces informations pourront faire l’objet d’une vérification lors du dépôt des livres en point de vente du Partenaire par un de ses opérateurs. L’opérateur pourra être amené à corriger les informations du Vendeur dans son Profil en cas d’erreur constaté.</p>

                <p>Conformément aux articles R.321-1 et suivants du Code pénal, le Vendeur autorise Chapitre à inscrire sur son registre déclaré en préfecture, outre la description des articles vendus, ses noms, prénoms, qualité et domicile ainsi que la nature, le numéro et la date de délivrance de la pièce d'identité produite avec l'indication de l'autorité qui l'a établie.</p>
                `,
                type: "article",
            },
            {
                id: 5,
                name: "Article 4 – Offre d’achat",
                content: `
                <p>L’Application proposée est une application permettant au Vendeur, client du Partenaire :

                <ul><li>d’entrer le code-barres des livres qu’ils souhaitent revendre,</li>
                <li>de les préenregistrer,</li>
                <li>d’obtenir une estimation de leur valeur,</li>
                <li>de procéder au dépôt des livres dans un point de vente du Partenaire.</li></ul></p>

                <p>L’Application permet une traçabilité des livres collectés. </p>

                <p>Il est précisé au Vendeur que l’Application plafonne le nombre d’évaluation de la valeur des livres à 150 par jour.</p>

                <p>En contrepartie du dépôt en point de vente du Partenaire, sous réserve des conditions définis à l’article 4.4 ci-dessous, le Vendeur pourra bénéficier d’un Bon d’achat défini à l’article 5 ci-dessous.<br>
                Le Vendeur reconnaît expressément que toute Reprise des livres déposés en point de vente du Partenaire est définitive. Une fois les livres déposés en point de vente du Partenaire, ils ne pourront plus être récupérés.</p>

                <h5>4.1 Conditions relatives aux Livres</h5>

                <p>Les livres proposés à la Reprise doivent impérativement correspondre aux critères de reprise de Chapitre mis à disposition du Vendeur et consultables dans l’Application dans l’onglet «&nbsp;Menu&nbsp;» ou au moment de l'identification du code-barres des livres.</p>

                <p>Les Offres d’achat ne sont valables que pour les livres respectant les critères de qualité établis par Chapitre, qui n’acceptera que les livres disposant d’un numéro ISBN présenté sous la forme d’un code barre et en bon état général. <br>
                Les livres doivent en conséquence ne présenter aucun ajout, enlèvement ou modification extérieur ou défaut apparent. <br>
                Le livre ne doit pas comporter de mentions manuscrites, des mots raturés, entourés, soulignés, ou des passages surlignés.</p>

                <p>Il est également précisé que les articles promotionnels impropres à la vente ne peuvent être repris ; de même que les livres dépourvus de code-barres (notamment ISBN ou EAN).<br>
                Le Vendeur ne pourra pas proposer plusieurs exemplaires d’un même livre dans une même vente.</p>

                <h5>4.2 Estimation de l’Offre de reprise</h5>

                <p>Le processus d’estimation et de Reprise est le suivant :
                <ul>
                    <li>Le Vendeur prend d’abord connaissance sur l’Application du processus à suivre pour la Reprise de ses livres en vue d’obtenir un Bon d’achat ;</li>
                    <li>Les CGUA de l’Application et les critères de reprise sont consultables dans l’onglet «&nbsp;Menu&nbsp;».</li>
                    <li>Le Vendeur procède ensuite à l’estimation de la valeur de Reprise de ses livres en entrant le code-barres des livres ou en les scannant via l’outil appareil photo ;</li>
                    <li>Le Vendeur peut consulter les critères de reprise des livres, ajouter de nouveaux livres ou en supprimer avant d’accepter ou de refuser l’estimation de la valeur totale de Reprise des livres dont il souhaite se séparer ;</li>
                    <li>En cas d’acceptation de l’estimation de la valeur de Reprise des livres, le Vendeur sera ensuite amené à se connecter à son compte fidélité chez le Partenaire ou en cas de première connexion à créer son compte fidélité chez le Partenaire de son choix en renseignant ses informations personnelles.</li>
                    <li>Au moment de valider ses informations personnelles, il reconnait avoir pris connaissance et accepter les CGUA de l’Application, afin de recevoir par email un récapitulatif de son estimation avec le code-barres pour sa Reprise ;</li>
                    <li>Le Vendeur disposera d’un délai de 7 (sept) jours à compter de la réception du récapitulatif de son estimation, pour déposer ses livres dans le point de vente du Partenaire de son choix et référencé dans l’Application afin de recevoir le cas échéant, son Bon d’achat ; </li>
                    <li>Si le dépôt n’a pas eu lieu dans le délai de 7 (sept) jours, l’Offre de reprise ne sera plus valable et il sera nécessaire de refaire un nouveau panier de Reprise ;</li>
                    <li>Lors du dépôt de ses livres, le Vendeur devra emballer ses livres sous forme de colis et présenter le code-barres de reprise présent dans l’application ou par mail et éventuellement une pièce d’identité valide, de préférence la même que celle qu’il aura renseigné dans son compte personnel.</li></ul></p>

                <p>Il est précisé que certains livres peuvent ne pas être éligibles à une reprise, soit en raison de leur absence dans la base de données, en raison d’un stock déjà trop élevé ou ne répondant pas aux catégories de livres reprises mentionnées dans les critères de reprise.</p>

                <p>Le bon de reprise pour procéder au dépôt des livres en point de vente du Partenaire est valable pour une durée de 7 jours calendaires. Passé ce délai, l’Offre de reprise ne sera plus valable et le Vendeur devra recommencer la préparation de son panier de Reprise. Un compteur du délai restant sera visible par le Vendeur dans l’Application.</p>

                <p>Chapitre précise que les prix proposés pour le rachat des livres sont valables uniquement au moment de leur estimation et pendant 30 (trente) minutes. Les prix d’achat des livres peuvent évoluer dans le temps.<br>
                Au-delà de 30 minutes, le panier de Reprise sera remis à zéro et le Vendeur devra recommencer son évaluation.<br>
                En utilisant l’Application, le Vendeur reconnaît agir dans un but privé, et ne pas avoir un statut de vendeur professionnel. A ce titre, la Reprise des livres ne donnera pas lieu au paiement de la TVA. </p>

                <h5>4.3 Réalisation définitive de la Reprise </h5>

                <p>Une fois l’estimation de Reprise des livres terminée, le Vendeur devra se présenter dans un point de vente du réseau du Partenaire pour déposer ses livres sous forme de colis.</p>

                <p>Il est précisé au Vendeur qu’une panier de Reprise doit correspondre à un colis.<br>
                Si le Vendeur souhaite déposer deux colis, il devra effectuer deux paniers de Reprise.</p>

                <p>Pour le dépôt des livres en point de vente, ceux-ci devront être emballés sous format de colis. Le colis doit être suffisamment bien emballé :
                <ul><li>dans un emballage rigide ;</li>
                <li>avoir un poids qui lui permet d’être transportable sans assistance matérielle ;</li>
                <li>dans un emballage de taille suffisante : livres correctement placés dans l’emballage pour optimiser la place ;</li>
                <li>dans un emballage qui protège de l’humidité et de la poussière, ni trou, qui ne se déchire pas ;</li>
                <li>dans un emballage correctement fermé : fermeture par un large ruban adhésif solide.</li></ul></p>

                <p>Les anciennes étiquettes présentes sur le colis doivent être décollées ou recouvertes pour éviter tout problème de livraison.</p>

                <p>Une fois le colis bien préparé, il pourra être déposé en point de vente du Partenaire après la réception de l’e-mail contenant le récapitulatif de la Reprise.</p>

                <p>En point de vente, pour finaliser sa Reprise, le Vendeur devra faire scanner son Bon de reprise, éventuellement faire vérifier sa pièce d’identité et déposer ses livres emballés dans un colis. <br>
                L’opérateur peut refuser la reprise si le colis n’est pas correctement emballé ou jugé en mauvais état ou en cas de non-présentation de la pièce d’identité si celle-ci est demandée. </p>

                <p>Après dépôt du colis confirmé par le Partenaire, Le Partenaire créditera un Bon d’achat au Vendeur valable dans son Point de vente. <br>
                La Reprise sera pleinement et irrévocablement conclue après la remise de vos livres au Partenaire.<br>
                Le transfert de propriété des livres auprès de Chapitre s’effectuera de plein droit dès ce moment.</p>

                <h5>4.4 Non-conformité des Livres </h5>

                <p>Les Livres déposés par les Vendeurs dans un point de vente du Partenaire doivent répondre aux critères de reprise suivants :</p>

                <p>Les livres collectés doivent être en bon état général (ce qui inclut également les 1ère et dernière de couverture ainsi que la tranche) et avoir un code ISBN lisible.</p>

                <p>Sont refusés :
                <ul>
                <li>Les livres abîmés, présentant des traces d’usure et de saleté&nbsp;:</li>
                <ul>
                    <li>Taché</li>
                    <li>Jauni</li>
                    <li>Gondolé</li>
                    <li>Ayant pris l’eau, trace d’humidité, odeur (tabac, moisissure)</li>
                    <li>Contenant des annotations</li>
                    <li>Surligné, souligné</li>
                    <li>Ayant une ou des pages arrachées, coupée, photocopiée, scotchée ou manquante</li>
                    <li>Dos arraché, rapiécé</li>
                        </ul>

                <li>Les livres sans code à barres/EAN/ISBN</li>
                <li>Les livres gratuits ou offerts</li>
                <li>Les services de presse</li>
                <li>Les livres estampillés au nom d’une bibliothèque ou d’une médiathèque, et grand livre du mois.</li>
                <li>Les livres incomplets tels que par exemple les livres jeunesses avec CD absent, pièce d’un puzzle manquante…</li>
                <li>Les ouvrages périmés, millésimés de plus de 2 ans (type routard, livres scolaires, annabac…)</li>
                <li>Les séries dépareillées ou incomplètes</li>
                </ul></p>
                `,
                type: "article",
            },
            {
                id: 6,
                name: "Article 5 – Prix et Paiement",
                content: `
                <p>Après dépôt des livres confirmé par le Partenaire, Chapitre adressera au Vendeur, par l’intermédiaire de son Partenaire, un Bon d’achat sous forme dématérialisée dont la valeur est fixée automatiquement par l’Application et les conditions de validité et d’utilisation sont définies d’un commun accord entre Chapitre et son Partenaire.</p>

                <p>Chapitre avertit expressément le Vendeur que si son adresse e-mail servant à la connexion à son espace client est erronée ou n’existe plus, Chapitre n’émettra pas de nouveau Bon d’achat.</p>

                <p>Le Bon d’achat, dont la valeur est fixée automatiquement par l’Application, est utilisable une seule fois dans la librairie dans laquelle la reprise de livres d'occasion a été effectuée, pendant 2 mois à compter de son activation, en France Métropolitaine uniquement.</p>

                <p>Le Bon d’achat sera utilisable à partir d’un minimum d’achat correspondant à la valeur du Bon d’achat.</p>

                <p>Le Bon d’achat n’est pas sécable, ni remboursable, ni revendable, ni échangeable contre des espèces.</p>

                <p>Chapitre ou le Partenaire se réserve le droit de désactiver, sans préavis et sans indemnité, tout Bon d’achat émis dans le cas où le Vendeur effectue un usage frauduleux de l’Application et/ou ne respecte pas les présentes CGUA.</p>
                `,
                type: "article",
            },
            {
                id: 7,
                name: "Article 6 – Responsabilité",
                content: `
                <h5>6.1 Responsabilité du Vendeur</h5>

                <p>Le Vendeur s’engage à respecter strictement les obligations découlant des CGUA ainsi que la réglementation en vigueur.<br>
                Le Vendeur est seul responsable de son identification et de l’utilisation de l’Application proposée.</p>

                <p>En cas de manquement ponctuel ou répété à l’une quelconque des dispositions des CGUA, Chapitre ou le Partenaire se réserve le droit de suspendre et/ou de bloquer de façon définitive le compte du Vendeur concerné.</p>

                <p>Tout livre identifié comme volé ou perdu sera remis aux autorités compétentes sans que la responsabilité de Chapitre et de son Partenaire puisse être recherchée.</p>

                <h5>6.2 Responsabilité de Chapitre et/ou de son Partenaire</h5>

                <p>La responsabilité de Chapitre et/ou de son Partenaire ne pourra être recherchée en cas de suspension de l’Application quelle qu'en soit la durée ou la cause. En effet, la responsabilité de Chapitre et/ou de son Partenaire ne saurait être engagée pour tous les inconvénients et dommages inhérents à l'utilisation d'Internet ou du réseau mobile notamment en cas d’impossibilité d’accéder temporairement à l’Application pour des opérations de maintenance technique, en cas de dysfonctionnement ou d’interruptions des réseaux de transmission, en cas d’attaques virales, intrusion illicite de l’Application par un Vendeur ou par un tiers, en cas d’utilisation anormale ou d’une exploitation illicite de l’Application par un Vendeur ou par un tiers, en cas de non-respect des présentes CGUA imputable aux Vendeurs, en cas de de retard ou d’inexécution de ses obligations lorsque la cause du retard ou de l’inexécution est liée à un cas de force majeure ou un cas étranger à Chapitre et/ou son Partenaire.</p>

                <h5>6.3 Force majeure</h5>

                <p>La responsabilité de Chapitre ne pourra pas être mise en œuvre si la non-exécution ou le retard dans l’exécution de l’une de ses obligations décrites dans les présentes CGUA découle d’un cas de force majeure.<br>
                Il y a force majeure en matière contractuelle lorsqu’un évènement échappant au contrôle d’une Partie, qui ne pouvait être raisonnablement prévu lors de la conclusion du contrat et dont les effets ne peuvent être évités par des mesures appropriées, empêche l’exécution de son obligation.<br>
                Si l’empêchement est temporaire, l’exécution de l’obligation est suspendue à moins que le retard qui en résulterait ne justifie la résolution du contrat. Si l’empêchement est définitif, le contrat est résolu de plein droit et les Parties sont libérées de leurs obligations dans les conditions prévues aux articles 1351 et 1351-1 du Code civil.<br>
                En cas de survenance d’un des évènements susvisés, Chapitre s’efforcera d’informer le Vendeur dès que possible.</p>
                `,
                type: "article",
            },
            {
                id: 8,
                name: "Article 7 – Traitement des données à caractère personnel",
                content: `
                <p>Conformément au Règlement général sur la protection des données ainsi qu’à la loi n° 78-17 du 06 Janvier 1978 dite Informatique et Libertés, les données personnelles du Vendeur sont traitées conjointement par Chapitre et le Partenaire en tant que responsables de traitements conjoints.</p>

                <p>Dans le cadre de l’exploitation de l’Application, les informations que le Vendeur communique à Chapitre sont traitées pour gérer le rachat-revente des livres d’occasion pour les finalités suivantes :
                    <ul><li>Gérer le préenregistrement de la reprise des livres du Vendeur et pour effectuer la transaction. Ce traitement est réalisé sur la base légale du contrat.</li>
                    <li>Compléter le registre des transactions (registre de police) conformément aux obligations relevant des articles R321-1 à R321-12 du Code pénal dont sont tenus les professionnels qui vendent ou échangent des objets mobiliers (usagés, d’occasion) à des personnes qui ne les fabriquent pas ou n’en font pas commerce. Ce traitement est réalisé sur la base légale d’une obligation légale.</li></ul></p>

                <p>Les données à caractère personnel que le Vendeur communiquera permettent d’honorer les obligations de Chapitre et du Partenaire, de communiquer avec le Vendeur concernant ses Reprises. Ces traitements de données ont ainsi pour fondement la base légale du contrat.</p>

                <p>Les données collectées sont destinées aux services habilités de Chapitre et du Partenaire ainsi qu’aux sociétés du Groupe NOSOLI et à leurs sous-traitants.</p>

                <p>Il s’agit des données mentionnées à l’article 3 des présentes.<br>
                La collecte de l’adresse électronique du Vendeur est destinée à lui envoyer par voie électronique le récapitulatif de son bon de reprise avec la cotation que le Vendeur aura validée, ainsi que la confirmation de réception de sa Reprise lors du dépôt.</p>

                <p>Elles ne seront pas réutilisées à d’autres fins que celles du rachat-revente initié.<br>
                Le Vendeur est informé que pour répondre à l’obligation légale de tenue du registre de police pour le compte de Chapitre, un justificatif d’identité lui sera demandé en point de vente. <br>
                Aussi, le formulaire d’enregistrement sur le Site devra être complété avec les données de la personne se présentant en point de vente.</p>

                <p>Après l’estimation de sa Reprise en ligne et l’envoi de son bon de reprise, si le Vendeur ne dépose pas ses livres en point de vente, les données servant exclusivement à la Reprise de livres seront supprimées automatiquement une heure après la durée de validité du bon de reprise qui est de sept (7) jours. <br>
                Si la Reprise en point de vente a été effectuée, les données collectées aux fins de tenue du registre de police seront conservées pour une durée de 10 ans à partir de la dernière Reprise.<br>
                Concernant les données relatives à son compte client fidélité, ces données seront conservées en base active pour une durée de 3 ans à compter de sa dernière transaction (achat ou reprise en point de vente du Partenaire).<br>
                Le Vendeur est informé que dans le cadre du traitement de ses données, celles-ci ne seront pas transférées hors de l’Union-Européenne. Chapitre et son Partenaire mettent tout en œuvre pour garantir la sécurité des données du Vendeur.</p>

                <p>Conformément à la réglementation, le Vendeur dispose d’un droit d’accès, de rectification, de mise à jour, et de limitation de ses données. Le Vendeur peut adresser sa demande par courrier électronique à l’adresse : dpo@nosoli.fr ou par courrier postal FD SERVICES, Délégué à la protection des données, 191 rue des Cinq Voies - 59200 Tourcoing. </p>

                <p>Le Vendeur dispose également du droit d’introduire une réclamation auprès de la CNIL.<br>
                Pour plus d’informations sur la signification des droits et sur l’introduction d’une réclamation, veuillez consulter le site de la CNIL : https://www.cnil.fr/.</p>

                <p>Le Vendeur a également la possibilité de s’inscrire gratuitement sur une liste d’opposition au démarchage téléphonique BLOCTEL afin de ne plus être démarché téléphoniquement par un professionnel avec lequel il n’a pas de relation contractuelle en cours, conformément à la loi n°2014-344 du 17 mars 2014 relative à la consommation, sur le Site : https://www.bloctel.gouv.fr/.</p>
                `,
                type: "article",
            },
            {
                id: 9,
                name: "Article 8 – Assistance",
                content: `
                <p>Chapitre met à la disposition des Vendeurs une assistance téléphonique au numéro suivant : 01.78.90.09.90 (numéro non surtaxé), disponible du lundi au vendredi de 9h30 à 12h30  (hors jours fériés).</p>

                <p>Toute réclamation écrite du Vendeur devra être transmise :
                <ul>
                    <li>Par courrier à :<br><br>                      
                        CHAPITRE.COM<br>
                            Service Clients<br>
                        Le Plessis<br>
                        72320 LAMNAY<br>
                    France </li></ul>
                Ou
                    <ul><li>Par courriel à : relation_client@chapitre.com</li></ul></p>
                `,
                type: "article",
            },
            {
                id: 10,
                name: "Article 9 – Propriété intellectuelle",
                content: `
                <p>Tous les éléments de l’Application, les logiciels, bases de données, textes, informations, analyses, images, photographies, graphismes, logos, sons ou toutes autres données contenues sur l’Application, y compris la technologie afférente, sont protégés par le droit d'auteur, droit des bases de données, droit des marques, et droit des dessins et modèles. </p>

                <p>Leur utilisation sans l'autorisation préalable et écrite de Chapitre ou des autres titulaires de droits est susceptible de constituer une contrefaçon et de donner lieu à des poursuites. <br>
                L’acceptation des présentes CGUA vaut reconnaissance par le Vendeur des droits de propriété intellectuelle de Chapitre et le cas échéant de son Partenaire.</p>

                <p>En utilisant l’Application, le Vendeur s'interdit de copier ou télécharger tout ou partie de son contenu, sauf autorisation préalable et expresse de Chapitre.<br>
                Sont notamment interdits : l'extraction, la réutilisation, le stockage, la reproduction, la représentation ou la conservation de parties quantitativement ou qualitativement substantielles de l’Application, sous quelque forme que ce soit, est interdite au titre des droits du producteur de bases de données, et sauf autorisation préalable écrite de Chapitre.</p>

                <p>Chapitre se réserve le droit d’interdire tout lien émanant d’un site dont le contenu lui paraitrait inapproprié, sans que cette interdiction ne soit susceptible d’engager sa responsabilité à quelque titre que ce soit.<br>
                Chapitre accorde un droit d’utilisation personnel, non-exclusif et non cessible au Vendeur l’autorisant à utiliser l’Application et les informations qu’il contient conformément aux présentes CGUA. Le droit ainsi concédé consiste en un droit de consulter en ligne les données et informations contenues sur l’Application. Ce droit d'utilisation s'entend uniquement d’un usage strictement privé. <br>
                Toute autre utilisation de ladite Application ainsi que de ses contenus est exclue du domaine du présent droit et ne pourra être effectuée sans l’autorisation préalable expresse de Chapitre.</p>
                `,
                type: "article",
            },
            {
                id: 11,
                name: "Article 10 – Non-validité partielle",
                content: `
                <p>Si une ou plusieurs stipulations des CGUA sont tenues pour non valides en application d'une loi, d'un règlement ou à la suite d'une décision définitive d'une juridiction compétente, les autres stipulations garderont toute leur force et leur portée.</p>
                `,
                type: "article",
            },
            {
                id: 12,
                name: "Article 11 – Non-renonciation",
                content: `
                <p>Le fait pour l'une des parties de ne pas se prévaloir auprès de l'autre partie d'un manquement à l'une quelconque des obligations visées au sein des présentes conditions générales d’utilisation et d’achat ne saurait être interprété pour l'avenir comme une renonciation à l'obligation en cause.</p>
                `,
                type: "article",
            },
            {
                id: 13,
                name: "Article 12 – Droit applicable",
                content: `
                <p>Les Reprises de livre sont soumises à la loi française.<br>
                L’Application, les CGUA et les Offres d’achat effectuées via l’Application et leur exécution sont régis exclusivement par la loi française. Tout litige relatif à l’interprétation ou à l’exécution des CGUA ou d’une Offre d’achat sera jugé conformément au droit français et relèvera de la compétence du tribunal du lieu de domicile du défendeur.<br>
                Elles sont rédigées en langue française. Dans le cas où elles seraient traduites en une ou plusieurs langues, seul le texte français ferait foi en cas de litige.</p>
                `,
                type: "article",
            },
            {
                id: 14,
                name: "Article 13 – Règlement des litiges",
                content: `
                <p>Dans l'hypothèse où un litige naîtrait de la présente relation contractuelle, les Parties s'engagent, avant toute action judiciaire, à rechercher une solution amiable.</p>

                <p>Pour régler un litige, le Vendeur est invité à adresser une réclamation écrite au :</p>

                <blockquote>Service Clients Chapitre.com<br>
                Le Plessis<br>
                72320 LAMNAY</blockquote>

                <p>Ou par téléphone au 01 78 90 09 90 du lundi au vendredi de 9h30 à 12h30.</p>

                <p>Chapitre s'efforcera de trouver une solution amiable et concertée avec le Partenaire pour les litiges éventuels pouvant intervenir lors de l’utilisation de l’Application. Conformément à la législation en vigueur, le Vendeur est informé qu'il a la possibilité de recourir, en cas de contestation, à une procédure de médiation conventionnelle ou à tout autre mode alternatif de règlement d'un litige.</p>

                <p>En application des articles L.612-1 et suivants du Code de la consommation, tout consommateur a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution à l'amiable du litige qui l'oppose à un professionnel. <br>
                A cet effet, le professionnel garantit au consommateur le recours effectif à un dispositif de médiation de la consommation. <br>
                Le Vendeur a donc la possibilité de s’adresser, en cas de litige en lien avec vos Reprises effectuées sur notre Application, au service de médiation FEVAD (Fédération du e-commerce et de la vente à distance) simplement et gratuitement par voie électronique en déposant votre dossier sur <a href="http://www.mediateurfevad.fr/" target="_blank">http://www.mediateurfevad.fr/</a> ou par mail : mediateurduecommerce@fevad.com. </p>

                <p>Le Vendeur peut aussi s’adresser à ce service de médiation par courrier simple (joindre votre e-mail, votre téléphone et la réclamation écrite) à :</p>

                <blockquote>Le service du Médiateur du e-commerce de la FEVAD<br>
                BP20015<br>
                75362 Paris CEDEX 8</blockquote>

                <p>Après démarche préalable écrite des consommateurs vis-à-vis du professionnel, le Service du Médiateur peut être saisi pour tout litige de consommation dont le règlement n’aurait pas abouti.</p>

                <p>Au niveau national, le Vendeur peut également formuler sa déclaration en se rendant sur le site suivant&nbsp;: <a href="https://signal.conso.gouv.fr/" target="_blank">https://signal.conso.gouv.fr/</a></p>

                <p>Au niveau européen, le Vendeur est invité à se rendre sur la plateforme de règlement en ligne des litiges suivante&nbsp;: <a href="https://ec.europa.eu/consumers/odr/" target="_blank">https://ec.europa.eu/consumers/odr/.</a><p>

                <p>A défaut d'accord amiable entre les Parties à l’issue de la médiation, le litige sera soumis aux tribunaux français ; le tribunal compétent sera celui du défendeur.</p>
                `,
                type: "article",
            },
            {
                id: 15,
                name: "Article 14 – Mentions Légales",
                content: `
                <h5>EDITEUR DE L’APPLICATION</h5>

                <p>L’Application Seconde Lecture (ci-après l’ «&nbsp;Application&nbsp;») est réalisée et éditée par la société NOSOLI 72, société par actions simplifiée au capital de 10 000€, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 919 977 801 dont le siège social est situé 60 rue François 1er, 75008 Paris</p>

                <p>Numéro de TVA intracommunautaire : FR78919977801<br>
                Numéro identifiant unique Emballage : FR298915_01OGSN<br>
                Numéro identifiant unique Papier : FR298915_03ONUX</p>

                <p>Téléphone : 01 78 90 09 90<br>
                Email : relation_client@chapitre.com</p>

                <p>Directeur de la publication du Site : Monsieur Christophe Desbonnet, Directeur Général </p>

                <p>Directrice de la rédaction : Madame Nathalie Leleu, Directrice Marketing et Animation Client </p>

                <h5>HEBERGEUR DE L’APPLICATION</h5>

                <p>Microsoft Azure</p>

                <p>Siège social :<br>
                39 quai du Président Roosevelt<br>
                92130 Issy-les-Moulineaux</p>

                <p>SIREN : 327733184 (RCS NANTERRE)</p>

                <p>ANTEMETA</p>

                <p>Siège social : <br>
                9 Chemin du Jubin <br>
                69570 Dardilly</p>

                <p>SIREN : 489288969 (RCS VERSAILLES) </p>
                `,
                type: "article",
            },
        ]
    }
];