export type Language = 'EN' | 'AF' | 'XH';

export interface Translation {
  gate: {
    title: string;
    subtitle: string;
    prompt: string;
  };
  nav: {
    story: string;
    symbols: string;
    waitlist: string;
    connect: string;
  };
  hero: {
    eyebrow: string;
    title: {
      normal: string;
      italic: string;
      after: string;
    };
    subtitle: string;
    scroll: string;
  };
  why: {
    eyebrow: string;
    title: string;
    body1: string;
    quote1: string;
    body2: string;
    body3: string;
    quote2: string;
    body4: string;
  };
  origin: {
    eyebrow: string;
    date: string;
    title: string;
    body: string[];
    quote: string;
  };
  symbols: {
    title: string;
    tagline: string;
    items: {
      word: string;
      translation: string;
      desc: string;
    }[];
  };
  payoff: string;
  philosophy: {
    title: string;
    body: string[];
    signoff: string;
  };
  waitlist: {
    eyebrow: string;
    title: {
      before: string;
      highlight: string;
      after: string;
    };
    name: string;
    email: string;
    sizeLabel: string;
    button: string;
    success: string;
  };
  connect: {
    title: string;
    subtitle: string;
    instagram: string;
    tiktok: string;
    facebook: string;
    signoff: string;
  };
  footer: {
    brand: string;
    rights: string;
  };
}

