const {
    sequelize, Subscriber, Subscription, BillingInfo, 
    Card, Catalog, Video, Provider, License,
} = require('./models');

const entrySubscriber = (name, password, subscription_id = null, billing_info_id = null) => {
    return {
        name: name,
        password: password,
        subscription_id: subscription_id,
        billing_info_id: billing_info_id,
    }
}
const entrySubscription = (name, stream_limit, price) => {
    return {
        name: name,
        stream_limit: stream_limit,
        price: price,
    }
}
const entryCard = (number, cvc, exp_date, name_on_card, billing_info_id = null) => {
    return {
        number: number,
        cvc: cvc,
        exp_date: exp_date,
        name_on_card: name_on_card,
        billing_info_id: billing_info_id,
    }
}
const entryBillingInfo = (address, billing_date, last_payment_date, next_payment_date) => {
    return {
        address: address,
        billing_date: billing_date,
        last_payment_date: last_payment_date,
        next_payment_date: next_payment_date,
    }
}
const entryCatalog = (name) => {
    return {
        name: name,
    }
}
const entryProvider = (name) => {
    return { 
        name: name,
    }
}
const entryLicense = (start_date, end_date) => {
    return {
        start_date: start_date,
        end_date: end_date,
    }
}
const entryVideo = (name, description, license_id = null, provider_id = null, catalog_id = null) => {
    return {
        name: name,
        description: description,
        license_id: license_id,
        provider_id: provider_id,
        catalog_id: catalog_id,
    }
}



async function createSubscriber() {
    await Subscriber.destroy({ where: {}});
    try {
        await Subscriber.bulkCreate([
            entrySubscriber('UserA','pass', 1),
            entrySubscriber('UserB','pass', 1),
            entrySubscriber('UserC','pass', 2, 1),
            entrySubscriber('UserD','pass', 3, 2),
            entrySubscriber('UserE','pass', 3, 3),
        ])
    }
    catch(evt) {
        console.error(evt);
    }
}

async function createSubscription() {
    await Subscription.destroy({ where: {}});

    try {
        await Subscription.bulkCreate([
            entrySubscription('Free',5,0),
            entrySubscription('Gold',25,5.99),
            entrySubscription('Platinum',50,9.00),
        ])
    }
    catch(evt) {
        console.error(evt);
    }
}

async function createCard() {
    await Card.destroy({ where: {}});

    try {
        await Card.bulkCreate([
            entryCard('5479384394795295','946','2024-01-01','Jane E Doe',1),
            entryCard('0728734795126983','055','2023-01-01','John A Doe',2),
            entryCard('9319526965293487','369','2027-01-01','Jason B Doe',3),

        ])
    }
    catch(evt) {
        console.error(evt);
    }
}

async function createBillingInfo() {
    await BillingInfo.destroy({ where: {}});

    try {
        await BillingInfo.bulkCreate([
            entryBillingInfo('8675 ABC Rd Bronx, NY','2019-03-01','2019-03-10','2019-05-01'),
            entryBillingInfo('739 DEFG St Bronx, NY','2019-03-01','2019-03-10','2019-06-01'),
            entryBillingInfo('9395 HIJK Rd Bronx, NY','2019-03-01','2019-03-10','2019-04-01'),
            entryBillingInfo('1971 AAAA St Bronx, NY','2019-03-01','2019-03-10','2019-05-01'),

        ])
    }
    catch(evt) {
        console.error(evt);
    }
}

async function createCatalog() {
    await Catalog.destroy({ where: {}});

    try {
        await Catalog.bulkCreate([
            entryCatalog('main'),
        ])
    }
    catch(evt) {
        console.error(evt);
    }
}

async function createProvider() {
    await Provider.destroy({ where: {}});

    try {
        await Provider.bulkCreate([
            entryProvider('Dreamworks'),
            entryProvider('Sony'),
            entryProvider('Netflix'),
            entryProvider('Warner Bros.'),
        ])
    }
    catch(evt) {
        console.error(evt);
    }
}

