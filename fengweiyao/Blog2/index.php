<?php 
require_once 'includes/config.php';
if (!$user->is_logged_in()){
    header('Location: login.php');
}
?>

<!DOCTYPE html>
<html lang="ch-CN">
<head>
	<meta charset="utf-8">
	<title>首页</title>
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>

<header class="header-container">
<h1>冯伟尧的博客</h1>
<nav class="nav">
	<header class="nav-menu">
	<h2>导航菜单</h2>
	</header>
	<ul>
		<li><a href="">首页</a></li>
		<li><a href="">关于</a></li>
		<li id="tag"><a href="">标签</a></li>
		<?php 
		if ($user->is_logged_in()){
// 		    echo "<li><a href=''>你好，".$_SESSION['username']."</a></li>";
		    echo "<li><a href='logout.php'>退出</a></li>";
		}
		?>
	</ul>
</nav>
</header>

<section>
    <header id="section-header">    
    	<h2>Blog posts for May 2015</h2>    
    </header>
    <div id="section-header-arrow"></div>

    <article>
        <h3><a href="">Hide some heading: good practice</a></h3>
        <p>This example shows how to hide the heading of the nav element above, while keeping it present in the table of content ?</p>
        <p>It uses the CSS rule in order to hide the &lt;h2&gt;Navigation menu&lt;/h2&gt; in the &lt;nav&gt;...&lt;/nav&gt;:</p>
        <pre>
nav header {
   position: absolute !important;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    padding:0 !important;
    border:0 !important;
    height: 1px !important; 
    width: 1px !important; 
    overflow: hidden;
}       
        </pre>
    </article>

    <article>
	    <header>
	      <h3><a href="">Information about this example</a></h3>
	      This example is a modified version of <a href="http://netstream.ru/htmlsamples/html5-blog/index.html">http://netstream.ru/htmlsamples/html5-blog/index.html</a>
	    </header>
        <p>Try to move the mouse on different elements. The structure will be highlighted and you will be able to see the different inclusions of elements one in each other. If you move the cursor to this sentence, it will be highlighted in dark grey, showing the presence of an &lt;article&gt; element, surrounded by a &lt;section&gt; element (light grey), etc. So we have some articles in a single section element. The page title at the top is a &lt;header&gt; element, while  the tag cloud on the right is a &lt;aside&gt; element. The main menu on top (with Blog, About, Contact) is a &lt;nav&gt; element.</p>
        <figure>
		    <img src="http://www.fredcavazza.net/files/2009/09/html5_structure.png" alt="Example of HTML5 structuring tags" />
		    <figcaption>
		        Fig. 1 : an example of how new structuring elements could be used. This page put a &lt;nav&gt; on top, and does not have headers and footer for each article, like in this figure, but it could... By the way, this is a &lt;figcaption&gt; inside a &lt;figure&gt; element...
		    </figcaption>
		</figure>
	</article>
    
    <article>
		<header>
			<h3><a href="">History</a></h3>
		</header>
    
		<p>Work on HTML 5 originally started in late 2003, as a proof of concept to show that it was possible to extend HTML 4's forms to provide many of the features that XForms 1.0 introduced, without requiring browsers to implement rendering engines that were incompatible with existing HTML Web pages. At this early stage, while the draft was already publicly available, and input was already being solicited from all sources, the specification was only under Opera Software's copyright.</p>
		<p>In early 2004, some of the principles that underlie this effort, as well as an early draft proposal covering just forms-related features, were presented to the W3C jointly by Mozilla and Opera at a workshop discussing the future of Web Applications on the Web. The proposal was rejected on the grounds that the proposal conflicted with the previously chosen direction for the Web's evolution.</p>
		<p>Shortly thereafter, Apple, Mozilla, and Opera jointly announced their intent to continue working on the effort. A public mailing list was created, and the drafts were moved to the WHATWG site. The copyright was subsequently amended to be jointly owned by all three vendors, and to allow reuse of the specifications.</p>
		<p>In 2006, the W3C expressed interest in the specification, and created a working group chartered to work with the WHATWG on the development of the HTML 5 specifications. The working group opened in 2007. Apple, Mozilla, and Opera allowed the W3C to publish the specifications under the W3C copyright, while keeping versions with the less restrictive license on the WHATWG site.</p>
		<p>Since then, both groups have been working together.</p>
	</article>

	<article>
		<header>
			<h3><a href="">HTML vs XHTML</a></h3>
		</header>
		<p>This specification defines an abstract language for describing documents and applications, and some APIs for interacting with in-memory representations of resources that use this language.</p>
		<p>The in-memory representation is known as  DOM5 HTML , or  the DOM  for short.</p>
		<p>There are various concrete syntaxes that can be used to transmit resources that use this abstract language, two of which are defined in this specification.</p>
		<p>The first such concrete syntax is  HTML5 . This is the format recommended for most authors. It is compatible with most legacy Web browsers. If a document is transmitted with the MIME type text/html, then it will be processed as an  HTML5  document by Web browsers.</p>
		<p>The second concrete syntax uses XML, and is known as  XHTML5 . When a document is transmitted with an XML MIME type, such as application/xhtml+xml, then it is processed by an XML processor by Web browsers, and treated as an  XHTML5  document. Authors are reminded that the processing for XML and HTML differs; in particular, even minor syntax errors will prevent an XML document from being rendered fully, whereas they would be ignored in the  HTML5  syntax.</p>
		<p>The  DOM5 HTML ,  HTML5 , and  XHTML5  representations cannot all represent the same content. For example, namespaces cannot be represented using  HTML5 , but they are supported in  DOM5 HTML  and  XHTML5 . Similarly, documents that use the noscript feature can be represented using  HTML5 , but cannot be represented with  XHTML5  and  DOM5 HTML . Comments that contain the string  ->  can be represented in  DOM5 HTML  but not in  HTML5  and  XHTML5 . And so forth.</p>
	</article>
</section>

<footer>
	<p>&copy;2016 冯伟尧的博客 by tank0317</p>
</footer>
</body>
</html>