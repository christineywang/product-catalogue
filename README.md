### A Day in the Life of a Customer Support Engineer

_AKA Show me how Contentful works in the most foolproof way possible._

 <hr>

Hello from the Customer Success team! :wave:

As support engineers, we tackle hundreds of user questions a month such as: _How does Contentful work, what is content modeling, and how does content stored in Contentful get rendered on my web app?_ No two days are the same and it’s quite the exciting life. :sweat_smile:

So why is this blog post titled “A Day in the Life of a Customer Support Engineer”? Even though I just said “no two days are the same,” if my boss were to corner me and make me quantify what I spend most of my day doing (hypothetically, because she’s awesome and this would never happen IRL), I would have to answer: Drinking :coffee: (obviously) and helping new users get started with Contentful.

You see, once people understand what Contentful does, how it works, and how they can integrate it into their projects, they get into this magical, locked-in place with us where their sites are fast, their content is organized, and their build-to-ship process impressively quick. In short, our users are _really_ good at using Contentful.

However, for those of you who are just starting to kick around the idea of using Contentful as your content solution, there could be an initial courtship dance of figuring out how all of this works and what this is all about. Yes, we have very useful [getting started guides](https://www.contentful.com/developers/docs/tutorials/general/get-started/) and example apps (I highly recommend them!) but if you just want to see what Contentful does in the most foolproof way possible, well, step inside my office.

<hr>

Let’s decouple Contentful from all of the cool modern web development technologies for a moment and don’t worry about picking your stack or installing packages yet. Our goal right now is to create a quick project so you can understand how Contentful works and deliver your first bit of content. Once you get a taste for what Contentful can do, it will be :rainbow: :rainbow: and beyond--trust me!

One of my favorite this-is-how-Contentful-works links that I send to new users is a [JSFiddle](https://jsfiddle.net/contentful/kefaj4s8/) that shows the relationship between your content model, your content, and the output to your end product. Using the JSFiddle code as inspiration for our very first project together, I’ve created a template for a make-believe home goods business called Urbän Hømesteäd (when I came up with this name, I was coming off of a vacation high from a winter trip to the Scandinavian countries...what can I say :grimacing:).

![product-catalogue](images/template.png)
[See the example product catalogue [here](https://christineywang.github.io/product-catalogue/)].

<br>
<hr>

## Creating your Contentful space

Before we take a look at the project files, let’s create a new space in Contentful. When you create a space in Contentful, you can either create an empty space (so you would be building your content model from scratch) or you can create a example space that has a content model (and even some entries) already included. Example spaces are a great way for you to get started with Contentful so for this project, we will be creating an example space.

From the web app, click on the hamburger menu on the upper left > _+ Add space_.

In the _Create a new space_ popup, click on _Create an example space_.

Select the **Product Catalogue** space > _Create space_ (don't forget to give your space a name):

![create-space](images/create_space.png)

<br>

After your space is prepared, click on _Get started_ and welcome to your new space! Take a look around and click into the different sections to see your content model, content, and media files. Your content model is where you will create different content types and each entry you create will use one of your content types as a template. Don't worry if this is still confusing to you--it will make sense once you see some content rendered on your webpage.

Now that your space is set up, let's connect Contentful to your web project files. We will be using starter code (for that make-believe online store :stuck_out_tongue_winking_eye:) and because we are taking the path of least resistance, you will not need to install any packages or run code in the command line in order to view your sample web page. All you need are these three files on your computer (download the start code here):
`index.html`
`contentful.css`
`contentful.js`

<br>

## Authenticating Your Website

To have Contentful "speak" with your website, we've already added our CDN in a `<script>` tag to the `<head>` element of your HMTL.
Typically, we recommend that you connect to Contentful by [installing our SDK](https://github.com/contentful/contentful.js#installation) using a package manager such as `npm`. However, since we’ve said goodbye to packages and installs and all of those other extremely-helpful-but-not-for-right-now tools, a `<script>` tag is perfect for our use case.

Next, open up `contentful.js` in a code editor so that you can authenticate your website to fetch content from Contentful. You will need to input your space ID and access token where you initialize the client in your JavaScript.

![authenticate](authenticate.png)

To find your space ID and Delivery API access token from the we app, go to _Space settings_ > _API keys_ > _Content delivery / preview tokens_. Expand the _Example space token 1_ section and you will see your Space ID and Content Delivery API access token. Copy and paste these values over to your code and save your file.

<br>

## Making your first Delivery API Call

Open the `index.html` file in your browser and :boom:. Congrats--you've just delivered content using Contentful!

![project](project.png)

The four entries you see on your website are entries that have already been created in your example space.

## Taking a Closer Look at Your Code

// open js file to look at how we are fetching the product content type. the rest of the content types are used for entries that will be referenced in the product type.

//