async function createLicense() {
    await License.destroy({ where: {}});

    try {
        await License.bulkCreate([
            entryLicense('2019-02-10','2019-03-10'),
            entryLicense('2019-03-10','2019-03-10'),
            entryLicense('2019-01-10','2019-05-10'),
            entryLicense('2019-02-10','2019-05-10'),
        ])
    }
    catch(evt) {
        console.error(evt);
    }
}
async function createVideo() {
    await Video.destroy({ where: {}});

    try {
        await Video.bulkCreate([
            entryVideo('Peter Rabbit',
                'Feature adaptation of Beatrix Potter\'s classic tale of a rebellious rabbit trying to sneak into a farmer\'s vegetable garden.', 
                2, 2, 1),
            entryVideo('Hotel Transylvania 3: Summer Vacation',
                'Count Dracula and company participate in a cruise for sea-loving monsters, unaware that their boat is being commandeered by the monster-hating Van Helsing family.', 
                2, 2, 1),
            entryVideo('The Equalizer 2',
                'Robert McCall serves an unflinching justice for the exploited and oppressed, but how far will he go when that is someone he loves?', 
                2, 2, 1),
            entryVideo('Spider-Man: Into the Spider-Verse',
                'Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.', 
                2, 2, 1),
            entryVideo('Venom',
                'A failed reporter is bonded to an alien entity, one of many entities who have invaded Earth. But the entity takes a liking to Earth and decides to protect it.', 
                2, 2, 1),
            entryVideo('Bird Box',
                'Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate bid to reach safety.', 
                3, 3, 1),
            entryVideo('To All the Boys I\'ve Loved Before',
                'A teenage girl\'s secret love letters are exposed and wreak havoc on her love life.', 
                3, 3, 1),
            entryVideo('Roma',
                'A year in the life of a middle-class family\'s maid in Mexico City in the early 1970s.', 
                3, 3, 1),
            entryVideo('Set It Up',
                'Two corporate executive assistants hatch a plan to match-make their two bosses.', 
                3, 3, 1),
            entryVideo('Outlaw King',
                'A true David vs. Goliath story of how the 14th century Scottish \'Outlaw King\' Robert the Bruce used cunning and bravery to defeat the much larger and better equipped occupying English army.', 
                3, 3, 1),
            entryVideo('Batman Ninja',
                'Batman, along with a number of his allies and adversaries, finds himself transplanted from modern Gotham City to feudal Japan.', 
                4, 4, 1),
            entryVideo('The Dark Knight',
                'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.', 
                4, 4, 1),
            entryVideo('Suicide Squad',
                'A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse.', 
                4, 4, 1),
            entryVideo('Wonder Woman',
                'When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.', 
                4, 4, 1),
            entryVideo('Green Book',
                'A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.', 
                1, 1, 1),
            entryVideo('First Man',
                'A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969.', 
                1, 1, 1),
        ])
    }
    catch(evt) {
        console.error(evt);
    }
}

async function createWatched() {
    try {
        const videosData = await Video.findAll();
        const subscribersData = await Subscriber.findAll();
        await subscribersData[0].addVideos([
            videosData[1],videosData[2],videosData[1],
            videosData[0],videosData[2],videosData[1],
            videosData[1],videosData[0],videosData[4],
            videosData[1],videosData[5],videosData[1],
            videosData[6],videosData[2],videosData[1],
        ]);
        await subscribersData[0].save();

        await subscribersData[1].addVideos([
            videosData[9],videosData[2],videosData[1],
            videosData[0],videosData[9],videosData[1],
            videosData[9],videosData[8],videosData[4],
            videosData[1],videosData[5],videosData[1],
            videosData[6],videosData[2],videosData[9],
        ]);
        await subscribersData[1].save();

        await subscribersData[2].addVideos([
            videosData[9],videosData[2],videosData[1],
            videosData[0],videosData[9],videosData[4],
            videosData[9],videosData[4],videosData[4],
            videosData[4],videosData[5],videosData[1],
            videosData[6],videosData[4],videosData[9],
        ]);
        await subscribersData[2].save();

        await subscribersData[3].addVideos([
            videosData[6],videosData[2],videosData[1],
            videosData[0],videosData[6],videosData[4],
            videosData[9],videosData[4],videosData[6],
            videosData[6],videosData[5],videosData[1],
            videosData[6],videosData[6],videosData[9],
        ]);
        await subscribersData[3].save();

        await subscribersData[4].addVideos([
            videosData[9],videosData[7],videosData[1],
            videosData[0],videosData[7],videosData[4],
            videosData[0],videosData[7],videosData[4],
            videosData[4],videosData[7],videosData[1],
            videosData[6],videosData[7],videosData[0],
        ]);
        await subscribersData[4].save();


        const videos = videosData.map(value => value.dataValues);
        const subscribers = subscribersData.map( async (value) => {
            return value.dataValues;
            })

        console.log(Object.keys(videosData[0].__proto__));
        console.log(Object.keys(subscribersData[0].__proto__));

        // console.log(videos);
        // console.log(subscribers);

    } 
    catch (evt) {
        console.error(evt);
    }
}

 async function seed() {
    try { 
     await createSubscription();
     await createBillingInfo();
     await createCard();
     await createSubscriber();
     await createCatalog();
     await createProvider();
     await createLicense();
     await createVideo();
     await createWatched();
    }
    catch(evt) {
        console.error(evt);
    }
    finally {
        process.exit();
    }
 }

 // run command
 seed()