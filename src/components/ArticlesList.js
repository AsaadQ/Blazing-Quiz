import React from 'react';
import './Article.css';
import { Link } from 'react-router-dom';



const ArticlesList = ({ articles }) => {
  return (
    <>
      <body className="body-article">
        <div className="container">
          <div className="article-1">
            {articles.map((article, key) => (
              <Link
                className="article"
                key={key}
                to={`/article/${article.name}`}
              >
                {" "}
                <h3 className="article">{article.title}</h3>{" "}
                
                <div className="child" />
                <div className="child" />
                <div className="child" />
              </Link>
            ))}
          </div>
        </div>
      </body>
    </>
  );
};

export default ArticlesList;
  // <p>{article.content[0].substring(0, 150)}...</p>
/*


<div className="container__article">
<div className="card" style="--cards:3;">
  <div className="child">
    <a href="articel1.html" class="article">Startup failure and success factors </a>
    <p>3 articles</p>
  </div>
  <div className="child"></div>
  <div className="child"></div>
  <div className="child"></div>
  <div className="child"></div>
</div>

<div className="card" style="--cards:3;">
  <div className="child">
    
    <p>3 articles</p>
  </div>
  
  <div className="child"></div>
  <div className="child"></div>
</div>
<div className="card" style="--cards:5;">
  <div className="child">
    <a href="index.html" className="article">Startup team  </a>
    <p>5 articles</p>
  </div>
  <div className="child"></div>
</div>
<div className="card" style="--cards:4;">
  <div className="child">
    <a href="index.html" className="article">Startup development method  </a>
    <p>4 articles</p>
  </div>
  <div className="child"></div>
  <div NameclassName="child"></div>
  <div className="child"></div>
</div>
<div className="card" style="--cards:3;">
  <div className="child">
    <a href="index.html" className="article">product development method  </a>
    <p>1 articles</p>
  </div>
  <div className="child"></div>
  <div className="child"></div>
</div>
<div className="card" style="--cards:2;">
  <div className="child">
    <a href="index.html" className="article">    startup development </a>
    <p>2 articles</p>
  </div>
  <div className="child"></div>
  <div className="child"></div>
  <div className="child"></div>
</div>

</div>





.article {
  font-family: Arbutus Slab, serif;
  font-weight: normal;
  color: #000;
  line-height: 1.25;
  text-decoration: none;
  font-size: 25px;
}

p {
  position: absolute;
  bottom: 0;
  font-size: 14px;
}

.container__article {
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 48px;
  margin: 0 auto;
}

.card {
  cursor: pointer;
  position: relative;
  height: 0;
  padding-bottom: 120%;
  --offset-multiplier: 4px;
  -webkit-transition: -webkit-transform 0.6s ease;
  transition: -webkit-transform 0.6s ease;
  transition: transform 0.6s ease;
  transition: transform 0.6s ease, -webkit-transform 0.6s ease;
  --translate: 0;
  -webkit-transform: translate(var(--translate), var(--translate));
          transform: translate(var(--translate), var(--translate));
}
.card:hover {
  --offset-multiplier: 6px;
}
.card:hover {
  --translate: calc(-1px * (var(--cards) - 1));
  -webkit-transition: -webkit-transform 0.3s ease;
  transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
}

.child {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0px 4px 8px #83EAF1, 0px -4px 8px #63A4FF;
  border-radius: 6px;
  -webkit-transition: inherit;
  transition: inherit;
  --translate: calc(var(--offset) * var(--offset-multiplier));
  -webkit-transform: translate(var(--translate), var(--translate));
          transform: translate(var(--translate), var(--translate));
  z-index: 5;
}
.child:nth-child(1) {
  --offset: 0;
  z-index: 4;
}
.child:nth-child(2) {
  --offset: 1;
  z-index: 3;
}
.child:nth-child(3) {
  --offset: 2;
  z-index: 2;
}
.child:nth-child(4) {
  --offset: 3;
  z-index: 1;
}
.child:nth-child(5) {
  --offset: 4;
  z-index: 0;
}

  

  
  @media screen and (max-height: 450px) {
    .overlay a {
      font-size: 20px;
    }
    .overlay .close {
      font-size: 40px;
      top: 15px;
      right: 35px;
    }
  }
  
  @media only screen and (max-width: 800px) {
    .nav__links,
    .cta {
      display: none;
    }
    .menu {
      display: initial;
    }
  }
  */