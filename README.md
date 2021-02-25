<p align="center"><img height="200" src="https://github.com/ahampriyanshu/norm/raw/media/logo.png"></p>
<h5 align="center">a funny api for funny people</h5>

## API Endpoints

* [https://normhasanapi.herokuapp.com/comic](https://normhasanapi.herokuapp.com/comic)
* [https://normhasanapi.herokuapp.com/comical](https://normhasanapi.herokuapp.com/comical)

## Comic Endpoints

```json
[
{
   "id": 1,
   "birthName": "Norman Gene Macdonald",
   "name": "normmacdonald",
   "mother": "Ferne Macdonald",
   "father": "Percy Lloyd Macdonald",
   "dateOfBirth": "1959-10-17",
   "placeOfBirth": "Québec City, Québec, Canada",
   "alive": true,
   "diedOn": null,
   "height": "6'2 (1.88 m)",
   "nationality": "canadian",
   "workingSince": 1985,
   "education": [
      "Quebec High School, Quebec, Canada",
      "Gloucester High School, Ontario, Canada"
   ],
   "twitter": "https://twitter.com/normmacdonald",
   "instagram": "https://www.instagram.com/therealnormmacdonald",
   "wikipedia": "https://en.wikipedia.org/wiki/Norm_Macdonald",
   "imdb": "https://www.imdb.com/name/nm0005172",
   "officialWebsite": "https://www.normmacdonald.tv",
   "youtube": [
      "https://www.youtube.com/c/normmacdonald/"
   ],
   "specials": [
      "Ridiculous (2006)",
      "Me Doing Stand-Up (2011)",
      "Hitler's Dog, Gossip & Trickery (2017)"
   ],
   "movies": [
      "Billy Madison (1995)",
      "The People vs. Larry Flynt (1996)",
      "Dirty Work (1998)",
      "Dr. Dolittle (1998)",
      "Deuce Bigalow: Male Gigolo (1999)",
      "Man on the Moon (1999)",
      "Screwed (2000)",
      "The Animal (2001)",
      "The 7th Dwarf (2014)",
      "The Ridiculous Six (2015)",
      "Treasure Hounds (2017)",
      "Klaus (2019)"
   ],
   "videoShows": [
      "The Dennis Miller Show",
      "Roseanne (1992-1993)",
      "Saturday Night Live (1993–1998)",
      "The Norm Show",
      "A Minute with Stan Hooper"
   ],
   "talkShows": [
      "Sports Show with Norm Macdonald (2011)",
      "Norm Macdonald Live (2013)",
      "Norm Macdonald Has a Show (2018)",
      "Quarantined (2020)"
   ],
   "audioShows": null,
   "books": [
      "Based on a True Story : Not a Memoir (2016)"
   ]
}
]
```

### Get a random comic
[api/comic](https://normhasanapi.herokuapp.com/comic)

### Get <integer> number of comic
[api/comic/integer](https://normhasanapi.herokuapp.com/comic/6)

### Get a comic by id
[api/comic/id/integer](https://normhasanapi.herokuapp.com/comic/id/12)

### Get a comic by name
[api/comic/name/string](https://normhasanapi.herokuapp.com/comic/name/billburr)

### Get a comic by nationality
[api/comic/country/string](https://normhasanapi.herokuapp.com/comic/country/indian)

### Get a living/dead comic
[api/comic/isAlive/boolean](https://normhasanapi.herokuapp.com/comic/isAlive/false)

### Get a comic working since
[api/comic/since/integer](https://normhasanapi.herokuapp.com/comic/since/1975)
### Get a comic by age
[api/comic/minAge/integer](https://normhasanapi.herokuapp.com/comic/minAge/40)<br>
[api/comic/maxAge/integer](https://normhasanapi.herokuapp.com/comic/maxAge/60)<br>
[api/comic/bornAfter/integer](https://normhasanapi.herokuapp.com/comic/bornAfter/1980)<br>
[api/comic/bornBefore/integer](https://normhasanapi.herokuapp.com/comic/bornBefore/1960)

## Comical Endpoints

```json
[
{
  "id": 11,
  "content": "When the President does it, that means that it's not illegal.",
  "by": "Richard M. Nixon"
}
]
```

### Get a random joke/quote/fact
[api/comical](https://normhasanapi.herokuapp.com/comical)

### Get a joke/quote/fact by id
[api/comical/id/integer](https://normhasanapi.herokuapp.com/comical/id/12)

### Get <integer> number of jokes/quotes/facts
[api/comical/integer](https://normhasanapi.herokuapp.com/comical/8)

## Contributing

* Add your favourite comic or quote/joke in the raw data folder by making a PR.(Take a look at 000.json in the respective folder)

## License

This project is licensed under the [MIT License](LICENSE.md).

## Built With

* [Express](https://expressjs.com/)
* [Lodash](https://lodash.com/)
* [Heroku](https://devcenter.heroku.com/articles/getting-started-with-go)