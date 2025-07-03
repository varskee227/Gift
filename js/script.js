// Centralized data for all images and their descriptions
const imageData = [
    {
        year: 2004,
        index: 0,
        title: "Moonseed",
        caption: "2004 Moonseed – A star born, quiet and divine.",
        image: "images/2004.webp",
        description: `🌙 December 3, 2004\n\nThe moon whispered to the stars,\n"Tonight, a soul named Ambrin arrived — pure, soft, and timeless like moonlight touching still waters."\n✨ The universe held its breath as she opened her eyes.`
    },
    {
        year: 2005,
        index: 1,
        title: "Silver Sprout",
        caption: "2005 Silver Sprout – The moon’s first smile.",
        image: "images/2005.webp",
        description: `🌙 December 3, 2005\n\nOne year of glow — Ambrin's light began to ripple gently through the world,\nlike a crescent moon smiling from behind soft clouds.\n✨ Even the stars leaned closer to see her smile.`
    },
    {
        year: 2006,
        index: 2,
        title: "Little Crescent",
        caption: "2006 Little Crescent – Tender curves of light.",
        image: "images/2006.webp",
        description: `🌙 December 3, 2006\n\nWith each orbit, the moon admired Ambrin’s grace —\ntwo years of quiet elegance, lighting hearts with every glance.\n✨ Her laughter echoed like silver wind through stardust.`
    },
    {
        year: 2007,
        index: 3,
        title: "Night Whisper",
        caption: "2007 Night Whisper – Soft voice of the dusk.",
        image: "images/2007.webp",
        description: `🌙 December 3, 2007\n\nThree years young, yet Ambrin shimmered like a full moon in a midnight sky —\ncalm, constant, and deeply comforting.\n✨ Night found peace wherever she was present.`
    },
    {
        year: 2008,
        index: 4,
        title: "Shy Glow",
        caption: "2008 Shy Glow – A glow that warms the cold.",
        image: "images/2008.webp",
        description: `🌙 December 3, 2008\n\nLike moonlight breaking the night’s silence, Ambrin’s fourth year brought peace —\na gentle radiance the world grew to love.\n✨ Her presence turned even shadows soft.`
    },
    {
        year: 2009,
        index: 5,
        title: "Twilight Dancer",
        caption: "2009 Twilight Dancer – Grace in every step.",
        image: "images/2009.webp",
        description: `🌙 December 3, 2009\n\nFive years of moonlit magic — Ambrin walked through this world like lunar light across ocean waves,\nsoothing, steady, and serene.\n✨ Every step left behind a shimmer in the dark.`
    },
    {
        year: 2010,
        index: 6,
        title: "Petal of Light",
        caption: "2010 Petal of Light – Delicate, blooming soul.",
        image: "images/2010.webp",
        description: `🌙 December 3, 2010\n\nThe sixth moonrise whispered of dreams — Ambrin's presence now felt like the hush of stardust falling on sleeping fields.\n✨ She carried the silence of the moon and the hope of dawn.`
    },
    {
        year: 2011,
        index: 7,
        title: "Sky Child",
        caption: "2011 Sky Child – One with stars and dreams.",
        image: "images/2011.webp",
        description: `🌙 December 3, 2011\n\nSeven years passed, and the moon saw in her a sky child —\nfree, fearless, and born to shine in silence.\n✨ She moved like a breeze made of light.`
    },
    {
        year: 2012,
        index: 8,
        title: "Dreamlit Pearl",
        caption: "2012 Dreamlit Pearl – Born from stardust.",
        image: "images/2012.webp",
        description: `🌙 December 3, 2012\n\nAmbrin turned eight — a pearl dreamlit by the stars,\nshaped by kindness and carved by light.\n✨ The galaxy painted poems around her presence.`
    },
    {
        year: 2013,
        index: 9,
        title: "Lunar Muse",
        caption: "2013 Lunar Muse – Inspiring like a melody.",
        image: "images/2013.webp",
        description: `🌙 December 3, 2013\n\nNine times the moon circled, watching a muse unfold —\neach breath a verse, each step a song.\n✨ Inspiration flowed from the trail of her being.`
    },
    {
        year: 2014,
        index: 10,
        title: "Celestial Bloom",
        caption: "2014 Celestial Bloom – Blossoming elegance.",
        image: "images/2014.webp",
        description: `🌙 December 3, 2014\n\nTen years bloomed beneath starlight — Ambrin, a celestial flower rooted in grace and glowing with gentle strength.\n✨ She bloomed where even silence dared not grow.`
    },
    {
        year: 2015,
        index: 11,
        title: "Moonbeam Spark",
        caption: "2015 Moonbeam Spark – Playful and precious.",
        image: "images/2015.webp",
        description: `🌙 December 3, 2015\n\nWith eleven lunar dances, her spark became playful —\na moonbeam chasing across waves of laughter and wonder.\n✨ Joy clung to her like the stars cling to night.`
    },
    {
        year: 2016,
        index: 12,
        title: "Serene Glow",
        caption: "2016 Serene Glow – Calm like moonlit lakes.",
        image: "images/2016.webp",
        description: `🌙 December 3, 2016\n\nTwelve years in, the glow she carried was no longer silent —\nit sang in the stillness, echoing over moonlit lakes.\n✨ Her voice felt like the hush between dreams.`
    },
    {
        year: 2017,
        index: 13,
        title: "Eclipsed Wonder",
        caption: "2017 Eclipsed Wonder – Mysteriously radiant.",
        image: "images/2017.webp",
        description: `🌙 December 3, 2017\n\nThirteen moons unveiled a mystery —\nAmbrin, radiant like a hidden eclipse, glowing from within.\n✨ Light and shadow both bowed in her presence.`
    },
    {
        year: 2018,
        index: 14,
        title: "Heartsway Light",
        caption: "2018 Heartsway Light – Lighting paths softly.",
        image: "images/2018.webp",
        description: `🌙 December 3, 2018\n\nFourteen years of gentle guidance —\nher light became the path for hearts wandering in the dark.\n✨ Where she stood, doubt vanished into glow.`
    },
    {
        year: 2019,
        index: 15,
        title: "Evening Grace",
        caption: "2019 Evening Grace – Poised in moon silence.",
        image: "images/2019.webp",
        description: `🌙 December 3, 2019\n\nFifteen winters later, her grace whispered through time —\nan evening breeze that kissed the sky goodnight.\n✨ Time itself paused to admire her calm.`
    },
    {
        year: 2020,
        index: 16,
        title: "Gleam of Peace",
        caption: "2020 Gleam of Peace – A light that heals.",
        image: "images/2020.webp",
        description: `🌙 December 3, 2020\n\nThe moon watched her sixteenth year bloom —\na gleam of peace in a world that so often forgot how to breathe.\n✨ Her eyes held galaxies, her silence carried storms.`
    },
    {
        year: 2021,
        index: 17,
        title: "Lunar Soul",
        caption: "2021 Lunar Soul – Deep, pure, eternal light.",
        image: "images/2021.webp",
        description: `🌙 December 3, 2021\n\nSeventeen stars twinkled in her name —\nAmbrin, the lunar soul, glowing with wisdom and warmth.\n✨ Even the dark felt honored to surround her.`
    },
    {
        year: 2022,
        index: 18,
        title: "Moonborn Queen",
        caption: "2022 Moonborn Queen – Regal in stillness.",
        image: "images/2022.webp",
        description: `🌙 December 3, 2022\n\nEighteen years crowned her calm —\na queen born of silence, reigning with serenity.\n✨ Her grace needed no throne, only the sky.`
    },
    {
        year: 2023,
        index: 19,
        title: "Radiant Bloom",
        caption: "2023 Radiant Bloom – Blossomed into brilliance.",
        image: "images/2023.webp",
        description: `🌙 December 3, 2023\n\nNineteen seasons passed in brilliance —\nher bloom radiant, her journey breathtaking.\n✨ She became the moon’s favorite verse.`
    },
    {
        year: 2024,
        index: 20,
        title: "Starlit Aura",
        caption: "2024 Starlit Aura – Aura that calms storms.",
        image: "images/2024.webp",
        description: `🌙 December 3, 2024\n\nTwenty years of orbiting wonder — Ambrin, a starlit aura,\nstill soft, still strong, still the moon’s favorite miracle.\n✨ She was not born to shine — she was born to be light.`
    },
    {
        year: 2025,
        index: 21,
        title: "Moonlight Woman",
        caption: "2025 Moonlight Woman – Full, wise, and divine.",
        image: "images/2025.webp", // Assuming this image file exists
        description: `🌙 December 3, 2025\n\nThe moonlight woman fully bloomed, wise and divine —\nAmbrin, a timeless presence, guiding souls with her serene glow.\n✨ The universe danced in the grace of her eternal light.`
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const imageCards = document.querySelectorAll('.image-card');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    // Updated selectors to match new HTML structure for the overlay
    const modalShortCaption = document.getElementById('modal-short-caption');
    const modalLongDescription = document.getElementById('modal-long-description');
    const closeButton = document.querySelector('.close-button');

    // Function to update the modal content based on an index
    function updateModalContent(index) {
        const item = imageData[index];
        if (item) {
            modalImage.src = item.image;
            modalImage.alt = item.title + " - Year " + item.year; // Update alt text for accessibility
            modalShortCaption.textContent = item.caption;
            modalLongDescription.innerHTML = item.description.replace(/\n/g, '<br>'); // Preserve line breaks
        } else {
            console.error("No image data found for index:", index);
        }
    }

    // Function to open the modal
    function openModal(index) {
        updateModalContent(index); // Set content for the clicked image
        modal.classList.add('active'); // Use a class to toggle visibility and transitions
        document.body.style.overflow = 'hidden'; // Prevent scrolling of the background
    }

    // Function to close the modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Add click event listeners to each image card on the main grid
    imageCards.forEach(card => {
        card.addEventListener('click', () => {
            const dataIndex = parseInt(card.dataset.index); // Get the data-index
            openModal(dataIndex);
        });
    });

    // Add click event listener to the close button
    closeButton.addEventListener('click', closeModal);

    // Close modal when clicking outside the modal content (on the dark overlay)
    modal.addEventListener('click', (e) => {
        // Check if the click was directly on the modal background,
        // and not on the modal-content or its children (including the overlay)
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with keyboard (Escape key)
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('active') && e.key === 'Escape') {
            closeModal();
        }
    });
});