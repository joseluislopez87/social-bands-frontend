import faker from 'faker';
import { sample, random } from 'lodash';
import { format } from 'date-fns';

/* Static data */

// Instruments:
const instruments = [
  {
    'id': 0,
    'name': 'guitar-acoustic'
  },
  {
    'id': 1,
    'name': 'guitar-electric'
  },
  {
    'id': 2,
    'name': 'guitar-bass'
  },
  {
    'id': 3,
    'name': 'keyboard'
  },
  {
    'id': 4,
    'name': 'drums'
  },
]

// Styles:
const styles = [
  {
    'id': 0,
    'name': 'rock',
  },
  {
    'id': 1,
    'name': 'metal',
  },
  {
    'id': 2,
    'name': 'metal-heavy'
  },
  {
    'id': 3,
    'name': 'jazz',
  },
]

// Proficiencies:
const proficiencies = [
  {
    'id': 0,
    'name': 'beginner',
  },
  {
    'id': 1,
    'name': 'intermediate',
  },
  {
    'id': 2,
    'name': 'advanced',
  },
  {
    'id': 3,
    'name': 'master',
  },
]

const current_user = {
  id: 0,
  username: 'mathieu',
  email: 'chatillon.mathieu@gmail.com',
  is_online: true,
}

/* Generated data */

// Faker maker
const makeData = (createFunction, num = 5) => {
  return Array(num)
    .fill(null)
    .map(createFunction);
}

const createProfileInstrument = () => {
  const instrument = sample(instruments);
  const proficiency = sample(proficiencies);

  return {
    id: faker.random.uuid(),
    instrument_id: instrument.id,
    proficiency: proficiency.id,
  }
}

// Profiles:
const createProfile = user_id => {
  const location = `${faker.address.city()}, ${faker.address.country()}`;

  const instruments = makeData(createProfileInstrument, random(1, 3));

  return {
    id: faker.random.uuid(),
    user_id: user_id,
    display_name: faker.name.firstName(),
    picture: faker.image.avatar(),
    location: location,
    bio: faker.lorem.paragraph(),
    instruments: instruments
  }
}

// Users:
const createUser = () => {
  const uuid = faker.random.uuid();
  uuidsStore.push(uuid);

  return {
    id: uuid,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    is_online: faker.random.boolean(),
  }
}

// Friends:
const createFriend = () => {
  return {
    id: faker.random.uuid(),
    friend_user_id: sample(uuidsStore),
  }
}

// Requests
const createRequest = () => {
  let startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 1);
  let endDate = new Date();

  startDate = format(startDate, 'yyy-M-dd');
  endDate = format(endDate, 'yyy-M-dd');
  
  const createdAt = faker.date.between(startDate, endDate);

  return {
    id: faker.random.uuid(),
    from_user_id: sample(uuidsStore),
    created_at: createdAt,
    type: 'friend-request',
  }
}

// Conversations:
const createConversation = () => {
  return {
    id: faker.random.uuid(),
    contact_user_id: sample(uuidsStore),
    last_message_at: faker.date.past(),
    unreads_count: faker.random.number(8),
    latest_message: faker.lorem.sentence(6),
  }
}

// Messages:
const createMessage = (sender_user_id) => {
  return {
    id: faker.random.uuid(),
    sent_at: faker.date.past(),
    content: faker.lorem.paragraph(2),
    sender_user_id: sender_user_id,
  }
}

// Notifications
const notificationsTypes = [
  'friend-request',
  'new-message',
]

const createNotification = () => {
  return {
    id: faker.random.uuid(),
    timestamp: faker.date.past(),
    label: 'Friend request: Pedro',
    action_label: 'Go to action',
    action_url: '/friends/requests',
    type: sample(notificationsTypes),
    image: 'https://placehold.it/300x300',
  }
}

const uuidsStore = [];

const users = makeData(createUser, 50);
const friends = makeData(createFriend, 5);
const requests = makeData(createRequest, 2);
const conversations = makeData(createConversation);
const notifications = makeData(createNotification, 10);

const received_messages = makeData(createMessage, 10);
const sent_messages = makeData(() => createMessage(0), 10);

const messages = received_messages.concat(sent_messages).sort((a, b) => a.sent_at > b.sent_at ? 1 : -1);

const profiles = [];
users.map(user =>
  profiles
    .push(createProfile(user.id)
));

// Export:
export {
  current_user,
  users,
  friends,
  notifications,
  instruments,
  requests,
  conversations,
  profiles,
  styles,
  proficiencies,
  messages,
};