import faker from 'faker';
import {sample} from 'lodash';

// Faker maker
const makeData = (createFunction, num = 5) => {
  return Array(num)
    .fill(null)
    .map(createFunction);
}

// Users:
const createUser = () => {
  const displayName = faker.name.firstName();
  const name = displayName.toLowerCase();
  const uuid = faker.random.uuid();
  uuidsStore.push(uuid);

  return {
    id: uuid,
    name: name,
    display_name: displayName,
    email: faker.internet.email(),
    picture: faker.image.avatar(),
    isOnline: faker.random.boolean(),
  }
}

// Instruments:
const instruments = [
  {
    'id': 0,
    'name': 'Electric guitar',
    'icon': 'guitar-electric',
  },
  {
    'id': 1,
    'name': 'Drums',
    'icon': 'drums',
  },
]

// Friends:
const createFriend = () => {
  return {
    id: faker.random.uuid(),
    friend_id: sample(uuidsStore),
  }
}

// Requests
const createRequest = () => {
  return {
    id: faker.random.uuid(),
    from_user_id: sample(uuidsStore),
    timestamp: faker.date.past(),
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

// Export:
export {
  users,
  friends,
  notifications,
  instruments,
  requests,
  conversations
};