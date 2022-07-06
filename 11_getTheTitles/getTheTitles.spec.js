const getTheTitles = require('./getTheTitles')

describe('getTheTitles', () => {
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name'
      },
      {
        title: 'Book3',
        author: 'Name'
      },
      {
        title: 'Book4',
        author: 'Name'
      },
      {
        title: 'Book5',
        author: 'Name'
      },
      {
        title: 'Book6',
        author: 'Name'
      },
      {
        title: 'Book7',
        author: 'Name'
      },
      {
        title: 'Book8',
        author: 'Name'
      },
      {
        title: 'Book412',
        author: 'Name2'
      }
    ]

  test('gets titles', () => {
    expect(getTheTitles(books)).toEqual(['Book','Book2','Book3','Book4','Book5','Book6','Book7','Book8','Book412']);
  });
});
