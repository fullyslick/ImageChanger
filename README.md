# About
This is a simple `HTML`, `CSS`, `JS` code that switches banners and the small images below the banner are highlighted depending on the banner. When the page is loaded banners start to change - the function is called "slideShow". The banner also changes on click of the small images below it or on click of the arrows. To test the code download or clone this repository. Then open the `myHome.html` file inside any browser.

## How To Implement
To implement this code on your site please follow these steps:
**Image Files**
1. Create a folder and put your images inside them. There is no need to have different sizes of images for the banners and for the small images. By default `CSS` will load all the **banners** and their _background-images_ so you can reuse them for the **small images**, too. This will save extra server requests.
2. In the `CSS` create classes `.image-1`, `image-2`, `image-3`, ... etc. and set a background with the images for the **banners**. Example
```
.image-1 {
  background: url('./images/img_nature_wide.jpg') no-repeat;
}

.image-2 {
  background: url('./images/img_fjords_wide.jpg') no-repeat;
}
```
**Banner**
3. Create a `div` with an `id="banner-holder"`. You will need this for the `JS` code to work.
4. Inside this `div` create as many child `div`s as you have `image-` classes. Make sure that they are on the same DOM level (they are siblings). And add a `show` class to the first sibling. Example:
```
<div id="banner-holder">
  <div class="image-1 show"></div>
  <div class="image-2"></div>
  <div class="image-3"></div>
  <div class="image-4"></div>
</div>
```
**Previous / Next arrows**
5. Create to `anchors` with a `class="arrows"`. On the first `anchor` give an `id="previous-banner"` and on the second give an `id="next-banner"`. Example:
```
<a class="arrows"  id="previous-banner" href="#">
</a>

<a class="arrows" id="next-banner" href="#">
</a>
```

You can place `svg` inside them for the arrows like in the provided code. I also have used SVG sprite, it is declared just below the opening `<body>`. Alternatively you can use `CSS` **background** property.

**Small Images (Services)**
5. Create an `ul` element with `id="small-images-holder"`. You will need this for the `JS` code to work.

6. Create as many child `li` as you have `image-` classes. And add an `active` class to the first `li`. Example:
```
<ul id="small-images-holder">
  <li class="image-1 active"></li>
  <li class="image-2"></li>
  <li class="image-3"></li>
  <li class="image-4"></li>
</ul>
```

7. You can put whatever elements you want inside these `li`s but make sure that the child elements does not have a background that will hide the `li`'s background-image. In this code I have used `anchors` and `spans`.

**Adjusting Effects**
8. If you like you can change the highlight effect of the **small images** by changing the `CSS` of `#small-images-holder>li.active>a`.

9. You can set different delay between image switching by setting different value for `delayTime` in `JS` code. It is now set to `3000` milliseconds.

### License
The content of this repository is licensed under a [Creative Commons Attribution License](https://choosealicense.com/licenses/mit/).
