import { Link } from 'react-router-dom';
import '../../../assets/styles/Latest.css';

export default function LatestArticles() {
  const articles = [
    {
      id: 1,
      image: 'src/assets/Images/1l.png', // المسار الجديد
      title: 'Air Jordan x Travis Scott Event',
      link: '/allproducts/',
    },
    {
      id: 2,
      image: 'src/assets/Images/2l.png', // المسار الجديد
      title: 'The timeless classics on the green',
      link: '/allproducts/',
    },
    {
      id: 3,
      image: 'src/assets/Images/3l.png', // المسار الجديد
      title: 'The 2023 Ryder Cup',
      link: '/allproducts/',
    },
  ];

  return (
    <section className="latest-articles-section">
      <div className="section-header">
        <h2 className="section-title">Latest Articles</h2>
        <Link to="/allproducts/" className="view-all-link">
          View More &rarr;
        </Link>
      </div>
      <div className="articles-grid">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <img src={article.image} alt={article.title} className="article-image" />
            <h3 className="article-title">{article.title}</h3>
            <Link to={article.link} className="read-more-link">
              Read More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}