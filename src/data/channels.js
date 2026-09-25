// Channel showcase used by <ChannelExplorer>. Names only (no broadcaster logos).
// Keep this list in sync with the panel's real channel list: remove anything the
// panel doesn't carry, add what it does.
export const channelGroups = [
  {
    id: 'france',
    name: 'France',
    channels: [
      'TF1', 'France 2', 'France 3', 'France 4', 'France 5', 'M6', 'Arte', 'W9', 'TMC', 'TFX', 'C8', 'CStar',
      '6ter', 'RMC Story', 'RMC Découverte', 'Chérie 25', 'NRJ 12', 'Gulli', 'LCP', 'Public Sénat',
      'Canal+', 'Paris Première', 'Téva', 'Série Club', 'TV Breizh', 'Comédie+', 'France 3 régions',
    ],
  },
  {
    id: 'sport',
    name: 'Sport',
    channels: [
      'beIN Sports 1', 'beIN Sports 2', 'beIN Sports 3', 'Canal+ Sport', 'Canal+ Foot', 'RMC Sport 1', 'RMC Sport 2',
      'Eurosport 1', 'Eurosport 2', "L'Équipe", 'Automoto', 'Golf+', 'Equidia', 'Sport en France',
    ],
  },
  {
    id: 'cinema',
    name: 'Cinéma & séries',
    channels: [
      'Ciné+ Premier', 'Ciné+ Frisson', 'Ciné+ Émotion', 'Ciné+ Famiz', 'Ciné+ Classic', 'TCM Cinéma',
      'Paramount Channel', 'Action', 'Warner TV', 'Polar+', 'Novelas TV',
    ],
  },
  {
    id: 'info',
    name: 'Info',
    channels: ['BFM TV', 'CNews', 'LCI', 'franceinfo', 'France 24', 'Euronews', 'BFM Business', 'i24News', 'BBC World News', 'CNN International', 'Al Jazeera'],
  },
  {
    id: 'jeunesse',
    name: 'Jeunesse',
    channels: ['Gulli', 'Canal J', 'Piwi+', 'TiJi', 'Nickelodeon', 'Nickelodeon Junior', 'Cartoon Network', 'Boomerang', 'Disney Channel', 'Boing'],
  },
  {
    id: 'docs',
    name: 'Découverte',
    channels: ['National Geographic', 'Nat Geo Wild', 'Discovery Channel', 'Planète+', 'Histoire TV', 'Ushuaïa TV', 'Science & Vie TV', 'Animaux', 'Toute l\'Histoire', 'Trek'],
  },
  {
    id: 'musique',
    name: 'Musique',
    channels: ['MTV', 'MCM', 'M6 Music', 'Trace Urban', 'Trace Africa', 'Mezzo', 'NRJ Hits', 'Melody'],
  },
  {
    id: 'belgique-suisse',
    name: 'Belgique & Suisse',
    channels: ['La Une', 'Tipik', 'La Trois', 'RTL-TVI', 'Club RTL', 'Plug RTL', 'LN24', 'RTS 1', 'RTS 2', 'TV5 Monde'],
  },
  {
    id: 'maghreb',
    name: 'Maghreb & arabe',
    channels: [
      '2M', 'Al Aoula', 'Medi1 TV', 'Arryadia', 'Canal Algérie', 'A3', 'Echorouk TV', 'Ennahar TV', 'Watania 1',
      'Nessma', 'Al Arabiya', 'MBC 1', 'MBC Drama', 'Rotana Cinema',
    ],
  },
  {
    id: 'afrique',
    name: 'Afrique',
    channels: ['A+ Ivoire', 'Novelas TV', 'Trace Africa', 'RTI 1', 'RTS Sénégal', 'CRTV', 'Africa 24', 'Nollywood TV'],
  },
  {
    id: 'europe',
    name: 'Europe & monde',
    channels: [
      'BBC One', 'ITV', 'Sky News', 'TVE', 'Antena 3', 'Rai 1', 'Canale 5', 'RTP', 'SIC', 'TVI', 'Das Erste', 'ZDF',
      'TRT 1', 'Show TV', 'ATV', 'Kanal D', 'Star TV',
    ],
  },
];

// One flat, de-duplicated list for search.
export const allChannels = [...new Set(channelGroups.flatMap((g) => g.channels))];
