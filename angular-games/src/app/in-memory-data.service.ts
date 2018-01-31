import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const games = [
      { id: 1, name: 'HeroesIII', studio: '3DO', language: 'PL', owner: 'Alek', status: 'nieposzukiwana' },
      { id: 2, name: 'Narco', studio: 'Alamo', language: 'PL', owner: 'Kruk', status: 'nieposzukiwana' },
      { id: 3, name: 'Skyrim', studio: 'Netia', language: 'ENG', owner: 'Kowal', status: 'nieposzukiwana' },
      { id: 4, name: 'Dungeon_and_Dragons', studio: 'Vision', language: 'ENG', owner: 'Alek', status: 'nieposzukiwana' },
      { id: 5, name: 'Magneta', studio: 'Versak', language: 'GER', owner: 'Kruk', status: 'nieposzukiwana'  },
      { id: 6, name: 'Spectators', studio: 'Alamo', language: 'PL', owner: 'Kowal', status: 'nieposzukiwana' },
      { id: 7, name: 'Dynamo', studio: 'Aram', language: 'GER', owner: 'Alek', status: 'nieposzukiwana'  },
      { id: 8, name: 'Vendeta', studio: 'Sonic', language: 'ENG', owner: 'Kruk', status: 'nieposzukiwana'  },
      { id: 9, name: 'HeroesIV', studio: '3DO', language: 'PL', owner: 'Kowal', status: 'nieposzukiwana'  },
      { id: 10, name: 'Black_Ops', studio: 'Netia', language: 'ENG', owner: 'Alek', status: 'nieposzukiwana' }
    ];
    const users = [
      { id: 1, user: 'Alek', rating: '4/5'},
      { id: 2, user: 'Kruk', rating: '5/5'},
      { id: 3, user: 'Kowal', rating: '3/5'}
  ];
  const sgames = [
    { id: 1, name: 'Gamran', studio: '3DO', language: 'PL', owner: 'Alek', status: 'poszukiwana'  },
    { id: 2, name: 'Deldi', studio: 'Alamo', language: 'PL', owner: 'Kruk', status: 'poszukiwana'  },
    { id: 3, name: 'Hysto', studio: 'Netia', language: 'ENG', owner: 'Kowal', status: 'poszukiwana' },
    { id: 4, name: 'Dungeon', studio: 'Vision', language: 'ENG', owner: 'Alek', status: 'poszukiwana'  },
    { id: 5, name: 'Mastari', studio: 'Versak', language: 'GER', owner: 'Kruk', status: 'poszukiwana'   },
    { id: 6, name: 'Specnazi', studio: 'Alamo', language: 'PL', owner: 'Kowal', status: 'poszukiwana'  },
    { id: 7, name: 'Yglu', studio: 'Aram', language: 'GER', owner: 'Alek', status: 'poszukiwana'   },
    { id: 8, name: 'Varsan', studio: 'Sonic', language: 'ENG', owner: 'Kruk', status: 'poszukiwana'   },
    { id: 9, name: 'Elope', studio: '3DO', language: 'PL', owner: 'Kowal', status: 'poszukiwana'   },
    { id: 10, name: 'Bird', studio: 'Netia', language: 'ENG', owner: 'Alek', status: 'poszukiwana' }
  ];

  const all = [
    { id: 1, name: 'Gamran', studio: '3DO', language: 'PL', owner: 'Alek', status: 'poszukiwana'  },
    { id: 2, name: 'Deldi', studio: 'Alamo', language: 'PL', owner: 'Kruk', status: 'poszukiwana'  },
    { id: 3, name: 'Hysto', studio: 'Netia', language: 'ENG', owner: 'Kowal', status: 'poszukiwana' },
    { id: 4, name: 'Dungeon', studio: 'Vision', language: 'ENG', owner: 'Alek', status: 'poszukiwana'  },
    { id: 5, name: 'Mastari', studio: 'Versak', language: 'GER', owner: 'Kruk', status: 'poszukiwana'   },
    { id: 6, name: 'Specnazi', studio: 'Alamo', language: 'PL', owner: 'Kowal', status: 'poszukiwana'  },
    { id: 7, name: 'Yglu', studio: 'Aram', language: 'GER', owner: 'Alek', status: 'poszukiwana'   },
    { id: 8, name: 'Varsan', studio: 'Sonic', language: 'ENG', owner: 'Kruk', status: 'poszukiwana'   },
    { id: 9, name: 'Elope', studio: '3DO', language: 'PL', owner: 'Kowal', status: 'poszukiwana'   },
    { id: 10, name: 'Bird', studio: 'Netia', language: 'ENG', owner: 'Alek', status: 'poszukiwana' },
    { id: 1, name: 'HeroesIII', studio: '3DO', language: 'PL', owner: 'Alek', status: 'poszukiwana' },
    { id: 2, name: 'Narco', studio: 'Alamo', language: 'PL', owner: 'Kruk', status: 'poszukiwana' },
    { id: 3, name: 'Skyrim', studio: 'Netia', language: 'ENG', owner: 'Kowal', status: 'poszukiwana' },
    { id: 4, name: 'Dungeon_and_Dragons', studio: 'Vision', language: 'ENG', owner: 'Alek', status: 'poszukiwana' },
    { id: 5, name: 'Magneta', studio: 'Versak', language: 'GER', owner: 'Kruk', status: 'poszukiwana'  },
    { id: 6, name: 'Spectators', studio: 'Alamo', language: 'PL', owner: 'Kowal', status: 'poszukiwana' },
    { id: 7, name: 'Dynamo', studio: 'Aram', language: 'GER', owner: 'Alek', status: 'poszukiwana'  },
    { id: 8, name: 'Vendeta', studio: 'Sonic', language: 'ENG', owner: 'Kruk', status: 'poszukiwana'  },
    { id: 9, name: 'HeroesIV', studio: '3DO', language: 'PL', owner: 'Kowal', status: 'poszukiwana'  },
    { id: 10, name: 'Black_Ops', studio: 'Netia', language: 'ENG', owner: 'Alek', status: 'poszukiwana' }
  ];
  const comments =[
    { id: 1,from: "Alek", to: 'Kruk', what: 'tranzakcja na najlpeszym poziomie'},
    { id: 2,from: "Kruk", to: 'Alek', what: 'Słabo'},
    { id: 3,from: "Alek", to: 'Kowal', what: 'dobry gościu'},
  ];
    return {games, users,sgames,all,comments};
  }
}