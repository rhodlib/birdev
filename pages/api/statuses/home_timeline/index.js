const timeline = [
    {
        id: '0',
        username: 'Rhodlib',
        name: 'Rodo Talibs',
        avatar:
            'https://pbs.twimg.com/profile_images/964699249073180672/1QI9yg5C_400x400.jpg',
        message: 'Que onda con este clon de twitter, malisimo',
    },
    {
        id: '1',
        username: 'Maxovich',
        name: 'Maxi Vich',
        avatar: 'https://www.skullscan.com/images/example-photo-web.jpg',
        message: 'Que lindo dia para tomar una birra',
    },
    {
        id: '2',
        username: 'Raulete',
        name: 'Raw Alejandro',
        avatar: 'https://material-ui.com/static/images/avatar/2.jpg',
        message: 'Tamo ready pal pary',
    },
    {
        id: '3',
        username: 'Rhodlib',
        name: 'Rodo Talibs',
        avatar:
            'https://pbs.twimg.com/profile_images/964699249073180672/1QI9yg5C_400x400.jpg',
        message: 'Que onda con este clon de twitter, malisimo',
    },
    {
        id: '4',
        username: 'Maxovich',
        name: 'Maxi Vich',
        avatar: 'https://www.skullscan.com/images/example-photo-web.jpg',
        message: 'Que lindo dia para tomar una birra',
    },
    {
        id: '5',
        username: 'Raulete',
        name: 'Raw Alejandro',
        avatar: 'https://material-ui.com/static/images/avatar/2.jpg',
        message: 'Tamo ready pal pary',
    },
    {
        id: '6',
        username: 'Rhodlib',
        name: 'Rodo Talibs',
        avatar:
            'https://pbs.twimg.com/profile_images/964699249073180672/1QI9yg5C_400x400.jpg',
        message: 'Que onda con este clon de twitter, malisimo',
    },
    {
        id: '7',
        username: 'Maxovich',
        name: 'Maxi Vich',
        avatar: 'https://www.skullscan.com/images/example-photo-web.jpg',
        message: 'Que lindo dia para tomar una birra',
    },
    {
        id: '8',
        username: 'Raulete',
        name: 'Raw Alejandro',
        avatar: 'https://material-ui.com/static/images/avatar/2.jpg',
        message: 'Tamo ready pal pary',
    },
    {
        id: '9',
        username: 'Rhodlib',
        name: 'Rodo Talibs',
        avatar:
            'https://pbs.twimg.com/profile_images/964699249073180672/1QI9yg5C_400x400.jpg',
        message: 'Que onda con este clon de twitter, malisimo',
    },
    {
        id: '10',
        username: 'Maxovich',
        name: 'Maxi Vich',
        avatar: 'https://www.skullscan.com/images/example-photo-web.jpg',
        message: 'Que lindo dia para tomar una birra',
    },
    {
        id: '11',
        username: 'Raulete',
        name: 'Raw Alejandro',
        avatar: 'https://material-ui.com/static/images/avatar/2.jpg',
        message: 'Tamo ready pal pary',
    },
];

export default (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(timeline));
};
