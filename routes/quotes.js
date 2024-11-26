const express = require('express');
const router = express.Router();

// Fonction pour obtenir la citation du jour
function getQuoteOfTheDay() {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const index = seed % animeQuotes.length;
    return animeQuotes[index];
}

// Collection étendue de citations d'anime
const animeQuotes = [
    // Motivation et Persévérance
    {
        text: "Dans ce monde, où que tu ailles, il y aura toujours de la haine et de la souffrance. Mais même dans les moments les plus sombres, il y a toujours de l'espoir.",
        character: "Itachi Uchiha",
        anime: "Naruto",
        category: "motivation"
    },
    {
        text: "Si tu n'aimes pas ta destinée, n'accepte pas. Au lieu de ça, aie le courage de la changer comme tu le souhaites.",
        character: "Naruto Uzumaki",
        anime: "Naruto",
        category: "motivation"
    },
    {
        text: "Peu importe combien de fois tu tombes, l'important c'est de toujours se relever.",
        character: "Monkey D. Luffy",
        anime: "One Piece",
        category: "motivation"
    },
    {
        text: "Plus tu as de rêves, plus la vie devient belle. Alors continue de rêver !",
        character: "Luffy",
        anime: "One Piece",
        category: "motivation"
    },
    {
        text: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
        character: "Whis",
        anime: "Dragon Ball Super",
        category: "motivation"
    },

    // Sagesse et Philosophie
    {
        text: "Le pouvoir ne détermine pas qui a raison, mais qui doit être protégé.",
        character: "Lelouch Lamperouge",
        anime: "Code Geass",
        category: "philosophie"
    },
    {
        text: "La vie est comme un livre. Si tu ne tournes pas la page, tu restes bloqué sur le même chapitre.",
        character: "Erwin Smith",
        anime: "Attack on Titan",
        category: "philosophie"
    },
    {
        text: "Ce n'est pas le monde qui est cruel. C'est nous qui le rendons ainsi.",
        character: "Mikasa Ackerman",
        anime: "Attack on Titan",
        category: "philosophie"
    },
    {
        text: "La vraie question n'est pas de savoir si tu peux voir le futur, mais si tu peux le changer.",
        character: "Okabe Rintaro",
        anime: "Steins;Gate",
        category: "philosophie"
    },

    // Amitié et Relations
    {
        text: "Un ami n'est pas quelqu'un qui suit ton chemin, mais quelqu'un qui marche à tes côtés.",
        character: "Gon Freecss",
        anime: "Hunter x Hunter",
        category: "amitié"
    },
    {
        text: "Les amis ne sont pas ceux qui te disent ce que tu veux entendre, mais ceux qui te disent ce que tu dois entendre.",
        character: "Killua Zoldyck",
        anime: "Hunter x Hunter",
        category: "amitié"
    },
    {
        text: "Les liens que nous tissons sont notre vraie force.",
        character: "Natsu Dragneel",
        anime: "Fairy Tail",
        category: "amitié"
    },

    // Combat et Détermination
    {
        text: "Va au-delà de tes limites. PLUS ULTRA !",
        character: "All Might",
        anime: "My Hero Academia",
        category: "combat"
    },
    {
        text: "La seule fois où un homme devrait regarder de haut, c'est quand il aide quelqu'un à se relever.",
        character: "Roy Mustang",
        anime: "Fullmetal Alchemist",
        category: "combat"
    },
    {
        text: "Je ne perds jamais. Soit je gagne, soit j'apprends.",
        character: "Light Yagami",
        anime: "Death Note",
        category: "combat"
    },

    // Croissance Personnelle
    {
        text: "Ce n'est pas en regardant le sol que tu avanceras.",
        character: "Tanjiro Kamado",
        anime: "Demon Slayer",
        category: "développement"
    },
    {
        text: "La force ne vient pas du physique mais de la volonté indomptable.",
        character: "Saitama",
        anime: "One Punch Man",
        category: "développement"
    },
    {
        text: "Parfois, il faut perdre pour comprendre la valeur de la victoire.",
        character: "Shoyo Hinata",
        anime: "Haikyuu!!",
        category: "développement"
    },

    // Amour et Sacrifice
    {
        text: "L'amour ne se mesure pas à combien de fois tu dis 'je t'aime', mais à combien de fois tu le prouves.",
        character: "Rem",
        anime: "Re:Zero",
        category: "amour"
    },
    {
        text: "Parfois, le plus grand acte d'amour est de laisser partir.",
        character: "Violet Evergarden",
        anime: "Violet Evergarden",
        category: "amour"
    },

    // Humour et Légèreté
    {
        text: "La nourriture goûte meilleure quand tu la manges avec d'autres personnes !",
        character: "Soma Yukihira",
        anime: "Food Wars",
        category: "humour"
    },
    {
        text: "Je ne suis pas paresseux, je suis en mode économie d'énergie.",
        character: "Houtarou Oreki",
        anime: "Hyouka",
        category: "humour"
    },

    // Aventure et Découverte
    {
        text: "Le voyage est plus important que la destination.",
        character: "Edward Elric",
        anime: "Fullmetal Alchemist",
        category: "aventure"
    },
    {
        text: "Chaque jour est une nouvelle aventure !",
        character: "Ash Ketchum",
        anime: "Pokemon",
        category: "aventure"
    },

    // Science et Connaissance
    {
        text: "La science est l'art de transformer l'impossible en possible.",
        character: "Senku Ishigami",
        anime: "Dr. Stone",
        category: "science"
    },
    {
        text: "La connaissance est la seule arme qui ne s'épuise jamais.",
        character: "L Lawliet",
        anime: "Death Note",
        category: "science"
    },

    // Rêves et Ambitions
    {
        text: "Un rêve devient un objectif quand on agit pour le réaliser.",
        character: "Vegeta",
        anime: "Dragon Ball Z",
        category: "rêves"
    },
    {
        text: "N'abandonne jamais tes rêves, même si tout le monde te dit que c'est impossible.",
        character: "Midoriya Izuku",
        anime: "My Hero Academia",
        category: "rêves"
    },

    // Nouvelles citations - Motivation et Persévérance
    {
        text: "Le succès n'est pas final, l'échec n'est pas fatal. C'est le courage de continuer qui compte.",
        character: "Eren Yeager",
        anime: "Attack on Titan",
        category: "motivation",
        shareText: "Une citation inspirante de Attack on Titan 💪 #AnimeQuotes #AttackOnTitan"
    },
    {
        text: "La différence entre le possible et l'impossible réside dans la détermination.",
        character: "Might Guy",
        anime: "Naruto",
        category: "motivation",
        shareText: "La sagesse de Might Guy dans Naruto 🍥 #Naruto #AnimeQuotes"
    },

    // Nouvelles citations - Action et Combat
    {
        text: "Un véritable guerrier apprend autant de ses défaites que de ses victoires.",
        character: "Goku",
        anime: "Dragon Ball Super",
        category: "combat",
        shareText: "La sagesse de Goku 🔥 #DragonBall #AnimeQuotes"
    },
    {
        text: "La force n'est rien sans la technique.",
        character: "Yami Sukehiro",
        anime: "Black Clover",
        category: "combat",
        shareText: "Yami Sukehiro nous enseigne 🗡️ #BlackClover #AnimeQuotes"
    },

    // Nouvelles citations - Romance et Émotions
    {
        text: "L'amour est comme une fleur qui a besoin de temps pour s'épanouir.",
        character: "Shinobu Kocho",
        anime: "Demon Slayer",
        category: "amour",
        shareText: "L'amour selon Demon Slayer 🦋 #DemonSlayer #AnimeQuotes"
    },
    {
        text: "Les sentiments sincères finissent toujours par atteindre leur destination.",
        character: "Kaori Miyazono",
        anime: "Your Lie in April",
        category: "amour",
        shareText: "Les mots touchants de Your Lie in April 🎵 #YourLieInApril #AnimeQuotes"
    },

    // Nouvelles citations - Amitié
    {
        text: "Les vrais amis sont comme les étoiles, tu ne les vois pas toujours mais tu sais qu'ils sont là.",
        character: "Maka Albarn",
        anime: "Soul Eater",
        category: "amitié",
        shareText: "L'amitié dans Soul Eater ⭐ #SoulEater #AnimeQuotes"
    },
    {
        text: "L'amitié n'est pas quelque chose qu'on peut voir, mais quelque chose qu'on ressent au fond du cœur.",
        character: "Yugi Muto",
        anime: "Yu-Gi-Oh!",
        category: "amitié",
        shareText: "Yu-Gi-Oh! et le pouvoir de l'amitié 💫 #YuGiOh #AnimeQuotes"
    },

    // Nouvelles citations - Aventure
    {
        text: "La plus grande aventure est celle qui nous fait découvrir qui nous sommes vraiment.",
        character: "Meliodas",
        anime: "Seven Deadly Sins",
        category: "aventure",
        shareText: "Une aventure avec Seven Deadly Sins ⚔️ #7DS #AnimeQuotes"
    },
    {
        text: "Chaque nouveau jour est une nouvelle page de notre aventure.",
        character: "Natsu Dragneel",
        anime: "Fairy Tail",
        category: "aventure",
        shareText: "L'esprit d'aventure de Fairy Tail 🔥 #FairyTail #AnimeQuotes"
    },

    // Nouvelles citations - Sagesse
    {
        text: "La véritable sagesse vient de l'expérience, et l'expérience vient des erreurs.",
        character: "Kakashi Hatake",
        anime: "Naruto",
        category: "sagesse",
        shareText: "La sagesse de Kakashi 📚 #Naruto #AnimeQuotes"
    },
    {
        text: "Le monde n'est ni beau ni laid, il est ce que nous en faisons.",
        character: "Spike Spiegel",
        anime: "Cowboy Bebop",
        category: "sagesse",
        shareText: "La philosophie selon Spike 🚀 #CowboyBebop #AnimeQuotes"
    },

    // Nouvelles citations - Humour
    {
        text: "La vie est comme un gâteau : il faut la déguster avec le sourire !",
        character: "Anya Forger",
        anime: "Spy x Family",
        category: "humour",
        shareText: "La sagesse d'Anya 🥜 #SpyxFamily #AnimeQuotes"
    },
    {
        text: "Je ne suis pas petit, je suis économique en taille !",
        character: "Edward Elric",
        anime: "Fullmetal Alchemist",
        category: "humour",
        shareText: "Edward et sa taille 😄 #FullmetalAlchemist #AnimeQuotes"
    },

    // Nouvelles citations - Motivation et Persévérance
    {
        text: "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.",
        character: "Izuku Midoriya",
        anime: "My Hero Academia",
        category: "motivation",
        shareText: "Une leçon de motivation par Deku 💪 #MyHeroAcademia #Plus_Ultra"
    },
    {
        text: "Le talent est quelque chose que tu cultives, pas quelque chose que tu récoltes.",
        character: "Tobio Kageyama",
        anime: "Haikyuu!!",
        category: "motivation",
        shareText: "La sagesse du roi du terrain 🏐 #Haikyuu #Volleyball"
    },
    {
        text: "Même si nous suivons des chemins différents, notre détermination reste la même.",
        character: "Monkey D. Luffy",
        anime: "One Piece",
        category: "motivation",
        shareText: "La voie du Roi des Pirates 👑 #OnePiece"
    },
    {
        text: "La volonté est la clé qui ouvre toutes les portes.",
        character: "Portgas D. Ace",
        anime: "One Piece",
        category: "motivation",
        shareText: "Les flammes de la volonté 🔥 #OnePiece"
    },

    // Nouvelles citations - Sagesse et Philosophie
    {
        text: "La véritable force n'est pas dans la capacité de tout détruire, mais dans celle de tout protéger.",
        character: "Madara Uchiha",
        anime: "Naruto",
        category: "sagesse",
        shareText: "La sagesse inattendue de Madara 🍃 #Naruto"
    },
    {
        text: "Le monde n'est ni beau ni laid, il est ce que nous en faisons.",
        character: "Spike Spiegel",
        anime: "Cowboy Bebop",
        category: "sagesse",
        shareText: "La philosophie selon Spike 🚀 #CowboyBebop"
    },
    {
        text: "La justice n'est pas absolue, elle change selon le point de vue de chacun.",
        character: "Pain",
        anime: "Naruto",
        category: "sagesse",
        shareText: "La vision de Pain sur la justice 🌧️ #Naruto"
    },
    {
        text: "Le passé est une leçon, pas une sentence.",
        character: "Rurouni Kenshin",
        anime: "Kenshin le Vagabond",
        category: "sagesse",
        shareText: "Les enseignements du vagabond ⚔️ #Kenshin"
    },

    // Nouvelles citations - Combat et Détermination
    {
        text: "Dans un combat, celui qui gagne est celui qui est déterminé à gagner.",
        character: "Vegeta",
        anime: "Dragon Ball Z",
        category: "combat",
        shareText: "La fierté du prince des Saiyans 👊 #DragonBallZ"
    },
    {
        text: "La force ne vient pas du corps, elle vient de la volonté.",
        character: "Rock Lee",
        anime: "Naruto",
        category: "combat",
        shareText: "Le ninja de l'effort 💪 #Naruto"
    },
    {
        text: "Même si tu dois ramper, n'arrête jamais d'avancer.",
        character: "Zoro Roronoa",
        anime: "One Piece",
        category: "combat",
        shareText: "Le chemin du samouraï ⚔️ #OnePiece"
    },

    // Nouvelles citations - Amitié
    {
        text: "Les amis sont la famille que l'on choisit.",
        character: "Erza Scarlet",
        anime: "Fairy Tail",
        category: "amitié",
        shareText: "L'esprit de Fairy Tail ✨ #FairyTail"
    },
    {
        text: "Un ami qui comprend ton passé, croit en ton avenir et t'accepte tel que tu es.",
        character: "Naruto Uzumaki",
        anime: "Naruto",
        category: "amitié",
        shareText: "L'amitié selon Naruto 🦊 #Naruto"
    },
    {
        text: "L'amitié n'a pas besoin de mots, juste d'être là.",
        character: "Shōto Todoroki",
        anime: "My Hero Academia",
        category: "amitié",
        shareText: "La chaleur de l'amitié ❄️🔥 #MyHeroAcademia"
    },

    // Nouvelles citations - Amour
    {
        text: "L'amour est comme une fleur, il faut du temps et des soins pour qu'il s'épanouisse.",
        character: "Orihime Inoue",
        anime: "Bleach",
        category: "amour",
        shareText: "La douceur d'Orihime 🌸 #Bleach"
    },
    {
        text: "L'amour véritable ne connaît pas de limites.",
        character: "Asuna Yuuki",
        anime: "Sword Art Online",
        category: "amour",
        shareText: "L'amour dans le monde virtuel ⚔️ #SAO"
    },
    {
        text: "Parfois, les mots ne suffisent pas pour exprimer ce que le cœur ressent.",
        character: "Mitsuha Miyamizu",
        anime: "Your Name",
        category: "amour",
        shareText: "Les sentiments qui transcendent le temps 🌠 #YourName"
    },

    // Nouvelles citations - Croissance Personnelle
    {
        text: "Chaque échec est une étape vers la réussite.",
        character: "All Might",
        anime: "My Hero Academia",
        category: "développement",
        shareText: "La voie du héros 💪 #MyHeroAcademia"
    },
    {
        text: "Le changement commence par soi-même.",
        character: "Saitama",
        anime: "One Punch Man",
        category: "développement",
        shareText: "La simplicité de la force 👊 #OnePunchMan"
    },
    {
        text: "La perfection n'existe pas, mais l'amélioration est infinie.",
        character: "Bruno Bucciarati",
        anime: "JoJo's Bizarre Adventure",
        category: "développement",
        shareText: "L'esprit de la mafia 🌟 #JoJo"
    },

    // Nouvelles citations - Science et Connaissance
    {
        text: "La science est un voyage sans fin vers la découverte.",
        character: "Kurisu Makise",
        anime: "Steins;Gate",
        category: "science",
        shareText: "L'assistant(e) géniale 🧪 #SteinsGate"
    },
    {
        text: "La connaissance est une arme plus puissante que n'importe quelle épée.",
        character: "Armin Arlert",
        anime: "Attack on Titan",
        category: "science",
        shareText: "La stratégie d'Armin 📚 #AttackOnTitan"
    },
    {
        text: "L'innovation naît souvent de la nécessité.",
        character: "Bulma",
        anime: "Dragon Ball",
        category: "science",
        shareText: "Le génie de Capsule Corp 🔧 #DragonBall"
    },

    // Nouvelles citations - Aventure
    {
        text: "L'aventure est là où le cœur nous mène.",
        character: "Gon Freecss",
        anime: "Hunter x Hunter",
        category: "aventure",
        shareText: "L'esprit d'aventure ⭐ #HunterXHunter"
    },
    {
        text: "Chaque nouveau jour est une nouvelle aventure à vivre.",
        character: "Natsu Dragneel",
        anime: "Fairy Tail",
        category: "aventure",
        shareText: "L'aventurier enflammé 🔥 #FairyTail"
    },
    {
        text: "Le véritable trésor n'est pas toujours celui qu'on cherche.",
        character: "Edward Elric",
        anime: "Fullmetal Alchemist",
        category: "aventure",
        shareText: "La quête des frères Elric ⚡ #FullmetalAlchemist"
    },

    // Nouvelles citations - Rêves et Ambitions
    {
        text: "Les rêves ne meurent jamais, ils sommeillent jusqu'à ce qu'on les réveille.",
        character: "Monkey D. Luffy",
        anime: "One Piece",
        category: "rêves",
        shareText: "Le rêve du Roi des Pirates 👑 #OnePiece"
    },
    {
        text: "Peu importe d'où tu viens, c'est où tu vas qui compte.",
        character: "Soma Yukihira",
        anime: "Food Wars",
        category: "rêves",
        shareText: "La cuisine des rêves 🍳 #FoodWars"
    },
    {
        text: "Les limites n'existent que dans l'esprit.",
        character: "Yami Sukehiro",
        anime: "Black Clover",
        category: "rêves",
        shareText: "Dépasser ses limites ⚔️ #BlackClover"
    },

    // Nouvelles citations - Espoir
    {
        text: "L'espoir est comme une flamme, même petite, elle peut éclairer les ténèbres.",
        character: "Nagisa Furukawa",
        anime: "Clannad",
        category: "espoir",
        shareText: "La lumière de l'espoir 🌟 #Clannad"
    },
    {
        text: "Tant qu'il y a de la vie, il y a de l'espoir.",
        character: "Alphonse Elric",
        anime: "Fullmetal Alchemist",
        category: "espoir",
        shareText: "L'optimisme d'Al ⚡ #FullmetalAlchemist"
    },
    {
        text: "L'espoir est la plus grande force de l'humanité.",
        character: "Eren Yeager",
        anime: "Attack on Titan",
        category: "espoir",
        shareText: "L'espoir de l'humanité 🗽 #AttackOnTitan"
    },

    // Nouvelles citations - Courage
    {
        text: "Le courage n'est pas l'absence de peur, mais la force de la surmonter.",
        character: "Maka Albarn",
        anime: "Soul Eater",
        category: "courage",
        shareText: "Le courage d'une meister 💫 #SoulEater"
    },
    {
        text: "Être courageux, c'est faire ce qui est juste, même quand on a peur.",
        character: "Tanjiro Kamado",
        anime: "Demon Slayer",
        category: "courage",
        shareText: "Le courage d'un pourfendeur 🗡️ #DemonSlayer"
    },
    {
        text: "Le vrai courage est de ne jamais renoncer à ses convictions.",
        character: "Saber",
        anime: "Fate/Stay Night",
        category: "courage",
        shareText: "La voie du roi 👑 #FateStayNight"
    },

    // Nouvelles citations - Persévérance
    {
        text: "La persévérance est la clé de toute réussite.",
        character: "Ippo Makunouchi",
        anime: "Hajime no Ippo",
        category: "persévérance",
        shareText: "Le combat continue 🥊 #HajimeNoIppo"
    },
    {
        text: "Chaque pas compte, même les plus petits.",
        character: "Hinata Shoyo",
        anime: "Haikyuu!!",
        category: "persévérance",
        shareText: "Toujours plus haut 🏐 #Haikyuu"
    },
    {
        text: "La route est longue, mais la volonté est le moteur.",
        character: "Simon",
        anime: "Gurren Lagann",
        category: "persévérance",
        shareText: "Perce le ciel! 🚀 #GurrenLagann"
    },

    // Nouvelles citations - Leadership
    {
        text: "Un vrai leader inspire les autres à se dépasser.",
        character: "Roy Mustang",
        anime: "Fullmetal Alchemist",
        category: "leadership",
        shareText: "Le leadership selon Mustang 🔥 #FullmetalAlchemist"
    },
    {
        text: "Le pouvoir n'est rien sans la sagesse pour le guider.",
        character: "Itachi Uchiha",
        anime: "Naruto",
        category: "leadership",
        shareText: "La sagesse d'un leader 👁️ #Naruto"
    },
    {
        text: "Un leader doit être le bouclier de ses compagnons.",
        character: "Erwin Smith",
        anime: "Attack on Titan",
        category: "leadership",
        shareText: "Le commandant visionnaire ⚔️ #AttackOnTitan"
    },

    // Nouvelles citations - Motivation
    {
        text: "La défaite n'est pas quand tu tombes, mais quand tu refuses de te relever.",
        character: "Kushina Uzumaki",
        anime: "Naruto",
        category: "motivation",
        shareText: "La volonté du feu 🔥 #Naruto"
    },
    {
        text: "Si tu veux être fort, apprends à être seul.",
        character: "Gaara",
        anime: "Naruto",
        category: "motivation",
        shareText: "La force intérieure 🏜️ #Naruto"
    },
    {
        text: "La vie est comme un jeu d'échecs, il faut réfléchir avant chaque mouvement.",
        character: "Lelouch Lamperouge",
        anime: "Code Geass",
        category: "sagesse",
        shareText: "La stratégie du roi 👑 #CodeGeass"
    },
    {
        text: "Le véritable pouvoir n'est pas de tout contrôler, mais de savoir quand lâcher prise.",
        character: "Rider",
        anime: "Fate/Zero",
        category: "sagesse",
        shareText: "La sagesse du roi des conquérants ⚔️ #FateZero"
    },
    {
        text: "Le plus grand ennemi de la connaissance n'est pas l'ignorance, c'est l'illusion de la connaissance.",
        character: "Aizen Sosuke",
        anime: "Bleach",
        category: "sagesse",
        shareText: "Les illusions d'Aizen 🦋 #Bleach"
    },
    {
        text: "Il n'y a pas de victoire ou de défaite dans l'amitié, seulement des liens qui se renforcent.",
        character: "Might Guy",
        anime: "Naruto",
        category: "amitié",
        shareText: "La puissance de la jeunesse 💪 #Naruto"
    },
    {
        text: "Les vrais héros ne sont pas ceux qui ne connaissent pas la peur, mais ceux qui la surmontent.",
        character: "All Might",
        anime: "My Hero Academia",
        category: "courage",
        shareText: "Plus Ultra! 💥 #MyHeroAcademia"
    },
    {
        text: "La douleur nous rend plus forts, la souffrance nous rend plus sages.",
        character: "Ken Kaneki",
        anime: "Tokyo Ghoul",
        category: "développement",
        shareText: "L'évolution de Kaneki 🎭 #TokyoGhoul"
    },
    {
        text: "Le temps ne guérit pas les blessures, c'est ce que nous en faisons qui compte.",
        character: "Jellal Fernandes",
        anime: "Fairy Tail",
        category: "sagesse",
        shareText: "La rédemption ⭐ #FairyTail"
    },
    {
        text: "La véritable force d'un guerrier se mesure à sa capacité à protéger, non à détruire.",
        character: "Kenshin Himura",
        anime: "Rurouni Kenshin",
        category: "combat",
        shareText: "La voie du samouraï 🗡️ #RurouniKenshin"
    },
    {
        text: "Le plus grand pouvoir n'est pas de changer le monde, mais de se changer soi-même.",
        character: "Pain",
        anime: "Naruto",
        category: "développement",
        shareText: "Le chemin de la paix 🌧️ #Naruto"
    },
    {
        text: "L'échec fait partie du voyage vers le succès.",
        character: "Jiraiya",
        anime: "Naruto",
        category: "motivation",
        shareText: "Les leçons du Sage 📚 #Naruto"
    },
    {
        text: "La peur n'est pas mauvaise. Elle nous apprend nos faiblesses.",
        character: "Gildarts Clive",
        anime: "Fairy Tail",
        category: "sagesse",
        shareText: "La leçon de Gildarts ⚡ #FairyTail"
    },
    {
        text: "Ce n'est pas la magie qui fait la force d'une guilde, mais les liens entre ses membres.",
        character: "Makarov Dreyar",
        anime: "Fairy Tail",
        category: "amitié",
        shareText: "L'esprit de guilde 🏰 #FairyTail"
    },
    {
        text: "Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.",
        character: "Ginko",
        anime: "Mushishi",
        category: "sagesse",
        shareText: "La sagesse des Mushishi 🌿 #Mushishi"
    },
    {
        text: "La vie est comme un jeu de cartes. La main que tu reçois représente le déterminisme, la façon dont tu joues est le libre arbitre.",
        character: "Kaiji Itou",
        anime: "Kaiji",
        category: "sagesse",
        shareText: "Les leçons du joueur 🎲 #Kaiji"
    },
    {
        text: "Parfois, les batailles les plus difficiles sont celles que nous menons contre nous-mêmes.",
        character: "Ichigo Kurosaki",
        anime: "Bleach",
        category: "combat",
        shareText: "Le combat intérieur ⚔️ #Bleach"
    },
    {
        text: "L'important n'est pas ce que tu regardes, mais ce que tu vois.",
        character: "Tetsuya Kuroko",
        anime: "Kuroko no Basket",
        category: "sagesse",
        shareText: "La vision du joueur fantôme 🏀 #KurokoNoBasket"
    },
    {
        text: "La véritable liberté n'est pas de faire ce que l'on veut, mais de ne plus avoir à faire ce que l'on ne veut pas.",
        character: "Makishima Shougo",
        anime: "Psycho-Pass",
        category: "sagesse",
        shareText: "La philosophie du chaos 🎭 #PsychoPass"
    },
    {
        text: "Le plus grand mensonge que l'on se raconte est qu'il y a encore du temps.",
        character: "Merlin",
        anime: "The Seven Deadly Sins",
        category: "sagesse",
        shareText: "La sagesse du magicien ⌛ #SevenDeadlySins"
    }
];

