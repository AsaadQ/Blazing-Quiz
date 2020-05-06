import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';
import './article.css';
 
const ArticlePage = ({ match }) => {
  const scrollTop = () =>{
    window.scrollTo(0,0);
  };
  const name = match.params.name;
  const articles = articleContent.find((articles) => articles.name === name);
 
  if (!articles) return <NotFoundPage />;
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );


 
  
  return (
    <div className="content-stuff">
      <article className="article__body">
        <h1 className="articles__title1">{articles.title}</h1>
        {articles.content.map((paragraph, key) => (
          <p className="articles__paragraph" key={key}>
            {paragraph}
          </p>
        ))}

      </article>
      <div className="article__related-body" onClick={scrollTop}>
        <h3 className="articles__related-articles">Relaterte artikler:</h3>
        <ArticlesList articles={otherArticles} />
      </div>
    </div>
  );
};
 
export default ArticlePage;