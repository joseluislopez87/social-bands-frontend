import faker from 'faker';
import {sample} from 'lodash';
import { format } from 'date-fns';

/* Static data */

// Instruments:
const instruments = [
  {
    'id': 0,
    'name': 'guitar-acoustic',
    'display_name': 'Acoustic guitar',
  },
  {
    'id': 1,
    'name': 'guitar-electric',
    'display_name': 'Electric guitar',
  },
  {
    'id': 2,
    'name': 'guitar-bass',
    'display_name': 'Bass guitar',
  },
  {
    'id': 3,
    'name': 'keyboard',
    'display_name': 'Keyboard',
  }
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

/* Generated data */

// Faker maker
const makeData = (createFunction, num = 5) => {
  return Array(num)
    .fill(null)
    .map(createFunction);
}

// Profiles:
const createProfile = user_id => {
  const location = `${faker.address.city()}, ${faker.address.country()}`;

  return {
    id: faker.random.uuid(),
    user_id: user_id,
    display_name: faker.name.firstName(),
    picture: faker.image.avatar(),
    location: location,
    bio: faker.lorem.paragraph(),
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
const notifications = makeData(createNotification, 4);

const profiles = [];
users.map(user =>
  profiles
    .push(createProfile(user.id)
));

// Export:
export {
  users,
  friends,
  notifications,
  instruments,
  requests,
  conversations,
  profiles,
  styles,
  proficiencies,
};