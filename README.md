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
