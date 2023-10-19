## Jerma Pages Homepage

The homepage acts as a hub to explore a variety of sites that have been uploaded to the Jerma Pages repository and credit their creators.

## Adding your own page to Jerma.io

First go to [/public/content.json](https://github.com/JermaSites/jerma-homepage/blob/main/public/content.json)

Here's where the data for all of the pages and it's authors is stored.

All it takes is to add your page data as an object inside the "posts" array of the "Our Pages" section like so:

```bash
{
  ...
  "sections": [
    {
      "title": "Our Pages",
      "posts": [
        {
          "title": "My Jerma Site",
          "description": "This site does some jerma stuff",
          "authors": [
            {
              "name": "MyHandleOrNickname",
              "url": "github.com/MyGithubAccount"
            }
          ],
          "url": "myjermasite.jerma.io"
        },
  ...
}
```

Note: Remember to keep the url formats as they are, just domain and route. Do not use "https://".

Note2: Your avatar in the site will be taken from your github account in the "url". If you want to use a custom avatar OR want your profile in the homepage to redirect to somewhere else (e.g. twitter), you must also add an "avatar" property

If you have a couple or more sites that relate to eachother or follow a saga, you can add them to their own section in a similar way, by adding a new object to the "sections" array.

Once your change is up, you will see that your site and username are on the homepage now.

That's All Folks!

## Dev

This is a [VITE](https://vitejs.dev/) project using React + Typescript.
You can find more info on how to run this project locally [here](https://vitejs.dev/guide/#community-templates).

##

hmu on discord @stabswell if you need anything :)
