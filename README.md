# BD Sounds

A HTML based project that is designed for a company using the pink and white theme. Along with the design, the project also uses Javascript to create a functional system that allows you to create an account and sign in with that account.

Created by [Bharadwaj Duggaraju](https://instagram.com/bharadwaj_duggaraju/)

**This file for fun has a full walkthrough of the NAV BAR for an example of the type of coding I do**

## Project Descriptions

### [index.html](https://bdsounds.glitch.me/#)

#### _Tab_

The Tab has the text BD Souds | Home with the image of music note

How do we set these things

```HTML
<title>BD Sounds | Home</title>
<link
  rel="icon"
      href="https://encrypted-tbn0.gstatic.com/images?q=tbn%3A
            ANd9GcSQODcosCr76ApfAEhidO9s_RUjcFlnrXXHOFWDS9TnPz6
            sUtAN%3Aclipart-library.com%2Fimages%2FrijG895rT.jpg&usqp=CAU"
/>

```

#### _Nav Bar_

##### Logo from [Font Awesome](https://kit.fontawesome.com/7b9611f913.js)

The Nav starts with a logo that is aligned to the left. It the icon of the music to match the theme of the website. We use Font Awesome icons to get these Icons.

HTML for the icon

```html
<div class="nav-brand">
  <a href="index.html">
    <i class="fas fa-music"></i>
  </a>
</div>
```

The only styles we apply are making the icon pink and making it a bit bigger that orignally rendered. 


##### Nav Items

Full architecture

``` htnm 
 <header> 
      <div class="container">
        <nav>
          <div class="nav-brand">
            <a href="index.html">
              <i class="fas fa-music"></i>
            </a>
          </div>

          <div class="menu-icons open">
            <i class="icon ion-md-menu"></i>
          </div>

          <ul class="nav-list">
            <div class="menu-icons close">
              <i class="icon ion-md-close"></i>
            </div>

            <li class="nav-item">
              <a href="index.html#home" class="nav-link current">Home</a>
            </li>
            <li class="nav-item">
              <a href="index.html#about" class="nav-link">About</a>
            </li>
            <li class="nav-item">
              <a href="index.html#features" class="nav-link">Features</a>
            </li>

            <li class="nav-item">
              <a href="signin.html" class="nav-link">Log In</a>
            </li>
            <li class="nav-item special">
              <a href="signup.html" class="nav-link">Sign Up</a>
            </li>
           
            
          </ul>
        </nav>
        
        
        
      </div>
    </header>

```
This includes the Nav Brand Class which is talked about earlier and the nav section which is framed around a unordered list with list items that each convey one item of the navigation bar. 

##### Current Class

As you might have noticed, the nav bar item with the name of Home has the class of current. This general class current which is written using a css selector makes any nav element which has the class applied to it have a perma pink underline used to show the current page.

This is done by:

``` css 
 
  .nav-link,
  .current {
    color: black;
    font-weight: bolder;
    position: relative;
    font-size: 1.6rem;
  }

  .nav-link::before,
  .current::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    background-color: pink;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 650ms;
  }

  .nav-link:hover::before {
    transform: scaleX(1);
  }
}

```

Though the other nav links have a perma underline, this one with the current selector will have the underline be permanent

##### Special Class

The sign up button has a additinal Speical class to show something special. It has a nice linear gradient background and a changed font size.

### ← style.css

#### Three style sheets used to create selectors to style all the pages.

### ← script.js

#### Where all the auth takes place. Also has some nice features to tie the project together! Using LOCALSTORAGE Databse to have a storage for my info. Two rows, key and value.

### ← assets

#### All the cool images I used!

## Made by Bharadwaj Duggaraju

\ ゜ o ゜)ノ
