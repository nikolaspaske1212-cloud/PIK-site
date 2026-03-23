export type Review = {
  cafeName: string;
  city: string;
  note: string;
  ratings: {
    coffee: number;
    ambience: number;
    service: number;
    price: number;
    revisit: number;
  };
};

export type SocialLink = {
  label: string;
  url: string;
};

export type Profile = {
  slug: string;
  firstName: string;
  lastName: string;
  pik: string;
  nick: string;
  dob: string;
  favoriteCafe: string;
  lifeMotto: string;
  image: string;
  socials: SocialLink[];
  reviews: Review[];
};

export const profiles: Profile[] = [
  {
    slug: "nikola-spasojevic",
    firstName: "Nikola",
    lastName: "Spasojević",
    pik: "Profesionalni ispijač kafe",
    nick: "Spaske",
    dob: "12.12.2005.",
    favoriteCafe: "Kafe Lorenzo",
    lifeMotto: "Bez dobre kafe nema dobrog dana.",
    image: "/images/nikola.png",
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/_spasojevicnikola/" },
      { label: "TikTok", url: "https://tiktok.com/" },
      { label: "Spotify", url: "https://open.spotify.com/user/31sgi2jdxjevrqmghs6s7hj57iha" },
    ],
    reviews: [
      {
        cafeName: "Kafe Lorenzo",
        city: "Beograd",
        note: "Dobar espresso i baš prijatan vajb. Predobra konobarica!",
        ratings: {
          coffee: 9,
          ambience: 8,
          service: 111,
          price: 9,
          revisit: 10,
        },
      },
      {
        cafeName: "Baristokratija",
        city: "Beograd",
        note: "Kafa odlična, usluga malo sporija.",
        ratings: {
          coffee: 10,
          ambience: 8,
          service: 6,
          price: 7,
          revisit: 8,
        },
      },
    ],
  },
  {
    slug: "anastasija-lutovac",
    firstName: "Anastasija",
    lastName: "Lutovac",
    pik: "Ljubitelj rituala i dobre kafe",
    nick: "Aki",
    dob: "03.09.2005.",
    favoriteCafe: "Bloom",
    lifeMotto: "Polako, ali sa stilom.",
    image: "/images/anastasija.jpg",
    socials: [
      { label: "Instagram", url: "https://instagram.com/" },
      { label: "TikTok", url: "https://tiktok.com/" },
    ],
    reviews: [
      {
        cafeName: "Bloom",
        city: "Novi Sad",
        note: "Prelep enterijer i baš fina atmosfera.",
        ratings: {
          coffee: 8,
          ambience: 10,
          service: 8,
          price: 7,
          revisit: 9,
        },
      },
      {
        cafeName: "Kafeterija",
        city: "Beograd",
        note: "Pouzdano mesto kad hoću dobru kafu bez greške.",
        ratings: {
          coffee: 9,
          ambience: 8,
          service: 8,
          price: 7,
          revisit: 8,
        },
      },
    ],
  },
];