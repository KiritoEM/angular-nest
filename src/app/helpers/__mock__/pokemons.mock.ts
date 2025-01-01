export const POKEMONS_MOCK = [
    {
        id: 1,
        name: "Pikachu",
        description: "A small electric mouse Pokémon.",
        image_url: "/pikachu.webp",
        createdAt: new Date(),
        abilities: [
            {
                id: 1,
                name: "Static",
                description: "May cause paralysis if hit.",
            },
            {
                id: 2,
                name: "Lightning Rod",
                description: "Draws in all Electric-type moves to raise its Special Attack.",
            },
        ],
        pokemon_types: [
            {
                id: 1,
                name: "Electric",
            },
        ],
        user_id: 1,
    },
    {
        id: 2,
        name: "Charizard",
        description: "A fire-breathing dragon Pokémon.",
        image_url: "/charizard-.avif",
        createdAt: new Date(),
        abilities: [
            {
                id: 3,
                name: "Blaze",
                description: "Powers up Fire-type moves when the Pokémon's HP is low.",
            },
            {
                id: 4,
                name: "Solar Power",
                description: "Boosts the Special Attack stat in sunny weather.",
            },
        ],
        pokemon_types: [
            {
                id: 2,
                name: "Fire",
            },
            {
                id: 3,
                name: "Flying",
            },
        ],
        user_id: 1,
    },
    {
        id: 3,
        name: "Bulbasaur",
        description: "A grass/poison Pokémon with a plant bulb on its back.",
        image_url: "/bulbusaur.avif",
        createdAt: new Date(),
        abilities: [
            {
                id: 5,
                name: "Overgrow",
                description: "Powers up Grass-type moves when the Pokémon's HP is low.",
            },
        ],
        pokemon_types: [
            {
                id: 4,
                name: "Grass",
            },
            {
                id: 5,
                name: "Poison",
            },
        ],
        user_id: 1,
    },
    {
        id: 4,
        name: "Squirtle",
        description: "A small turtle Pokémon with water-type abilities.",
        image_url: "/Squirtle.png",
        createdAt: new Date(),
        abilities: [
            {
                id: 6,
                name: "Torrent",
                description: "Powers up Water-type moves when the Pokémon's HP is low.",
            },
        ],
        pokemon_types: [
            {
                id: 6,
                name: "Water",
            },
        ],
        user_id: 1,
    },
    {
        id: 5,
        name: "Jigglypuff",
        description: "A round, pink Pokémon known for its singing.",
        image_url: "/jigglypuff.webp",
        createdAt: new Date(),
        abilities: [
            {
                id: 7,
                name: "Cute Charm",
                description: "May cause infatuation if hit.",
            },
            {
                id: 8,
                name: "Competitive",
                description: "Boosts Special Attack when a stat is lowered.",
            },
        ],
        pokemon_types: [
            {
                id: 7,
                name: "Normal",
            },
            {
                id: 8,
                name: "Fairy",
            },
        ],
        user_id: 1,
    },
];
