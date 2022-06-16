const Sequelize = require("sequelize");
const { STRING, INTEGER, BIGINT } = Sequelize;
const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme_express_spa"
);

const Pirate = conn.define("pirates", {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

const Strawhat = conn.define("strawhats", {
  pirateId: {
    type: INTEGER,
    allowNull: false,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: STRING,
  },
  worth: {
    type: BIGINT,
  },
});

const Whitebeard = conn.define("whitebeards", {
  pirateId: {
    type: INTEGER,
    allowNull: false,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: STRING,
  },
  worth: {
    type: BIGINT,
  },
});

const Roger = conn.define("rogers", {
  pirateId: {
    type: INTEGER,
    allowNull: false,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: STRING,
  },
  worth: {
    type: BIGINT,
  },
});

Strawhat.belongsTo(Pirate);
Whitebeard.belongsTo(Pirate);
Roger.belongsTo(Pirate);

async function syncSeed() {
  await conn.sync({ force: true });
  const [strawHats] = await Promise.all([Pirate.create({ name: "Strawhats" })]);

  const [
    luffy,
    zoro,
    nami,
    usopp,
    sanji,
    chopper,
    robin,
    franky,
    brook,
    jinbei,
  ] = await Promise.all([
    Strawhat.create({
      pirateId: strawHats.id,
      name: "Monkey D. Luffy",
      role: "Captain",
      worth: 1500000000,
    }),
    Strawhat.create({
      pirateId: strawHats.id,
      name: "Roronoa Zoro",
      role: "Swordsman",
      worth: 320000000,
    }),
    Strawhat.create({
      pirateId: strawHats.id,
      name: "Nami",
      role: "Navigator",
      worth: 66000000,
    }),
    Strawhat.create({
      pirateId: strawHats.id,
      name: "Usopp",
      role: "Sniper",
      worth: 200000000,
    }),
    Strawhat.create({
      pirateId: strawHats.id,
      name: "Vinsmoke Sanji",
      role: "Chef",
      worth: 330000000,
    }),
    Strawhat.create({
      pirateId: strawHats.id,
      name: "Tony Tony Chopper",
      role: "Doctor",
      worth: 100,
    }),
    Strawhat.create({
      pirateId: strawHats.id,
      name: "Nico Robin",
      role: "Archaeologist",
      worth: 130000000,
    }),
    Strawhat.create({
      pirateId: strawHats.id,
      name: "Franky",
      role: "Shipwright",
      worth: 94000000,
    }),
    Strawhat.create({
      pirateId: strawHats.id,
      name: "Brook",
      role: "Musician",
      worth: 83000000,
    }),
    Strawhat.create({
      pirateId: strawHats.id,
      name: "Jinbei",
      role: "Helmsman",
      worth: 438000000,
    }),
  ]);

  const [whitebeards] = await Promise.all([
    Pirate.create({ name: "Whitebeards" }),
  ]);

  const [edward, marco, ace, jozu, vista, izou] = await Promise.all([
    Whitebeard.create({
      pirateId: whitebeards.id,
      name: "Edward Newgate",
      role: "Captain",
      worth: 5046000000,
    }),
    Whitebeard.create({
      pirateId: whitebeards.id,
      name: "Marco the Phoenix",
      role: "Commander",
      worth: 1374000000,
    }),
    Whitebeard.create({
      pirateId: whitebeards.id,
      name: "Portgas D. Ace",
      role: "Commander",
      worth: 550000000,
    }),
    Whitebeard.create({
      pirateId: whitebeards.id,
      name: "Diamond Jozu",
      role: "Commander",
      worth: 0,
    }),
    Whitebeard.create({
      pirateId: whitebeards.id,
      name: "Flower swords Vista",
      role: "Commander",
      worth: 0,
    }),
    Whitebeard.create({
      pirateId: whitebeards.id,
      name: "Izou",
      role: "Commander",
      worth: 0,
    }),
  ]);

  const [rogers] = await Promise.all([Pirate.create({ name: "Rogers" })]);
  console.log("keys", Object.keys(rogers));
  const [roger, rayleigh, oden, toki, crocus] = await Promise.all([
    Roger.create({
      pirateId: rogers.id,
      name: "Gol D. Roger",
      role: "Captain",
      worth: 5564800000,
    }),
    Roger.create({
      pirateId: rogers.id,
      name: "Silvers Rayleigh",
      role: "Co-captain",
      worth: 0,
    }),
    Roger.create({
      pirateId: rogers.id,
      name: "Kozuki Oden",
      role: "Officer",
      worth: 0,
    }),
    Roger.create({
      pirateId: rogers.id,
      name: "Kozuki Toki",
      role: "Officer",
      worth: 0,
    }),
    Roger.create({
      pirateId: rogers.id,
      name: "Crocus",
      role: "Doctor",
      worth: 0,
    }),
  ]);
}

module.exports = {
  syncSeed,
  Pirate,
  Strawhat,
  Whitebeard,
  Roger,
};
