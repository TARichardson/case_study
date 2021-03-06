require('dotenv').config()
const { Sequelize } = require('sequelize');

const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;

const sequelize = new Sequelize({
    database: 'case_study',
    username: USER,
    password: PASS,
    dialect: 'postgres',
    operatorsAliases: false,
    define: {
        underscored: true
    }
});

const Subscriber = sequelize.define('subscriber', {
    name: Sequelize.STRING,
    password: Sequelize.STRING
});

const Subscription = sequelize.define('subscription',{
    name: Sequelize.STRING,
    stream_limit: Sequelize.BIGINT,
    price:  Sequelize.INTEGER
});

const BillingInfo = sequelize.define('billing_info', {
    address: Sequelize.STRING,
    billing_date: Sequelize.DATEONLY,
    last_payment_date: Sequelize.DATEONLY,
    next_payment_date: Sequelize.DATEONLY
});

const Card = sequelize.define('card', {
    number: Sequelize.BIGINT,
    cvc: Sequelize.INTEGER,
    exp_date: Sequelize.DATEONLY,
    name_on_card: Sequelize.STRING
});

const Catalog = sequelize.define('catalog', {
    name: Sequelize.STRING
});

const Video = sequelize.define('video', {
    name: Sequelize.STRING,
    description: Sequelize.STRING
});

const Provider = sequelize.define('provider', {
    name: Sequelize.STRING
});

const License = sequelize.define('license', {
    start_date: Sequelize.DATEONLY,
    end_date: Sequelize.DATEONLY
});



Subscriber.belongsToMany(Video, {through: "views", unique: false});
Video.belongsToMany(Subscriber, {through: "views", unique: false});
License.hasMany(Video);
Provider.hasMany(Video);
Video.belongsTo(Catalog);
Subscription.hasMany(Subscriber);
BillingInfo.hasOne(Subscriber);
BillingInfo.hasMany(Card);
const View = sequelize.define('views', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    subscriber_id: {
        type: Sequelize.INTEGER,
        unique: false,
        references: {
          model: Subscriber,
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    video_id: {
        type: Sequelize.INTEGER,
        unique: false,
        references: {
          model: Video,
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
  });


module.exports = {
    sequelize,
    Subscriber,
    Subscription,
    BillingInfo,
    Card,
    Catalog,
    Video,
    Provider,
    License,
    View,
};