import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import {IPosts} from "../components/Types/Types";


const fakePostsArray = [
    {
        id: '1.',
        title: 'Greetings',
        body: 'Welcome to my Fake Post service. Here you can add and delete Posts. This website is made by using React and TypeScript. Down bellow ' +
            'will be some interesting facts about Capybaras'
    },
    {
        id: '2.',
        title: 'Capybaras size',
        body: 'Standing close to 2 feet tall at the shoulder and weighing up to 150 pounds, capybaras (Hydrochoerus hydrochaeris) are the largest ' +
            'rodents in the world. They have a barrel-shaped body and no tail, and are significantly larger than their closest relatives, guinea ' +
            'pigs and cavies. These semiaquatic mammals are found throughout South America and portions of Central America near marshes, grasslands, ' +
            'and forests where water is readily available.'
    },
    {
        id: '3.',
        title: 'Capybaras Teeth',
        body: 'Capybaras have two long, front teeth, and like other rodents, these teeth never stop growing.Their incisors are strong and chisel-like,' +
            ' making them highly effective at cutting through grass. In order to keep their teeth to a reasonable length, capybaras must wear them ' +
            'down by grinding and chewing on food or bark. Their molars keep growing throughout their life as well, but they wear down from the ' +
            'constant grinding capybaras do to masticate their greens.'
    },
    {
        id: '4.',
        title: 'Vocalizations',
        body: 'Capybaras are highly communicative with members of their groups. They make unique sounds to share important information — warning of danger, ' +
            'signaling a move, and keeping track of their young. The sounds include teeth-chattering, squealing, whining, whistling, crying, barking, ' +
            'and clicking; each sound has a different meaning and is specific to their individual social group. Capybara young are particularly vocal, ' +
            'emitting sounds almost constantly.'
    }
]

const mock = new AxiosMockAdapter(axios);
mock.onGet('/posts').reply(200, {posts: fakePostsArray});

export async function getFakePosts() {
    const response = await axios.get('/posts');
    const posts: IPosts[] = await response.data.posts;
    return posts;
}