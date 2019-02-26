const {
    sequelize, Subscriber, Subscription, BillingInfo, 
    Card, Catalog, Video, Provider, License,
} = require('./models');

const entrySubscriber = (name, password) => {
    return {
        name: name,
        password: password,
    }
}
const entrySubscription = (name, stream_limit, price) => {
    return {
        name: name,
        stream_limit: stream_limit,
        price: price,
    }
}
const entryCard = (number, cvc, exp_date, name_on_card) => {
    return {
        number: number,
        cvc: cvc,
        exp_date: exp_date,
        name_on_card: name_on_card,
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
const entryVideo = (name, description) => {
    return {
        name: name,
        description: description,
    }
}



async function createSubscriber() {
    await Subscriber.destroy({ where: {}});
    try {
        await Subscriber.bulkCreate([
            entrySubscriber('UserA','pass'),
            entrySubscriber('UserB','pass'),
            entrySubscriber('UserC','pass'),
            entrySubscriber('UserD','pass'),
            entrySubscriber('UserE','pass'),
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
            entryCard('5479384394795295','946','2024-01-01','Jane E Doe'),
            entryCard('0728734795126983','055','2023-01-01','John A Doe'),
            entryCard('9319526965293487','369','2027-01-01','Jason B Doe'),

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
            entryVideo('Peter Rabbit','Feature adaptation of Beatrix Potter\'s classic tale of a rebellious rabbit trying to sneak into a farmer\'s vegetable garden.'),
            entryVideo('Hotel Transylvania 3: Summer Vacation','Count Dracula and company participate in a cruise for sea-loving monsters, unaware that their boat is being commandeered by the monster-hating Van Helsing family.'),
            entryVideo('The Equalizer 2','Robert McCall serves an unflinching justice for the exploited and oppressed, but how far will he go when that is someone he loves?'),
            entryVideo('Spider-Man: Into the Spider-Verse','Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.'),
            entryVideo('Venom','A failed reporter is bonded to an alien entity, one of many entities who have invaded Earth. But the entity takes a liking to Earth and decides to protect it.'),
            entryVideo('Bird Box','Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate bid to reach safety.'),
            entryVideo('To All the Boys I\'ve Loved Before','A teenage girl\'s secret love letters are exposed and wreak havoc on her love life.'),
            entryVideo('Roma','A year in the life of a middle-class family\'s maid in Mexico City in the early 1970s.'),
            entryVideo('Set It Up','Two corporate executive assistants hatch a plan to match-make their two bosses.'),
            entryVideo('Outlaw King','A true David vs. Goliath story of how the 14th century Scottish \'Outlaw King\' Robert the Bruce used cunning and bravery to defeat the much larger and better equipped occupying English army.'),
            entryVideo('Batman Ninja','Batman, along with a number of his allies and adversaries, finds himself transplanted from modern Gotham City to feudal Japan.'),
            entryVideo('The Dark Knight','When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.'),
            entryVideo('Suicide Squad','A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse.'),
            entryVideo('Wonder Woman','When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.'),
            entryVideo('Green Book','A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.'),
            entryVideo('First Man','A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969.'),
        ])
    }
    catch(evt) {
        console.error(evt);
    }
}

 async function seed() {
    try { 
     await createSubscription();
     await createCard();
     await createBillingInfo();
     await createSubscriber();
     await createCatalog();
     await createProvider();
     await createLicense();
     await createVideo();
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