// Obtenir la citation du jour
router.get('/quote-of-the-day', (req, res) => {
    try {
        const quoteOfDay = getQuoteOfTheDay();
        res.json({
            quote: quoteOfDay,
            shareLinks: {
                twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteOfDay.shareText)}`,
                facebook: `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(quoteOfDay.text)}&u=${encodeURIComponent('VOTRE_URL_ICI')}`,
                whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(quoteOfDay.shareText)}`
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtenir une citation aléatoire avec liens de partage
router.get('/random', async (req, res) => {
    try {
        const randomIndex = Math.floor(Math.random() * animeQuotes.length);
        const quote = animeQuotes[randomIndex];
        res.json({
            quote: quote,
            shareLinks: {
                twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.shareText)}`,
                facebook: `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(quote.text)}&u=${encodeURIComponent('VOTRE_URL_ICI')}`,
                whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(quote.shareText)}`
            }
        });
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({ message: "Erreur lors de la récupération de la citation" });
    }
});

// Rechercher des citations par catégorie
router.get('/category/:category', async (req, res) => {
    try {
        const { category } = req.params;
        const filteredQuotes = animeQuotes.filter(quote => 
            quote.category === category
        );
        res.json(filteredQuotes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rechercher des citations par anime
router.get('/search', async (req, res) => {
    try {
        const { anime, character } = req.query;
        let filteredQuotes = animeQuotes;

        if (anime) {
            filteredQuotes = filteredQuotes.filter(quote => 
                quote.anime.toLowerCase().includes(anime.toLowerCase())
            );
        }

        if (character) {
            filteredQuotes = filteredQuotes.filter(quote => 
                quote.character.toLowerCase().includes(character.toLowerCase())
            );
        }

        res.json(filteredQuotes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtenir toutes les citations
router.get('/all', (req, res) => {
    res.json(animeQuotes);
});

// Obtenir toutes les catégories disponibles
router.get('/categories', (req, res) => {
    const categories = [...new Set(animeQuotes.map(quote => quote.category))];
    res.json(categories);
});

// Exporter le router et les citations
module.exports = {
    router,
    animeQuotes
};
