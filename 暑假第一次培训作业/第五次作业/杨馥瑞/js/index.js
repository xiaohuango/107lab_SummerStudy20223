const sidebarTitles = document.querySelectorAll('.sidebar-title');
    const articleContainer = document.getElementById('article-container');

    sidebarTitles.forEach(function(title, index) {
      title.addEventListener('click', function() {
        showArticle(index);
      });
    });

    function showArticle(index) {
      const articles = document.querySelectorAll('.article');
      articles.forEach(function(article) {
        article.style.display = 'none';
      });
      articles[index].style.display = 'block';
    }

    let currentArticleIndex = 0;
    const articles = document.querySelectorAll('.article');
    const totalArticles = articles.length;

    function switchArticle() {
      showArticle(currentArticleIndex);
      currentArticleIndex = (currentArticleIndex + 1) % totalArticles;
    }

    setInterval(switchArticle, 3000); // 每3秒切换一次文章

    showArticle(currentArticleIndex);