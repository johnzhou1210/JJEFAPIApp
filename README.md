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