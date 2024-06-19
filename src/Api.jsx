export const WIKIPEDIA_API_ENDPOINT =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

export const RANDOM_API_ENDPOINT =
  "https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1&origin=*";

//limiting the results to just 20 for normal search api
//If the limit is not set then thousands of searh results would be generated and reduce the performance.
//and limiting results to just 1 for random article api to get just 1 random article.
