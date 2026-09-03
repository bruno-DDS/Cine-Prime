// =================================================================
// BANCO DE DADOS DA API LOCAL CINEPRIME - PARTE 1 DE 2
// =================================================================
const API_CINE_PRIME = {
    "EmCartaz": [
        { 
            "title": "Deadpool & Wolverine", 
            "classificacao": "18", 
            "poster": "imagens/OIP (1).webp", // Sua capa
            "runtime": "127 min", 
            "genre": "Ação, Comédia", 
            "director": "Shawn Levy",
            "actors": "Ryan Reynolds, Hugh Jackman", 
            "imdbRating": "7.8/10",
            // >>> COLOQUE O CAMINHO DO SEU ARQUIVO DE VÍDEO LOCAL AQUI:
            "trailerUrl": "imagens/vidssave.com Deadpool & Wolverine _ Trailer 2 Oficial Dublado 720P.mp4", 
            
            "plot": "Wolverine está se recuperando de seus ferimentos quando cruza o caminho do tagarela Deadpool. Eles se unem para derrotar um inimigo em comum.",
            "cinemas": [{ "local": "Cinemark Paulista", "horarios": "15:00, 18:30, 21:15", "preco": "R$ 28,00" }]
        },
        { 
            "title": "Divertida Mente 2", "classificacao": "L", "poster": "",
            "runtime": "96 min", "genre": "Animação, Família, Comédia", "director": "Kelsey Mann",
            "poster": "imagens/Cine1-9.jpg", // Sua capa
            "actors": "Amy Poehler, Maya Hawke", "imdbRating": "7.6/10",
            "trailerUrl": "imagens/YTB_1788432032961.mp4",
            "plot": "Riley entra na adolescência e sua mente passa por uma reforma para dar lugar a novas emoções: a Ansiedade, a Inveja, o Tédio e a Vergonha.",
            "cinemas": [{ "local": "UCI Anália Franco", "horarios": "13:30, 16:00, 18:15", "preco": "R$ 24,00" }]
        },
        { 
            "title": "Sobrenatural: A Porta Vermelha", "classificacao": "14", "poster": "",
            "runtime": "107 min", "genre": "Terror, Mistério", "director": "Patrick Wilson",
            "actors": "Ty Simpkins, Patrick Wilson", "imdbRating": "5.9/10",
            "poster": "imagens/images.jpg", // Sua capa
            "trailerUrl": "imagens/vidssave.com Sobrenatural_ A Porta Vermelha - Trailer Oficial Dublado 720P.mp4",
            "plot": "Para colocar seus demônios de lado de uma vez por todas, Josh e um agora universitário Dalton devem ir mais fundo no Além do que nunca.",
            "cinemas": [{ "local": "Kinoplex Vila Olímpia", "horarios": "19:30, 22:00", "preco": "R$ 26,00" }]
        },
        { 
            "title": "Homem-Aranha: Através do Aranhaverso", "classificacao": "10", "poster": "",
            "runtime": "140 min", "genre": "Animação, Ação, Aventura", "director": "Joaquim Dos Santos",
            "actors": "Shameik Moore, Hailee Steinfeld", "imdbRating": "8.6/10",
            "poster": "imagens/Spider-Man_Brand_New_Day_poster.jpg", // Sua capa
            "trailerUrl": "imagens/vidssave.com Homem-Aranha_ Um Novo Dia _ Trailer Oficial Dublado 720P.mp4",
            "plot": "Miles Morales é catapultado através do Multiverso, onde ele encontra uma equipe de Pessoas-Aranha encarregadas de proteger a própria existência.",
            "cinemas": [{ "local": "Cinemark Tatuapé", "horarios": "14:00, 17:00, 20:00", "preco": "R$ 25,00" }]
        },
        { 
            "title": "John Wick 4: Baba Yaga", "classificacao": "16", "poster": "",
            "runtime": "169 min", "genre": "Ação, Policial", "director": "Chad Stahelski",
            "actors": "Keanu Reeves, Laurence Fishburne", "imdbRating": "7.7/10",
            "poster": "imagens/8eGbK2Qsnkp2mJUdAFD3KDsjhgj.webp", // Sua capa
            "trailerUrl": "imagens/Clipto AI video downloader_John Wick 4  Baba Yaga _ Trailer Dublado.mp4",
            "plot": "John Wick descobre um caminho para derrotar a Alta Cúpula. But antes que ele possa ganhar sua liberdade, Wick deve enfrentar um novo inimigo.",
            "cinemas": [{ "local": "UCI Anália Franco", "horarios": "21:00", "preco": "R$ 24,00" }]
        },
                { 
            "title": "Jurassic World: Domínio", "classificacao": "12", "poster": "",
            "runtime": "147 min", "genre": "Ação, Aventura, Ficção", "director": "Colin Trevorrow",
            "actors": "Chris Pratt, Bryce Dallas Howard", "imdbRating": "5.6/10",
            "trailerUrl": "jurassic.mp4",
            "trailerUrl": "imagens/vidssave.com JURASSIC WORLD DOMÍNIO _ Trailer Dublado Oficial (Universal Pictures) HD 720P.mp4",
            "poster": "imagens/OIP.webp", // Sua capa
            "plot": "Dinossauros agora vivem e caçam ao lado de humanos em todo o mundo. Esse equilíbrio frágil remodelará o futuro e determinará se os humanos continuarão sendo os principais predadores.",
            "cinemas": [{ "local": "Kinoplex Vila Olímpia", "horarios": "19:30, 22:00", "preco": "R$ 26,00" }]
        },

        { 
            "title": "Minions 2: A Origem de Gru", "classificacao": "L", "poster": "",
            "runtime": "87 min", "genre": "Animação, Comédia, Família", "director": "Kyle Balda",
            "actors": "Steve Carell, Pierre Coffin", "imdbRating": "6.6/10",
            "poster": "imagens/Minions2.webp", // Sua capa
            "trailerUrl": "imagens/YTB_1788432221199.mp4",
            "plot": "A história não contada do sonho de um garoto de doze anos de se tornar o maior supervilão do mundo mundial.",
            "cinemas": [{ "local": "Cinemark Tatuapé", "horarios": "13:00, 15:00", "preco": "R$ 22,00" }]
        },
                { 
            "title": "Interestelar", "classificacao": "10", "poster": "",
            "runtime": "169 min", "genre": "Aventura, Drama, Ficção", "director": "Christopher Nolan",
            "actors": "Matthew McConaughey, Anne Hathaway", "imdbRating": "8.7/10",
            "poster": "imagens/OIP (4).webp",
            "trailerUrl": "imagens/vidssave.com Interestelar - Trailer Oficial 4 (dub) [HD] 720P.mp4",
            "plot": "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço em uma tentativa de garantir a sobrevivência da humanidade fora da Terra.",
            "cinemas": [{ "local": "Cinemark Tatuapé", "horarios": "19:00, 21:30", "preco": "R$ 25,00" }]
        },

    ],
    "EmBreve": [
                { 
            "title": "Star Wars: O Despertar da Força", "classificacao": "12", "poster": "",
            "runtime": "138 min", "genre": "Ação, Aventura, Ficção", "director": "J.J. Abrams",
            "actors": "Daisy Ridley, John Boyega", "imdbRating": "7.8/10",
            "poster": "imagens/star-wars-o-despertar-da-forca.download.jpg", // Sua capa
            "trailerUrl": "imagens/Clipto AI video downloader_As Branquelas (2004) _ Trailer [Legendado].mp4",
            "plot": "À medida que uma nova ameaça surge para o universo, Rey, uma catadora de lixo desértica, e Finn, um stormtrooper desertor, devem se unir a Han Solo e Chewbacca.",
            "cinemas": [{ "local": "Estreia em Breve", "horarios": "Breve nas salas", "preco": "--" }]
        },

        { 
            "title": "Batman: Parte II", "classificacao": "14", "poster": "",
            "runtime": "160 min", "genre": "Ação, Policial", "director": "Matt Reeves",
            "actors": "Robert Pattinson, Andy Serkis", "imdbRating": "Aguardando",
            "poster": "imagens/the-batman-2-fan-poster-by-cineskyedits-v0-pvi7jivg4pca1.webp", // Sua capa
            "trailerUrl": "imagens/Clipto AI video downloader_As Branquelas (2004) _ Trailer [Legendado].mp4",
            "plot": "A continuação da saga policial do Cavaleiro das Trevas defendendo as ruas corrompidas e inundadas de Gotham City contra novas ameaças.",
            "cinemas": [{ "local": "Estreia em Breve", "horarios": "Em breve", "preco": "--" }]
        },
        { 
            "title": "Toy Story 5", "classificacao": "L", "poster": "",
            "runtime": "95 min", "genre": "Animação, Família", "director": "Andrew Stanton",
            "actors": "Tom Hanks, Tim Allen", "imdbRating": "Aguardando",
            "poster": "imagens/Cine1-9.jpg", // Sua capa
            "trailerUrl": "imagens/Clipto AI video downloader_As Branquelas (2004) _ Trailer [Legendado].mp4",
            "poster": "imagens/ts5_intl_payoff_peeking_b1_v4_c8ff8fd1.jpg", // Sua capa
            "plot": "Woody, Buzz e a gangue enfrentam o maior rival das brincadeiras modernas: os celulares, tablets e eletrônicos que prendem a atenção das crianças.",
            "cinemas": [{ "local": "Estreia em Breve", "horarios": "Em breve", "preco": "--" }]
        },
        { 
            "title": "Coringa: Delírio a Dois", "classificacao": "16", "poster": "",
            "runtime": "138 min", "genre": "Ação, Drama", "director": "Todd Phillips",
            "actors": "Joaquin Phoenix, Lady Gaga", "imdbRating": "5.3/10",
            "poster": "imagens/6fHZOiH81U4lyMVKvAQ2wcMMy6W.webp", // Sua capa
            "trailerUrl": "imagens/Clipto AI video downloader_As Branquelas (2004) _ Trailer [Legendado].mp4",
            "plot": "Arthur Fleck está institucionalizado em Arkham à espera de seu julgamento. Enquanto luta contra sua dupla identidade, ele encontra o amor verdadeiro.",
            "cinemas": [{ "local": "Estreia em Breve", "horarios": "Em breve", "preco": "--" }]
        },
        { 
            "title": "Shrek 5", "classificacao": "L", "poster": "",
            "runtime": "102 min", "genre": "Animação, Comédia, Família", "director": "Walt Dohrn",
            "actors": "Mike Myers, Eddie Murphy", "imdbRating": "Aguardando",
            "poster": "imagens/shrek_5_custom_poster_by_theanimationfan2007_dhrjkqz-pre.jpg", // Sua capa
            "trailerUrl": "imagens/Clipto AI video downloader_As Branquelas (2004) _ Trailer [Legendado].mp4",
            "plot": "O ogro mais famoso do cinema retorna para uma nova aventura ao lado do Burro, da Fiona e do Gato de Botas no reino de Tão Tão Distante.",
            "cinemas": [{ "local": "Estreia em Breve", "horarios": "Em breve", "preco": "--" }]
        },
        { 
            "title": "Velozes & Furiosos 10", "classificacao": "14", 
            "runtime": "141 min", "genre": "Ação, Aventura, Crime", "director": "Louis Leterrier",
            "poster": "imagens/848a155842f8331062bd190b1584e3b152af0271468312ce6b0def838721592b.jpg", // Sua capa
            "actors": "Vin Diesel, Jason Momoa", "imdbRating": "5.7/10",
            "trailerUrl": "imagens/Clipto AI video downloader_Velozes e Furiosos 10 _ Trailer [Dublado].mp4",
            "plot": "Dom Toretto e sua família se tornam alvos do perigoso e vingativo Dante Reyes, filho de um antigo inimigo que ressurge das sombras determinado a destruir tudo o que Dom ama.",
            "cinemas": [{ "local": "UCI Anália Franco", "horarios": "14:15, 17:30, 20:45", "preco": "R$ 24,00" }]
        },

    ],
    "EmAlta": [
        { 
            "title": "Barbie", "classificacao": "12", "poster": "",
            "runtime": "114 min", "genre": "Comédia, Fantasia", "director": "Greta Gerwig",
            "actors": "Margot Robbie, Ryan Gosling", "imdbRating": "6.9/10",
            "poster": "imagens/Barbie-Movie-Wallpaper-5-768x1365.jpg", // Sua capa
            "trailerUrl": "imagens/Clipto AI video downloader_As Branquelas (2004) _ Trailer [Legendado].mp4",
            "plot": "Barbie começa a passar por uma crise existencial no seu mundo perfeito e precisa viajar até o Mundo Real ao lado de Ken para descobrir a verdade.",
            "cinemas": [{ "local": "UCI Jardim Sul", "horarios": "16:00, 20:30", "preco": "R$ 22,00" }]
        },
        { 
            "title": "Super Mario Bros: O Filme", "classificacao": "L", "poster": "",
            "runtime": "92 min", "genre": "Animação, Aventura, Comédia", "director": "Aaron Horvath",
            "actors": "Chris Pratt, Anya Taylor-Joy", "imdbRating": "7.0/10",
            "poster": "imagens/super_mario_bros_filme_poster__81029lb0.jpeg", // Sua capa
            "trailerUrl": "imagens/Clipto AI video downloader_As Branquelas (2004) _ Trailer [Legendado].mp4",
            "plot": "O encanador Mario viaja por um labirinto subterrâneo com seu irmão, Luigi, tentando salvar uma princesa capturada pelo vilão Bowser.",
            "cinemas": [{ "local": "Cinemark Central", "horarios": "13:30, 15:45", "preco": "R$ 24,00" }]
        },
        { 
            "title": "Avatar: O Caminho da Água", "classificacao": "12", "poster": "",
            "runtime": "192 min", "genre": "Ação, Aventura, Ficção", "director": "James Cameron",
            "actors": "Sam Worthington, Zoe Saldaña", "imdbRating": "7.5/10",
            "poster": "imagens/2b695afb5fb7c65ba67496a851ac0563_XL.jpg", // Sua capa
            "trailerUrl": "imagens/Clipto AI video downloader_As Branquelas (2004) _ Trailer [Legendado].mp4",
            "plot": "Jake Sully vive com sua nova família formada no planeta Pandora. Uma antiga ameaça retorna, e ele deve liderar seu povo em uma batalha difícil.",
            "cinemas": [{ "local": "UCI Anália Franco", "horarios": "17:00, 21:00", "preco": "R$ 26,00" }]
        },
        { 
            "title": "A Freira 2", "classificacao": "16", "poster": "",
            "runtime": "110 min", "genre": "Terror, Mistério", "director": "Michael Chaves",
            "actors": "Taissa Farmiga, Jonas Bloquet", "imdbRating": "5.6/10",
            "poster": "imagens/72bbaf52899f312cdd854cc6a32c0ffbab3249c9163fea85e5e7550af9c87c15.jpg", // Sua capa
            "trailerUrl": "imagens/Clipto AI video downloader_As Branquelas (2004) _ Trailer [Legendado].mp4",
            "plot": "França, 1956. Um padre é assassinado. Um mal está se espalhando. A Irmã Irene mais uma vez fica cara a cara com a força demoníaca Valak.",
            "cinemas": [{ "local": "Cinemark Tatuapé", "horarios": "19:00, 21:30", "preco": "R$ 25,00" }]
        },
        { 
            "title": "As Branquelas", "classificacao": "12", "poster": "",
            "runtime": "109 min", "genre": "Comédia, Policial", "director": "Keenen Ivory Wayans",
            "actors": "Shawn Wayans, Marlon Wayans", "imdbRating": "5.7/10",
            "poster": "imagens/aJZOcorpgloDLkPP6ED0t9sXjNu.webp", // Sua capa
        
            "trailerUrl": "imagens/Clipto AI video downloader_As Branquelas (2004) _ Trailer [Legendado].mp4",
            "plot": "Dois agentes negros do FBI falham em uma missão e são forçados a se disfarçar de duas herdeiras ricas e loiras para salvar seus empregos.",
            "cinemas": [{ "local": "Cinemark Tatuapé", "horarios": "18:45, 21:00", "preco": "R$ 24,00" }]
        },
        { 
            "title": "Coraline e o Mundo Secreto", "classificacao": "10", "poster": "",
            "runtime": "100 min", "genre": "Animação, Família, Fantasia", "director": "Henry Selick",
            "actors": "Dakota Fanning, Teri Hatcher", "imdbRating": "7.7/10",
            "poster": "imagens/poster-coraline-e-o-mundo-secreto-2009 (1).jpg", // Sua capa
            "trailerUrl": "imagens/Clipto AI video downloader_As Branquelas (2004) _ Trailer [Legendado].mp4",
            "plot": "Uma jovem descobre uma porta secreta que esconde um mundo paralelo assustadoramente semelhante ao dela, mas com segredos sombrios.",
            "cinemas": [{ "local": "Sessão Especial Animada", "horarios": "14:00", "preco": "R$ 21,00" }]
        }
    ]
};