export const translations: Record<Language, Translation> = {
  EN: {
    gate: {
      title: "JDDP",
      subtitle: "For the 'quietly' Brave.",
      prompt: "SELECT YOUR TONGUE"
    },
    nav: {
      story: "STORY",
      symbols: "SYMBOLS",
      waitlist: "WAITLIST",
      connect: "CONNECT"
    },
    hero: {
      eyebrow: "JOHANNIE DIE DAPPER PADDATJIE",
      title: {
        normal: "For the ",
        italic: "quietly",
        after: " Brave."
      },
      subtitle: "",
      scroll: "DISCOVER"
    },
    why: {
      eyebrow: "01 · THE WHY",
      title: "Every brand has a story. This one has a heartbeat.",
      body1: "JDDP was not built in a boardroom. It began on a phone - before Artificial Intelligence, driven only by creative thoughts motivated by love, joy, grief, the inevitable, and the realisation that some things are too important to leave in the silence.",
      quote1: "JDDP is not just a brand. It is a memory that lives.",
      body2: "The things we carry - our roots, our humour, our culture, our grief, our courage - deserve to be worn. Visibly. Proudly. With both lightness and meaning.",
      body3: "JDDP was born out of a desire to celebrate the moments of bravery that go unnoticed. Not the loud, grand gestures, but the quiet decisions to keep moving forward.",
      quote2: "True courage is not always a roar. Sometimes it is the quiet voice at the end of the day saying, 'I will try again tomorrow.'",
      body4: "This brand is a tribute to the paddatjies in all of us - the small but mighty creatures that navigate vast waters with nothing but their own strength."
    },
    origin: {
      eyebrow: "02 · ORIGIN",
      date: "9 NOVEMBER 2019 · 16:56 · HAZYVIEW",
      title: "Where it began.",
      body: [
        "The first JDDP logo was created on a phone. Not in a studio. On a quiet holiday in Hazyview - while the founder was far from his daughters in Cape Town, and his mother was in hospital in Bloemfontein.",
        "One month and three days before she passed.",
        "Alone with his thoughts, and the fear of losing her, a memory surfaced. One she had told many times - always with pride, always with joy. One of the earliest memories they shared.",
        "She was deeply afraid of frogs. One had found its way into the house one evening and stopped her in the hallway - she froze, she could not pass. So she called for her little boy. He was barely two years old. She directed this toddler to fetch the yellow potty, which she used to cover the frog - and in doing so, found a way through her fear.",
        "She always told that story as if he was the helper. The brave one.",
        "He never saw it that way.",
        "So who was the brave one? Her? The frog? Little Johannie, barely walking? Perhaps all of them - depending on where you stand and how you look at it.",
        "That is the paradox living inside the name. Johannie die Dapper Paddatjie sounds like a children's story. And it is. But it is also something else: a question about courage, about who we give it to, and about the quiet ways that true love works between people, without either of them fully realising it.",
        "JDDP was born from that memory. From that bond. From the fear of losing someone - and the choice to keep your heart open to the pain, so that love can be fully understood and lived."
      ],
      quote: "Some brands begin with a market gap. This one began with a mother."
    },
    symbols: {
      title: "THE FROG AS SYMBOL",
      tagline: "",
      items: [
        { word: "Courage", translation: "MOED · ISIBINDI", desc: "Showing up through fear. The quiet kind. The kind a mother gives without knowing." },
        { word: "Innocence", translation: "ONSKULD · UMSULWA", desc: "The childhood moment that started it all. Pure, unguarded, unforgettable." },
        { word: "Memory", translation: "HERINNERING · ISIKHUMBUZO", desc: "She is gone. But she is not absent. JDDP is where she lives." },
        { word: "Resilience", translation: "VEERKRAGTIGHEID · UKUMELANA", desc: "Built on a phone. Paused. Returned. Because some things refuse to stay quiet." },
        { word: "Legacy", translation: "NALATENSKAP · ILIFA", desc: "What we leave behind. JDDP is a mother's legacy, worn into the world." }
      ]
    },
    payoff: "Worn over the heart. Not by accident.",
    philosophy: {
      title: "JDDP PHILOSOPHY",
      body: [
        "We believe that the most important acts of courage are the ones that go unwitnessed. Not the grand gestures. Not the moments that get the applause. But the quiet decision to get up again. To keep going. To love someone through fear. To build something meaningful from grief rather than let it go to waste.",
        "We believe that clothing is not just fabric. It is a choice about what you carry on your body and what you want the world to feel when they look at you. JDDP is made for people who understand the difference between being seen and being known.",
        "We believe that a brand built from love is more honest than one built from trend. That longevity comes from meaning, not from noise. And that the people who find JDDP were always going to find it - because they already understand, quietly, what it means."
      ],
      signoff: ""
    },
    waitlist: {
      eyebrow: "RESERVE YOUR SPOT",
      title: {
        before: "Be part of the ",
        highlight: "quiet few",
        after: "."
      },
      name: "NAME",
      email: "EMAIL ADDRESS",
      sizeLabel: "What's your usual size? (helps us plan our first run)",
      button: "JOIN THE WAITLIST",
      success: "You have been added to the quiet few."
    },
    connect: {
      title: "FOR THE QUIETLY BRAVE - WHEREVER YOU ARE.",
      subtitle: "Follow the journey as it unfolds.",
      instagram: "INSTAGRAM · @JDDPBRAND",
      tiktok: "TIKTOK · @JDDPBRAND",
      facebook: "FACEBOOK · @JDDPBRAND",
      signoff: ""
    },
    footer: {
      brand: "JDDP - CAPE TOWN",
      rights: "ALL RIGHTS RESERVED"
    }
  },
  AF: {
    gate: {
      title: "JDDP",
      subtitle: "Vir die 'stilweg' Dapper.",
      prompt: "KIES JOU TAAL"
    },
    nav: {
      story: "STORIE",
      symbols: "SIMBOLE",
      waitlist: "WAGLYS",
      connect: "KONTAK"
    },
    hero: {
      eyebrow: "JOHANNIE DIE DAPPER PADDATJIE",
      title: {
        normal: "Vir die ",
        italic: "stilweg",
        after: " Dapper."
      },
      subtitle: "",
      scroll: "ONTDEK"
    },
    why: {
      eyebrow: "01 · HOEKOM",
      title: "Elke handelsmerk het 'n verhaal. Hierdie een het 'n hartklop.",
      body1: "JDDP is nie in 'n raadsaal gebou nie. Dit het op 'n foon begin - voor Kunsmatige Intelligensie, gedryf slegs deur skeppende gedagtes wat gemotiveer is deur liefde, vreugde, hartseer, die onvermydelike, en die besef dat sommige dinge te belangrik is om in die stilte te laat.",
      quote1: "JDDP is nie net 'n handelsmerk nie. Dit is 'n herinnering wat leef.",
      body2: "Die dinge wat ons dra - ons wortels, ons humor, ons kultuur, ons hartseer, ons moed - verdien om gedra te word. Sigbaar. Trots. Met beide ligtheid en betekenis.",
      body3: "JDDP is gebore uit 'n begeerte om die oomblikke van dapperheid te vier wat ongemerk verbygaan. Nie die harde, groot gebare nie, maar die stille besluite om aan te hou beweeg.",
      quote2: "Ware moed is nie altyd 'n gebrul nie. Soms is dit die stille stem aan die einde van die dag wat sê, 'Ek sal môre weer probeer.'",
      body4: "Hierdie handelsmerk is 'n huldeblyk aan die paddatjies in ons almal - die klein maar magtige wesens wat groot waters navigeer met niks anders as hul eie krag nie."
    },
    origin: {
      eyebrow: "02 · ORIGIN",
      date: "9 NOVEMBER 2019 · 16:56 · HAZYVIEW",
      title: "Waar dit begin het.",
      body: [
        "Die eerste JDDP-logo is op ‘n foon geskep. Nie in ‘n ateljee nie. Op ‘n stil vakansie in Hazyview - terwyl die stigter ver was van sy dogters in Kaapstad, en sy ma in die hospitaal was in Bloemfontein.",
        "Een maand en drie dae voor sy gesterf het.",
        "Alleen met sy gedagtes, en die vrees om haar te verloor, het 'n herinnering opgeduik. Een wat sy baie kere van vertel het - altyd met trots, altyd met blydskap. Een van die vroegste herinneringe wat hulle gedeel het.",
        "Sy was bitter bang vir paddas. 'n Diep vrees, om eerlik te wees. 'n Groterige padda het sy pad in die huis gevind een aand en haar in die gang tot stilstaan geruk - sy het gevries, sy kon nie verbykom nie. Toe roep sy vir \"boetie\" soos sy hom genoem het. Hy was skaars twee jaar oud. Sy het hierdie peuter aangewys om die geel piepiepot te gaan haal, wat sy gebruik het om die padda mee te bedek - en so het sy 'n weg deur haar vrees gevind.",
        "Sy het daardie storie altyd vertel asof hy die helper was. Die dappere een.",
        "Hy het dit nooit so gesien nie.",
        "So wie was die dappere een? Sy? Die padda? Klein Johannie, skaars aan die loop? Miskien almal - dit hang af waar mens staan en hoe jy daarna kyk.",
        "Dit is die paradoks wat in die naam leef. Johannie die Dapper Paddatjie klink soos 'n kinderstorie. En dit is. Maar dit is ook iets anders: 'n vraag oor moed, aan wie ons dit gee, en oor die stil maniere waarop ware liefde te werk gaan tussen mense, sonder dat een van hulle dit ten volle besef.",
        "JDDP is gebore uit daardie herinnering. Uit daardie band. Uit die vrees om iemand te verloor - en die keuse om jou hart oop te hou vir die pyn, sodat liefde ten volle verstaan en geleef kan word."
      ],
      quote: "Sommige handelsmerke begin met ‘n mark. Hierdie een het begin met ‘n Ma, ‘n Moeder, Moeksie."
    },
    symbols: {
      title: "DIE PADDA AS SIMBOOL",
      tagline: "",
      items: [
        { word: "Moed", translation: "COURAGE · ISIBINDI", desc: "Om op te daag ten spyte van vrees. Die stille soort. Die soort wat 'n ma gee sonder om dit te weet." },
        { word: "Onskuld", translation: "INNOCENCE · UMSULWA", desc: "Die kinderjare-oomblik wat dit alles begin het. Suiwer, onbeskermd, onvergeetlik." },
        { word: "Herinnering", translation: "MEMORY · ISIKHUMBUZO", desc: "Sy is weg. Maar sy is nie afwesig nie. JDDP is waar sy leef." },
        { word: "Veerkragtigheid", translation: "RESILIENCE · UKUMELANA", desc: "Op 'n foon gebou met intervalle en telkens teruggekeer. Want sommige dinge weier om stil te bly." },
        { word: "Nalatenskap", translation: "LEGACY · ILIFA", desc: "Wat ons agterlos. JDDP is 'n ma se nalatenskap, in die wêreld ingedra." }
      ]
    },
    payoff: "Gedra oor die hart. Nie per toeval nie.",
    philosophy: {
      title: "JDDP FILOSOFIE",
      body: [
        "Ons glo dat die belangrikste dade van dapperheid diegene is wat ongesiens verbygaan. Nie die groot gebare nie. Nie die oomblikke wat die toejuigings kry nie. Maar die stille besluit om weer op te staan. Om aan te hou. Om iemand lief te hê ten spyte van vrees. Om iets betekenisvols uit hartseer te bou eerder as om dit tot niet te laat gaan.",
        "Ons glo dat klere nie net tekstiel is nie. Dit is 'n keuse oor wat jy op jou liggaam dra en wat jy wil hê die wêreld moet voel wanneer hulle na jou kyk. JDDP is gemaak vir mense wat die verskil verstaan tussen om gesien te word en om geken te word.",
        "Ons glo dat 'n handelsmerk wat uit liefde gebou is, eerliker is as een wat uit neigings gebou is. Dat langlewendheid uit betekenis kom, nie uit geraas nie. En dat die mense wat JDDP vind, dit altyd gaan vind - omdat hulle reeds stilweg verstaan wat dit beteken."
      ],
      signoff: ""
    },
    waitlist: {
      eyebrow: "RESERVEER JOU PLEK",
      title: {
        before: "Wees deel van die ",
        highlight: "stille paar",
        after: "."
      },
      name: "NAAM",
      email: "EPOS ADRES",
      sizeLabel: "Wat is jou gewone grootte? (help ons met beplanning)",
      button: "SLUIT AAN BY DIE WAGLYS",
      success: "Jy is bygevoeg by die stil groepie."
    },
    connect: {
      title: "VIR DIE STILLE DAPPER - WAAR JY OOK AL IS.",
      subtitle: "Volg die reis soos dit ontvou.",
      instagram: "INSTAGRAM · @JDDPBRAND",
      tiktok: "TIKTOK · @JDDPBRAND",
      facebook: "FACEBOOK · @JDDPBRAND",
      signoff: ""
    },
    footer: {
      brand: "JDDP - KAAPSTAD",
      rights: "ALLE REGTE VOORBEHOU"
    }
  },
  XH: {
    gate: {
      title: "JDDP",
      subtitle: "Kwabo Bakhaliphileyo 'ngokuzolileyo'.",
      prompt: "KHETHA ULWIMI LAKHO"
    },
    nav: {
      story: "IBALI",
      symbols: "IZIMBALI",
      waitlist: "ULUHLU LOKULINDA",
      connect: "QHAGAMSHELANA"
    },
    hero: {
      eyebrow: "JOHANNIE DIE DAPPER PADDATJIE",
      title: {
        normal: "Kwabo ",
        italic: "bakhaliphileyo",
        after: " ngokuzolileyo."
      },
      subtitle: "",
      scroll: "FUMANA"
    },
    why: {
      eyebrow: "01 · ISIZATHU",
      title: "Zonke izikhumba zinendaba. Le inentliziyo.",
      body1: "I-JDDP ayakhiwa egumbini leekomiti. Yaqala kufowuni - ngaphambi kobuchwephesha bobunyani obunqwenelekileyo, ixhonywe kuphela zingcinga ezidalekileyo ezikhuthazwa luthando, uvuyo, usizi, okungephepheki, nokuqonda ukuba izinto ezithile zibaluleke kakhulu ukuba zishiywe ebumnyameni.",
      quote1: "I-JDDP asizikhumba nje. Yinkumbulo ephilayo.",
      body2: "Izinto esizithwalayo - imvelaphi yethu, uhleko lwethu, inkcubeko yethu, usizi lwethu, isibindi sethu - zifanelwe ukuphathwa. Ngokubonakala. Ngoqhayiya. Ngobukhulu becala nangentsingiselo.",
      body3: "I-JDDP yazalelwa umnqweno wokunika imbeko kwiimzuzwana zobuhawe ezingahlonywayo. Hayi imikhosi evelayo enkulu, kodwa izigqibo ezizolileyo zokuqhubeka phambili.",
      quote2: "Isibindi sosibili asihlali sisandi. Ngamanye amaxesha yilizwi elingcwabevu ekupheleni kosuku elithi, 'Ndiza kuphinda ndizame ngomso.'",
      body4: "Le zikhumba yimbeko yee-paddatjies zethu zonke - izidalwa ezincinane kodwa ezinamandla ezikhaba amanzi amakhulu ngamandla azo zodwa."
    },
    origin: {
      eyebrow: "02 · ORIGIN",
      date: "9 NOVEMBA 2019 · 16:56 · HAZYVIEW",
      title: "Apho yaqala khona.",
      body: [
        "Ilogo yokuqala ye-JDDP yenziwa kwifoni. Hayi kwisitudiyo. Ngeeholide ezizolileyo eHazyview - ngelixa umseki wayekude nabantwana bakhe ababhinqileyo eKapa, nomama wakhe wayesesikhiweni eBloemfontein.",
        "Inyanga enye neentsuku ezintathu ngaphambi kokuba asishiye.",
        "Yedwa neengcinga zakhe, noloyiko lokumphulukana naye, inkumbulo yavela. Enye awayeyixelela amaxesha amaninzi - ngokuhlala enequbela, enemihlali. Enye yeenkumbulo zokuqala ababa nazo bobabini.",
        "Wayesoyika iizaqand kakhulu. Ngokunyanisekileyo, loloyiko olunzulu. Iizaqand enkulu yafumanisa indlela yayo endlwini ngobusuku bunye yamisa umama wakhe ekorridorini - waqabana, akanakudlula. Wababiza ke umseki wakhe omncinci. Wayeneminyaka emibini. Wamcebisa lo mntwana ukuba ayokulanda ibakiti yesindebele eliluhlaza, awasebenzisa ukufihla iizaqand - waza ngaloo ndlela wafumana indlela yokudlula eloyikweni lakhe.",
        "Wayesoloko exelela loo nto ngokungathi nguye owayengumncedi. Onesibindi.",
        "Akazange akubone ngaloo ndlela.",
        "Ngubani ke owayenesibindi? Yena? Iizaqand? UJohannie omncinci, osanda ukufunda ukuhamba? Mhlawumbi bonke - kuxhomekeke apho wema khona nendlela obukela ngayo.",
        "Yiyo le paradox ephila ngaphakathi kwegama. U-Johannie die Dapper Paddatjie uyavakala njengebali labantwana. Yiyo lonto. Kodwa kukho into enye: umbuzo ngokuzinikela, ngokuba sikunika bani, nangeendlela ezithuleyo uthando lwenene lusebenza ngayo phakathi kwabantu, ngaphandle kokuba omnye wabo aqonde ngokupheleleyo.",
        "I-JDDP yazalwa kwinkumbulo leyo. Kweso sifungo. Kuloyiko lokumphulukana nomntu - nokukhetha ukuvula intliziyo yakho ebuhlungwini, ukuze uthando luqondwe ngokupheleleyo luphilwe."
      ],
      quote: "Iibhrandi ezininzi ziqala ngemarike. Le yaqala ngoMama, uMoeder, uMoeksie."
    },
    symbols: {
      title: "ISELE NJENGOPHAWU",
      tagline: "",
      items: [
        { word: "Isibindi", translation: "COURAGE · MOED", desc: "Ukuvela ngesoyikelo. Uhlobo oluthuleyo." },
        { word: "Umsulwa", translation: "INNOCENCE · ONSKULD", desc: "Umzuzu wobusha owaqala yonke into." },
        { word: "Isikhumbuzo", translation: "MEMORY · HERINNERING", desc: "Umkile. Kodwa akakho kude. I-JDDP yindawo aphila kuyo." },
        { word: "Ukumelana", translation: "RESILIENCE · VEERKRAGTIGHEID", desc: "Yakhiwa kwifowuni. Yamiswa. Yabuyela." },
        { word: "Ilifa", translation: "LEGACY · NALATENSKAP", desc: "Esishiyayo. I-JDDP lifa likamaama." }
      ]
    },
    payoff: "Ixhathiswe entliziyweni. Hayi ngempazamo.",
    philosophy: {
      title: "JDDP PHILOSOPHY",
      body: [
        "Sikholelwa ukuba ezona zenzo zibalulekileyo zobukhalipha zezo zingabonwayo. Hayi izenzo ezikhulu. Hayi amaxesha afumana ihlombe. Kodwa isigqibo esizolileyo sokuphinda uvuke. Ukuqhubeka phambili. Ukuthanda umntu nangona kukho uloyiko. Ukwakha into enentsingiselo kwintlungu kunokuba uyiyeke imosheke.",
        "Sikholelwa ukuba impahla asilolaphu nje. Lukhetho malunga nento oyithwalayo emzimbeni wakho nento ofuna ukuba ihlabathi liyive xa likujongile. I-JDDP yenzelwe abantu abaqondayo umahluko phakathi kokubonwa nokwaziwa.",
        "Sikholelwa ukuba ibhrendi eyakhiwe ngothando inenyaniso ngakumbi kuneyakhiwe ngeefashoni. Ukuba ixesha elide livela kwintsingiselo, hayi kwingxolo. Kwaye abantu abafumana i-JDDP babesoloko beza kuyifumana - ngenxa yokuba sele beqonda, ngokuzolileyo, into ethetha yona."
      ],
      signoff: ""
    },
    waitlist: {
      eyebrow: "BHAKISHA INDAWO YAKHO",
      title: {
        before: "Yiba yinxalenye ye",
        highlight: "mbalwa ezolileyo",
        after: "."
      },
      name: "IGAMA",
      email: "I-IMEYILE",
      sizeLabel: "Lubuphi ubungakanani bakho obuqhelekileyo? (isceda ekucwangciseni)",
      button: "DIBA NO-WAGLYS",
      success: "Wongeziwe kwabambalwa abazolileyo."
    },
    connect: {
      title: "KWABO BAKHALIPHILEYO NGOKUZOLILEYO - NAPHI NA APHO UKHOYO.",
      subtitle: "Landela olu hambo njengoko lutyhila.",
      instagram: "INSTAGRAM · @JDDPBRAND",
      tiktok: "TIKTOK · @JDDPBRAND",
      facebook: "FACEBOOK · @JDDPBRAND",
      signoff: ""
    },
    footer: {
      brand: "JDDP - EKAPA",
      rights: "WONKE AMALUNGELO AGCINIWE"
    }
  }
};
