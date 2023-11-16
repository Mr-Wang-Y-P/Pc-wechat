import axios from 'axios';

export const getPeopleList = async () => {
    const res = await axios.get('https://www.fastmock.site/mock/8a4e8f4d6e7090691ead75e71ec7ab93/wechat/people')
    return res.data
}