# Team JJEF API App
- CSCI 39548 04 PWD Assignment 5

# APIs Used
- Jikan REST API
  - API Documentation: https://docs.api.jikan.moe
  - https://github.com/jikan-me/jikan-rest
  - ![JikanAPIPostman](https://github.com/johnzhou1210/JJEFAPIApp/assets/83607969/c0c198de-c41b-489f-aaf2-812e896c09c0)
  - Used Jikan to fetch random anime entries from myanimelist.net.
      - Sometimes the response from the get request returns an empty .json file, but it works ~95% of the time.

- Drew Thoennes at https://github.com/drewthoennes/Bored-API
  - The Bored API
  - ![successful The Bored API call](https://github.com/johnzhou1210/JJEFAPIApp/assets/143558707/4cfcd4d4-3f62-4ef7-a992-27896b2b009e)
  - API Documentation: https://www.boredapi.com/documentation
  - Used The Bored API to fetch different activities that the user can do if they're bored and displayed them. I used the price endpoint to test the API first, and activities didn't show up for specific prices. I assume they didn't have enough data for certain price points. Works fine choosing the type of activity though.


- The Cat API
  - ![postmanss](https://github.com/johnzhou1210/JJEFAPIApp/assets/80719003/91c5911e-3999-4d7a-9c10-838ff3f9f9eb)
  - https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
  - Used the The Cat API to fetch random cat pictures. Had to go through several links since some of them are not working. This link worked fine for me.
 
- PokeAPI
  - API Documentation: https://pokeapi.co/docs/graphql
  - https://github.com/PokeAPI/pokeapi
  - ![image](https://github.com/johnzhou1210/JJEFAPIApp/assets/73344661/cea6949e-a732-4819-bfea-215394af0a9e)
  - Pokemon API used to fetch pokemon randomly.
