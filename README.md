# The Complete 2022 Web Development Bootcamp

- [Course resourses](https://www.appbrewery.co/p/web-development-course-resources/).

## Section 1:

<details>
  <summary>Front-End Web Development</summary>
	
  ### 1.1. How Does the Internet Actually Work?
  -	**Internet** is a long piece of wire, And that wire connects different computers to each other. It allows computers to transfer data through this giant wire
  -	A server is a computer that provides files and data to other computers, it allows access 24/7.
  -	A client is a computer that any user is used to access the internet.
  -	When the browser request a website, the request is sent to **ISP** (Internet server provider: The company we pay for internet service) then it searches at DNS that contains the web site's IP addresses. Once the DNS finds the IP address it sends it back to the browser vis ISP. Then the browser sends a direct request through ISP and this message will be delivered via Internet Backbone to the server that is located at that IP address. On that server, all files are needed to view the website home page. The server sends these files back to the client through the internet backbone and the client gets to see the website in the browser. All of that happens in milliseconds.

### 1.2. How Do Websites Actually Work?

- To access the web page we need a browser (allows to look up at IP address and receives data from the server).
- Data from the server contains HTML, CSS, and js files.

### 1.3. To get started

- Need Browser (chrome recommended)
- Text Edittor(Atom, vs code)

</details>

## Section 2:

<details>
  <summary>Introduction to HTML</summary>

### 2.1. Introduction HTML

- HTML : Hyper Text Markup Language.
- A markup language is a computer language that uses tags to define elements within a document.
- html is the foundation of all websites.
- Tag consist of: open tag `<typeOfTag> and closing tag </typeOfTag>`.
- Ex: Heading tag h1, h2, ….,h6 . It gets smaller when the number goes up.
- <typeOfTag /> called self-closing tag.
- Ex: Spacing breack tag <code>br</code>.

### 2.2. The Anatomy of an HTML Tag

- < startTag > Content </ EndTag >
- Horizontal line tag hr accepts attribute size, noshade,..
- Attributes specify modification to the default element.
- Center content using tag `<center>content</center>`.
- Comments are not interpreted by the compiler `<!-- Comment -- >`.

### 2.3. What is The HTML Boilerplate?

- It Is a code template that could be reused.

```
<!doctype html>

<html lang="en">
<head>
<meta charset="utf-8"> //tell the browser that all text in page are encoded using utf-8 encoding system wich is the standered encoding.

<title>The HTML5 Herald</title>
<meta name="description" content="The HTML5 Herald">
<meta name="author" content="SitePoint">

<link rel="stylesheet" href="css/styles.css?v=1.0">

</head>

<body>
<script src="js/scripts.js"></script>
</body>
</html>
```

- <code>meta</code> tag utf-8 tell the browser that all texts on the page are encoded using utf-8 encoding system which is the standard encoding.
- Unicode “utf-8” has all characters and emojis.
- There is a different types of <code>meta</code> tags for diffrent purposes.

### 2.4. How to Structure Text in HTML?

- The code goes inside the body tag.
- Paragraph tag <code>p</code>.
- emphasis Tag <code>em</code> tells the browser that the words between it is emphasis, not just about style.
- italic tag <code>i</code> style element.
- Strong tag <code>strong</code> tells the browser that the words between it is Strong Importance Element.
- <code>bold</code> tag bold styles bold.

### 2.5. HTML Lists

- There are two types of lists.
- Ordered lists <code>ol</code> and unordered lists <code>ul</code>.
- Each type has children <code>li</code> for each item of the list.
- <code>ol</code> list has attributes: start and type to control the list items.

### 2.6. HTML Image Elements

- Self-closing tag that must be with <code>src</code> attribute to the image url.
- <code>alt</code> attribute helps google searching.

### 2.7. HTML Links and Anchor Tags

- HTML : HyperText Markup Language.
- HyperText is some parts of data that connect with hyper links, so when you click on it takes to another part.
- Anchor tags is closing tag `<a> Link text </a>`.
- <code>href</code> attribute is the link destination.

</details>

## Section 3:

<details>
  <summary>Intermediate HTML</summary>

### 3.1. HTML Tables

- Tables main tag is <code>table</code>, and everything between is the actual content.
- To make row use tag <code>tr</code>.
- To make cell inside the row use <code>td</code>.

```
<table>
    <thead>
        <tr>
            <th colspan="2">The table header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
        </tr>
    </tbody>
</table>
```

### 3.2. HTML forms

- main form tag is <code>form</code> to define what should go into our form.
- <code>label</code> tag to some text related to the <code>input</code> element.
- To use different inputs simply change the <code>type</code> of the <code>input</code> to what is needed.
- <code>textarea</code> tag to write message.
- To submit <code>form</code> button use <code>input</code> with <code>type=”submit”</code>.

### 3.3. publish website

- use GitHub to publish free.
- Make a new repository.
- Initialize with a readme file.
- Upload project files
- Give the version a name and commit.
- Go to settings -> GitHub pages -> source
- Change source from none to the main branch.
- Now the website can be accessed by the internet.

</details>

## Section 4:

<details>
  <summary>Introduction to CSS</summary>
  
  ### 4.1. Introduction to css
  -	CSS: cascading style sheet.
  -	Styling html.

### 4.2. Inline css

- Going into the tag and change style `attribute = "property:value;"`.

### 4.3. Internal css

- Add <code>style</code> tag inside the <code>head</code> tag.
- Select element inside <code>style</code> tag.
- Make styles -> <code>selector {Property : value}</code> .

```
<head>
<style>
body {
  background-color: linen;
}

</style>
</head>
```

- No website is completely unstyled. That means that there is <em>default styles</em> being applied by the browser.
- <code>hr</code> tag has border style default values.
- One of the most important role in CSS is to realize that everything in HTML is a box, and the style of these boxes can be affected by changing CSS styles.
- <code>height</code> property isn’t uniqe.
- <code>background-color</code> , <code>height</code>, <code>width</code> properties.
- Change default values to achieve the style needed.

### 4.4. External css

- Add styles in external file.css.
- <code>link</code> this file to html page at <code>head</code> tag.
- Anything in html is affected with this external css.
- This the best way to apply css.

### 4.5. Debug CSS code

- Errors in the console for link href for an external file.
- Inline styles override the external and internal styles.
- Internal styles override the external styles.

### 4.6. The Anatomy of CSS syntax

```
selector {
  propery: value;
}
// who { what: how; }
```

### 4.7. CSS selectors

- Using tag name.

```
tagName {
  propery: value;
}
```

- Using class attribute to specify styles for individual <code>html</code> element .

```
.class{
  propery: value;
}
```

- [Selectors refrence](https://www.w3schools.com/cssref/css_selectors.asp).

### 4.8. CSS Ids

- Using <code>id</code> attribute.
- We can only have one instance of one particular tag <code>id</code> inside a single page.
- <code>id</code> can only use in one place.
- <code>id</code> use to identify one element.

```
#id {
  propery: value;
}
```

- <code>class</code> can be used for a group of related items.
- <code>id</code> used to apply specific styles to a single element.
- Any HTML element can have more than one class.
- A pseudo-class is used to define a special state of an element

```
selector:pseudo-class {
  property: value;
}
```

- [Css pseudo classes](https://www.w3schools.com/css/css_pseudo_classes.asp).

</details>
