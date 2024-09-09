# NASA Progressive Web App
![overview](https://github.com/lamartm/web-app-from-scratch-2021/blob/master/images/3kbl.png)
https://lit-coast-91448.herokuapp.com/

## Description

In this project I made a progressive web app, in which you have an overview of the latest photo's from the martian rovers, and a detail page of every photo. In the detail page you can view information like when the rover launched, which camera its using, how long it has been on Mars etc.. The app has been improved to be fully usable offline, and the loading times have been drastically improved

## Caching
With help of the service worker it's possible to view the web app offline, by caching the most important files on the first load of the app. Whenever you visit a page within the web app though, all of its content will be cached so that the user experience will be fast and make it possible for you to visit those pages later even without internet.

## Optimalisations

### Minifying
All of the css and javascript files that are served to the site have been minified (with help of gulp) to improve loading times.

### Image Compression

While auditing the site to see where it would be possible to improve loading times, I've noticed that the images took most of the loading time away. Of course the images are a key part of the site, but I figured that I didn't need the images at the frontpage to be large, since if a user is interested in a picture they can simply click on it to see an enlarged version. That's why I decided to reduce the size of all the images that get called from the NASA api. These are the results:

#### Before
![1](https://github.com/lamartm/progressive-web-apps-2021/blob/master/public/images/1.PNG)
![2](https://github.com/lamartm/progressive-web-apps-2021/blob/master/public/images/2.PNG)


#### After
![3](https://github.com/lamartm/progressive-web-apps-2021/blob/master/public/images/3.PNG)
![4](https://github.com/lamartm/progressive-web-apps-2021/blob/master/public/images/4.PNG)

As you can see, it's a drastic difference in speed, going from 17 seconds to now 2 seconds.
## Installation

Clone the repo:
```https://github.com/lamartm/progressive-web-apps-2021.git```

Navigate to this map and run the following command:
``` npm install ```

To use this project:
``` npm run dev ```

## NASA Open API
For this project I'm using one of the NASA api's (Mars Rover API) to get the data and images from the rovers. The data includes things like which camera was used, the earth date the picture was taken, the date in martian time, landing date and launch date etc.. You're required to get your own key to use this API
https://api.nasa.gov/

### Endpoints
With the API you can filter with the endpoints which photo's and rover you want. From the following URL https://api.nasa.gov/mars-photos/api/v1/rovers/ you can filter on the following endpoints:

- Camera
- Solar time
- Earth date
- Status
- Rover

I'll be specifically filtering on Rover and solar time to get the data I want.

### API Response
From the endpoint I'm using: https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?sol=3000&api_key=6vA8UNxGma5qV8Q3f6Rr7v3vPOMmUhyxQqVwkmLs you get the following JSON object:
```
{
  camera:{
        full_name: "Front Hazard Avoidance Camera",
        id: 20,
        name: "FHAZ",
        rover_id: 5,
       },
earth_date: "2021-02-11",
id: 796011,
img_src: "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03028/opgs/edr/fcam/FLB_666315333EDR_F0861218FHAZ00302M_.JPG",
rover: {
        id: 5,
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        name: "Curiosity",
        status: "active",
  }
}
```

### Rate Limits
The NASA Api's have an hourly rate limit of:
- 1,000 requests per hour
