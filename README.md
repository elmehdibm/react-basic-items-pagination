# React Basic Items Pagination

> A LightWeight component helper in React developement

The appearance of Items is a common thing in WebSites, you can't find any E-commerce website without a list of articles to purchase, if you know the importance of this then take a look at this helper.<br>
Now it's possible in an easy way to create a set of items and costumize them according to your website  😁 , you have a project or work inside an organization , you want to save time or help your team , you can use this free helper to create an awesome set of items in less than one minute !
<br>
[Click me to see a demonstration ✋ !](https://demo-react-basic-items-pagination.netlify.com/)
<br>
Let's Begin  😎 !
<br>
![image](https://drive.google.com/uc?export=view&id=1vAlMWgpf4lJ6GWr6bIaIPW4QRlxB9SVH)
## Table of Contents 
---
<div style="font-size:18px"> <a style="color: currentColor" href="#intro"> ➡️  Introduction </a> </div>
<ul>
    <a style="color: currentColor" href="#specs"><li>Specifications</li></a>
    <a style="color: currentColor" href="#features"><li>Actual & Upcoming Features</li></a>
</ul>
<div style="font-size:18px"> <a  style="color: currentColor" href="#start"> ➡️  Getting Started </a></div>
<ul><a style="color:currentColor" href="#prerequisites"><li>Prequisities</li></a></ul>
<ul><a style="color:currentColor" href="#install"><li>Installing</li></a></ul>
<ul><a style="color:currentColor" href="#example"><li>Example</li></a></ul>
<ul><a style="color:currentColor" href="#custom"><li>More costumizing</li></a></ul>
<div style="font-size:18px"><a style="color:currentColor" href="#author"> ➡️  Authors </a></div>
<div style="font-size:18px"><a style="color:currentColor" href="#licence"> ➡️  Licence </a></div>

<div id="intro">

## Introduction
------

Take a Look of the result of this awesome component helper ! ( *I've choosed the pictures below to illustrate my example because I'm an anime lover*  🤣  🤣  🤣  ) 
<br>
![image](https://drive.google.com/uc?export=view&id=1ASBZVBkM7DKAcPz-xEVgEo0QQbHxvsM8)

<div id="specs">

### ► Specifications :
• Easy to use 😉
<br> • Full style customization ✂️
<br> • Place it anywhere in your code, it'll work 🎯
<br> • All Browsers(IE, Firefox, Chrome ...) Support 🚀

</div>
<div id ="features">

###  ►  Actual & Upcoming Features :
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;☑️ Rendering Responsively the set of Items<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;☑️ Full Overriding Styles of Elements<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⏹️ Multiple Displaying Modes (Choosing title/image positions)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⏹️ Supporting Fetching data by a given url <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⏹️ Pagination & Lazy loading on fetching data <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⏹️ Supporting Items that display media (video, gifs ...) <br>

</div>
</div>
<div id="start">

## Getting Started
------
It's simple whether you are a newbie or expert with React, just by following the instructions below you'll be able to use this library and do this cool stuff !
<div id="prerequisites">

###  ►  Prerequisites
</div>

Since you are working with react, it's fine you'll not need to install any other dependancy, 'React >= 16.0' is the only dependancy of this helper 🤗.
<div id="install">

###  ►  Installing
</div>

This package is available in npm repository as react-basic-items-pagination.
`````
npm install react-basic-items-pagination --save
`````
Or by Using Yarn.
`````
yarn add react-basic-items-pagination --save
`````
Now wherever you want in your project, you can import it
`````
import BasicItemsPagination from 'react-basic-items-pagination';
`````
<div id="example">

###  ►  Example
</div>

*It's so simple ;) , now it's ready to use just by calling the tag of BasicItemsPagination ; For more clarification ↓↓↓ check the example below ↓↓↓*
The sample code :
```
<BasicItemsPagination
    height={400} // height of each Item
    verticalSpacing={5} // The space of Items Vertically
    horizontalSpacing={5} // The space of Items Horizontally
    itemsPerRow={2} // Number of Items in each row of the page
    itemsNumber={4} // Number of Items in each page
    withImage // Whether the Item contain Image or not
    data={mockedData} // We Provide Data that contain the title , description and image url of the items
    imageStyle={ // We can choose the rate size of image contained in each Item
        {
        "heightRate": 100,
        "widthRate": 50
        }
    }
    childrenContent={ // Wanna add some button for action or whatever, add it here !
        (item) => {
            <div>
                Whatever you want ;) !
                {item.id} // You'll need the item object for some actions
            </div>
        }
    }
/>
```
The format of Data :
```
import HxHBoss from `${your-path}/img/HxH-boss.jpg`;
import LawKid from `${your-path}/img/Law-Kid.jpg`;
import LuffyQuote from `${your-path}/img/Luffy-Punch-Line.jpg`;
import PirateKings from `${your-path}/img/Pirate-Kings.jpg`;

 mockedData = [
    {
        "title": "HxH Boss",
        "image": HxHBoss,
        "description": "The boss of spider bands in HunterXHunter"
    },
    {
        "title": "Trafalgaw Law Kid",
        "image": LawKid,
        "description": "Law Holding his Ope-Ope Devil Fruit"
    },
    {
        "title": "Luffy Quote",
        "image": LuffyQuote,
        "description": "If you don't take risks !\nYou can't create A Future !\nDamn Right :D !"
    },
    {
        "title": "One Piece Pirate Kings",
        "image": PirateKings,
        "description": "Luffy , Roger and Rayleigh !\n Such Epicness in one picture !"
    }
  ];
```
The output result :
<br><br>
![image](https://drive.google.com/uc?export=view&id=1fw1llhEseuTqODh9wIvbnIvgp2fSh6M7)

<div id="custom">

### ► More Costumizing 
</div>
You'll notice that the Example above need to be more stylish !
<br>
Don't worry, you can add a costum css styles in each composant in our set of items.
<br>
We can override the style of this properties :
<br>
<ul>
<li>
imageStyle
</li>
<li>
boxStyle
</li>
<li>
childrenStyle
</li>
</ul>
Let's add some shadowing and spacing and see the results !
<br>

````
<BasicItemsPagination
    ....
    verticalSpacing={4}
    horizontalSpacing={4}
    ....
    imageStyle={
        {
        "heightRate": 100,
        "widthRate": 50,
        "borderTopLeftRadius": "10px",
        "borderBottomLeftRadius": "10px",
        "boxShadow": "4px 0px 5px 1px gray"
        }
    }
    boxStyle={
        {
        "borderRadius": "10px",
        "boxShadow": "0px 0px 10px 0px"
        }
    }
````
The output result :
<br>
![image](https://drive.google.com/uc?export=view&id=1AxfQa1LZBbjamvVj7PIrtvGRzRnf5cqC)

</div>
<div id="author">

## Authors
</div>

-------
* **Boumhicha El Mehdi** - *Initial work* - [Elmehdibm](https://github.com/elmehdibm/)
<br>
(*Dear developers you're welcome to contribute in this work or just try this solution and leave some comments or maybe some stars to make the helper more available to everyone * 🙏)

<div id="licence">

## License
</div>

--------
This project is licensed under the MIT License - see the [LICENSE.md](.\LICENSE.md) file for details
