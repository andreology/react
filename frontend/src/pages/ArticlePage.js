//Andre Barajas
//React Blog Site Practice 
//Summer 19
import React from 'react';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';
import ArticlesList from '../components/ArticlesList';

//ES6 match destructoring syntax. contains current url and if it matches route path
const ArticlePage = ({ match }) => {
   const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    if (!article) return <NotFoundPage/>

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (    
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <ArticlesList articles={otherArticles} />
        </>
        
    );
}

export default ArticlePage;